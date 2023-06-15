import React from "react";
import './MoviesCard.css';
import movie1 from "../../images/movie1.png";

function MoviesCard(isSavedMovies) {
  console.log('isSavedMovies: ', isSavedMovies);
  return (
    <div className="movie"> 
      <div className="movie__container"> 
        <div className="movie__info">
          <h2 className="movie__name">33 слова о дизайне</h2>
          <h2 className="movie__duration">1ч 47м</h2>
        </div>
        <button type="button" aria-label="Сохранить" className={`movie__button ${isSavedMovies ? "movie__close" : "movie__save"}`}/>
      </div> 
      <img className="movie__img" src={movie1} alt="movieimage" />
    </div>
  );
}

export default MoviesCard;