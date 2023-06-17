import React from "react";
import './MoviesCard.css';
import movie1 from "../../images/movie1.png";
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  let location = useLocation();
  return (
    <section className="movie"> 
      <div className="movie__container"> 
        <div className="movie__info">
          <h2 className="movie__name">33 слова о дизайне</h2>
          <h2 className="movie__duration">1ч 47м</h2>
        </div>
        <button  
          type="button" 
          aria-label="Сохранить" 
          className={`movie__button ${(location.pathname === "/movies") ? "movie__save" : "movie__close"}`}
        />
      </div> 
      <img className="movie__img" src={movie1} alt="movieimage" />
    </section>
  );
}

export default MoviesCard;