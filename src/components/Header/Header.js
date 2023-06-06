import React from "react";
import logo from "../../images/logo.svg";
import { Link, Routes, Route } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
      <Routes>
        {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
          <Route path={path} element={<img className="header__logo" src={logo} alt="Movies Explorer" />} />
        ))}
      </Routes>
        <div className="header__nav">
          <Routes>
            {["/movies", "/saved-movies", "/profile"].map((path) => (
              <Route path={path} element={<> 
                <Link to="/movies" className="header__navlink header__navlink-500">Фильмы</Link>
                <Link to="/saved-movies" className="header__navlink">Сохранённые фильмы</Link>
              </>} />
            ))}
          </Routes>
        </div>
      </div>
      <div className="header__right">
        <Routes>
          <Route path="/" element={<> 
            <Link to="/signup" className="header__link">Регистрация</Link>
            <Link to="/signin" className="header__link header__link-entry">Войти</Link>
          </>} />
          {["/movies", "/saved-movies", "/profile"].map((path) => (
            <Route path={path} element={<Link to="/profile" className="header__link header__link-account">Аккаунт</Link>} />
          ))}
        </Routes>
      </div>
    </header>
  );
}

export default Header;