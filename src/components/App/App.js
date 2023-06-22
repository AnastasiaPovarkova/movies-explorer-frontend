import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
export const UserContext = React.createContext();


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [isInput, setIsInput] = useState(false);

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
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="app">
        <Header 
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
        />
        <main className="app__main">
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/movies"
            element={<Movies 
                        isLoading = {isLoading}
                        foundMovies={filterMovies}
                        onFilterCheckbox={handleFilterCheck}
                        onMovieSearch={handleMovieSearch} 
                        isChecked={isFilterChecked}
                        setIsChecked={setIsFilterChecked}
                    />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies />}
          />
          <Route
            path="/profile"
            element={<> <Profile /> </>}
          />
          <Route
            path="/signup"
            element={<Register />}
          />
          <Route
            path="/signin"
            element={<Login />}
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
