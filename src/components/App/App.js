import './App.css';
import React from "react";
import { useState } from "react";
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
export const UserContext = React.createContext();


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleBurgerClick() {
    if (isBurgerMenuOpen) {
      setIsBurgerMenuOpen(false);
    } else setIsBurgerMenuOpen(true);
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="App-page">
        <Header 
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerMenuOpen}
          onClose={closeBurgerMenu}
        />
        <main>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/movies"
            element={<Movies  />}
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
