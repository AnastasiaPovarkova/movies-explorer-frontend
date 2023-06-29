import React from "react";
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  let location = useLocation();

  let ButtonSaveClass = `${(props.movie.isSaved) ? "movie__saved" : "movie__save"}`;

  function handleSaveMovie(e) {
    e.preventDefault();
    props.onSaveMovie(props.movie);
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    props.onDeleteMovie(props.movie);
  }

  return (
    <section className="movie">
      <div className="movie__container">
        <div className="movie__info">
          <h2 className="movie__name">{props.movie.nameRU}</h2>
          <h2 className="movie__duration">{props.movie.duration} мин</h2>
        </div>
        <button  
          type="button" 
          aria-label="Сохранить" 
          className={`movie__button ${(location.pathname === "/movies") ? ButtonSaveClass : "movie__hidden"}`}
          onClick={handleSaveMovie}
        />
        <button  
          type="button" 
          aria-label="Сохранить" 
          className={`movie__button ${(location.pathname === "/saved-movies") ? "movie__close" : "movie__hidden"}`}
          onClick={handleDeleteMovie}
        />
      </div> 
      <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__img" src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt="movieimage" />
      </a>
    </section>
  );
}

export default MoviesCard;