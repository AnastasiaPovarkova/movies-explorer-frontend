import { useEffect } from "react";
import logo from "../../images/logo.svg";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import './Header.css';

function Header({handleBurgerClick, isBurgerOpen, onClose, loggedIn}) {
  let location = useLocation();

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isBurgerOpen]);

  return (
    <header className={`${(location.pathname === "/" || location.pathname === "/movies" 
    || location.pathname === "/saved-movies" || location.pathname === "/profile") ? "header" : "header__hidden"}`}>
      <div className="header__left">
      <Routes>
        {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
          <Route path={path} element={<Link to="/"><img className="header__logo" src={logo} alt="Movies Explorer" /></Link>} />
        ))}
        <Route path="*" element={<p className="header__hidden">a</p>} />
      </Routes>
        <div className="header__nav">
          <Routes>
            {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
              <Route path={path} element={<> 
                <Link 
                  to="/movies" 
                  className={`header__navlink 
                    ${(location.pathname === "/movies") ? "header__navlink-500" : ""}
                    ${(loggedIn) ? '' : 'profile__hidden'}`}>Фильмы</Link>
                <Link 
                  to="/saved-movies" 
                  className={`header__navlink 
                    ${(location.pathname === "/saved-movies") ? "header__navlink-500" : ""}
                    ${(loggedIn) ? '' : 'profile__hidden'}`}>Сохранённые фильмы</Link>
              </>} />
            ))}
            <Route path="*" element={<p className="header__hidden">a</p>} />
          </Routes>
        </div>
      </div>

      <div className="header__right">
        <Routes>
          {["/", "/movies", "/saved-movies", "/profile"].map((path) => (
            <Route path={path} element={<>
              <Link to="/signup" className={`header__link ${(loggedIn) ? 'profile__hidden' : ''}`}>Регистрация</Link>
              <Link to="/signin" className={`header__link header__link-entry ${(loggedIn) ? 'profile__hidden' : ''}`}>Войти</Link>
              <Link 
                to="/profile" 
                className={`header__link header__link-account ${(loggedIn) ? '' : 'profile__hidden'}`}>Аккаунт</Link>
              <button
                type="button"
                aria-label="Нравится"
                className={`header__burger ${isBurgerOpen ? "header__burger-close" : ""} ${(loggedIn) ? '' : 'profile__hidden'}`}
                onClick={handleBurgerClick}
            ></button>
            </>} />
          ))}
          <Route path="*" element={<p className="header__hidden">a</p>} />
        </Routes>
        <div className={`header__back ${isBurgerOpen ? "header__burger-opened" : ""}`}></div> 
        <div className={`header__container ${isBurgerOpen ? "header__burger-opened" : ""}`}>
          <Link to="/" className={`header__burgerlink ${(location.pathname === "/") ? "header__burgerlink-here" : ""}`} onClick={onClose}>Главная</Link>
          <Link to="/movies" className={`header__burgerlink ${(location.pathname === "/movies") ? "header__burgerlink-here" : ""}`} onClick={onClose}>Фильмы</Link>
          <Link to="/saved-movies" className={`header__burgerlink ${(location.pathname === "/saved-movies") ? "header__burgerlink-here" : ""}`} onClick={onClose}>Сохранённые фильмы</Link>
          <Link to="/profile" className="header__burgerlink header__burgerlink-acc" onClick={onClose}>Аккаунт</Link>
        </div>
      </div>
      
    </header>
  );
}

export default Header;