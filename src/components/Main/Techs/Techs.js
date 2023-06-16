import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className="techs-back" id="techs">
        <div className="techs">
        <h2 className="techs__name">
            Технологии
        </h2>
        <h2 className="techs__title">7 технологий</h2>
        <h3 className="techs__text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</h3>
        <div className="techs__info">
            <p className="techs__item">HTML</p>
            <p className="techs__item">CSS</p>
            <p className="techs__item">JS</p>
            <p className="techs__item">React</p>
            <p className="techs__item">Git</p>
            <p className="techs__item">Express.js</p>
            <p className="techs__item">mongoDB</p>
        </div>
        </div>
    </section>
  );
}

export default Techs;