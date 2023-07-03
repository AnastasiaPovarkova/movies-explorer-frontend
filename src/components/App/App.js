import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [moviesForRender, setMoviesForRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [isInput, setIsInput] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageProfile, setErrorMessageProfile] = useState('');
  const [nothingFound, setNothingFound] = useState('');
  const [isFuther, setIsFuther] = useState(false);
  const [firstMoviesAmount, setFirstMoviesAmount] = useState(0);
  const [addMoviesAmount, setAddMoviesAmount] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize()); 

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([moviesApi.getUserInfo(), moviesApi.getSavedMovies()])
      .then(([data, movies]) => {
        setCurrentUser(data.user);
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    setMoviesAmounts();
  }, [windowSize]);

  const setMoviesAmounts = () => {
    if (windowSize.innerWidth > 768) {
      setFirstMoviesAmount(12);
      setAddMoviesAmount(3);
    } else if (windowSize.innerWidth > 480) {
      setFirstMoviesAmount(8);
      setAddMoviesAmount(2);
    } else { 
      setFirstMoviesAmount(5);
      setAddMoviesAmount(2);
    }
  }

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
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
          handleLogin(formValue);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function handleLogin(formValue) {
    setIsAuthLoading(true);
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          setErrorMessage(err.validation.body.message);
        } else {
          setErrorMessage(err.message);
        }
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

  function handleCompareMovies(filteredArr) {
    filteredArr.forEach(filterMovie => { 
      savedMovies.forEach(savedMovie => {
        if (filterMovie.id === savedMovie.movieId) {
          filterMovie.isSaved = true;
        }
    })})
  }

  function handleRenderMovies(filteredArr) {
    if (filteredArr.length === 0) {
      setNothingFound('Ничего не найдено');
    } else {
      setFilterMovies(filteredArr);
      setMoviesForRender(filteredArr.slice(0, firstMoviesAmount) || filteredArr);
      setNothingFound('');
    }
    if (filteredArr.length <= firstMoviesAmount) {
      setIsFuther(false);
    } else setIsFuther(true);
  }

  function handleFilterCheck(checked) {
    if (isInput) {
      setIsLoading(true);
      mainApi.getMovies()
        .then((data) => {
          let filtered = {};
          if (checked) {
            setNothingFound('');
            filtered = data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(isInput.toLowerCase())));
            handleCompareMovies(filtered);
          } else {
            filtered = data.filter(movie => movie.nameRU.toLowerCase().includes(isInput.toLowerCase()));
            handleCompareMovies(filtered);
          };
          handleRenderMovies(filtered);
      })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }

  function handleMovieSearch(input) {
    setIsLoading(true);
    setIsInput(input.input);
    mainApi.getMovies()
      .then((data) => {
        let filtered = {};
        if (isFilterChecked) {
          filtered = data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(input.input.toLowerCase())));
          handleCompareMovies(filtered);
        } else {
          filtered = data.filter(movie => movie.nameRU.toLowerCase().includes(input.input.toLowerCase()));
          handleCompareMovies(filtered);
        };
        handleRenderMovies(filtered);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleMovieRender() {
    setMoviesForRender(filterMovies.slice(0, moviesForRender.length + addMoviesAmount) || filterMovies);
    if (filterMovies.length <= moviesForRender.length + addMoviesAmount) {
      setIsFuther(false);
    } else setIsFuther(true);
  }

  function handleSavedFilterCheck(checked) {
    setIsLoading(true);
    moviesApi.getSavedMovies()
      .then((data) => {
        if (checked) {
          setSavedMovies(data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(isInput.toLowerCase()))));
        } else {
          setSavedMovies(data.filter(movie => movie.nameRU.toLowerCase().includes(isInput.toLowerCase())));
        };
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleSavedMovieSearch(input) {
    setIsLoading(true);
    setIsInput(input.input);
    moviesApi.getSavedMovies()
      .then((data) => {
        if (isFilterChecked) {
          setSavedMovies(data.filter(movie => (movie.duration < 40) && (movie.nameRU.toLowerCase().includes(input.input.toLowerCase()))));
        } else {
          setSavedMovies(data.filter(movie => movie.nameRU.toLowerCase().includes(input.input.toLowerCase())));
        };
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    if (movie.isSaved) {
      let movieForDelete = savedMovies.find(mov => (mov.movieId === movie.id));
      moviesApi.deleteMovie(movieForDelete?._id)
        .then((newMovie) => {
          movie.isSaved = false;
          setMoviesForRender((state) => state.map((mov) => (mov.id === movie.id ? movie : mov)));
          setSavedMovies(savedMovies.filter((mov) => mov.movieId !== newMovie.myMovie.movieId));
        })
        .catch((err) => console.log(err));
    } else {
      moviesApi.saveMovie(movie)
        .then((newMovie) => {
          movie.isSaved = true;
          setSavedMovies([...savedMovies, newMovie]);
          setMoviesForRender((state) => state.map((mov) => (mov.id === newMovie.movieId ? movie : mov)));
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteMovie(movie) {
    moviesApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((mov) => mov._id !== movie._id));
      })
      .catch((err) => console.log(err));
  }

  function onEditProfileSubmit(formValue) {
    moviesApi.editProfile(formValue)
      .then((data) => {
        console.log('Данные обновлены');
        setCurrentUser(data.user);
        setErrorMessageProfile('');
        setIsEditing(false);
      })
      .catch((err) => {
        setErrorMessageProfile(err.message);
      });
  }

  function handleLogout() {
    auth.logout()
      .then((data) => {
        console.log(data.message);
        setLoggedIn(false);
        setFilterMovies([]);
        setIsInput('');
        setErrorMessage('');
      })
      .catch((err) => console.log(err));
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
                filterMovies={moviesForRender}
                onFilterCheckbox={handleFilterCheck}
                onMovieSearch={handleMovieSearch} 
                isChecked={isFilterChecked}
                setIsChecked={setIsFilterChecked}
                onSaveMovie={handleSaveMovie}
                nothingFound={nothingFound}
                onFuther={handleMovieRender}
                isFuther={isFuther}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute 
                element={SavedMovies}
                savedMovies={savedMovies}
                onFilterCheckbox={handleSavedFilterCheck}
                isChecked={isFilterChecked}
                setIsChecked={setIsFilterChecked}
                onMovieSearch={handleSavedMovieSearch}
                onDeleteMovie={handleDeleteMovie}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute 
                element={Profile}
                onLogout={handleLogout}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onEditProfileSubmit={onEditProfileSubmit}
                errorMessageProfile={errorMessageProfile}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register 
              handleRegister={handleRegister}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              isAuthLoading={isAuthLoading}
            />}
          />
          <Route
            path="/signin"
            element={<Login 
              handleLogin={handleLogin} 
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
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
