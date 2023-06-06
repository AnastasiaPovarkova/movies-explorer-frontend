import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__info">
        <p className="footer__copyright">
          &copy;&nbsp;{new Date().getFullYear()}
        </p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/AnastasiaPovarkova" target="_blank" rel="noreferrer" className="footer__link">Github</a>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;