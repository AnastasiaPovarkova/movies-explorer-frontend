import React from "react";
import './AboutMe.css';
import me from "../../../images/me.JPG";

function AboutMe() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__main">
        <div className="about__info"> 
          <h2 className="about__name">Анастасия</h2>
          <h3 className="about__profession">Фронтенд-разработчик, 27 лет</h3>
          <h3 className="about__text">Я живу в Санкт-Петербурге, закончила факультет электротехники и автоматики СПбГЭТУ "ЛЭТИ". У меня есть муж 
              и дочь. Я люблю слушать музыку, увлекаюсь вейкбордом. С 2017 года работала 
              в компании «Ready for Sky», участвовала в разработке и продаже умного дома. В декрете прошла курс по веб-разработке.</h3>
          <a href="https://github.com/AnastasiaPovarkova" target="_blank" className="about__link" rel="noreferrer">Github</a>
        </div>
        <img className="about__img" src={me} alt="Me"></img>
      </div>
    </section>
  );
}

export default AboutMe;