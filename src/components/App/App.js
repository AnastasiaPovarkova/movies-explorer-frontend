import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import auth from "../../utils/Auth";
import ProtectedRoute from "../../utils/ProtectedRoute";
import { UserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    moviesApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setUserEmail(res.user.email);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => console.log(err));
};

  function handleRegister(formValue) {
    setIsAuthLoading(true);
    auth
      .register(formValue.email, formValue.password, formValue.name)
      .then((res) => {
        if (res) {
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function handleLogin(formValue) {
    setIsAuthLoading(true);
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        console.log('Data in Login: ', data);
        if (data) {
          console.log('Data.email in Login: ', data.email);
          setUserEmail(data.email);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleBurgerClick() {
    if (isBurgerMenuOpen) {
      setIsBurgerMenuOpen(false);
    } else setIsBurgerMenuOpen(true);
  }

  function handleFilterCheck(checked) {
    setIsLoading(true);
    mainApi.getMovies()
      .then((data) => {
        if (checked) {
          setFilterMovies(data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(isInput.toLowerCase()))));
        } else {
          setFilterMovies(data.filter(movie => movie.nameRU.toLowerCase().includes(isInput.toLowerCase())));
        };
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleMovieSearch(input) {
    setIsLoading(true);
    setIsInput(input.input);
    mainApi.getMovies()
      .then((data) => {
        if (isFilterChecked) {
          setFilterMovies(data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(input.input.toLowerCase()))));
        } else {
          setFilterMovies(data.filter(movie => movie.nameRU.toLowerCase().includes(input.input.toLowerCase())));
        };
        if (savedMovies) {
          filterMovies.forEach(filterMovie => { 
            savedMovies.forEach(savedMovie => {
              if (filterMovie.movieId === savedMovie.id) {
                filterMovie.isSaved = true;
              }
            })
          })
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    if (movie.isSaved) {
      console.log('unsaved');
      movie.isSaved = false;
    } else {
      // moviesApi.saveMovie(movie)
      //   .then((data) => {
      //     setSavedMovies(data);
      //     console.log(data);
      //   })
      //   .catch((err) => console.log(err));
      console.log('saved');
      movie.isSaved = true;
    }
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Header 
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
          loggedIn={loggedIn}
        />
        <main className="app__main">
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute 
                element={Movies}
                isLoading = {isLoading}
                foundMovies={filterMovies}
                onFilterCheckbox={handleFilterCheck}
                onMovieSearch={handleMovieSearch} 
                isChecked={isFilterChecked}
                setIsChecked={setIsFilterChecked}
                onSaveMovie={handleSaveMovie}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute 
                element={SavedMovies}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute 
                element={Profile}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register 
              handleRegister={handleRegister}
              isAuthLoading={isAuthLoading}
            />}
          />
          <Route
            path="/signin"
            element={<Login 
              handleLogin={handleLogin} 
              isAuthLoading={isAuthLoading}
            />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
