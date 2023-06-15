import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(isSavedMovies) {
  return (
    <div className="movies"> 
      <MoviesCard isSavedMovies={isSavedMovies}/>
      <MoviesCard isSavedMovies={isSavedMovies}/>
      <MoviesCard isSavedMovies={isSavedMovies}/>
      <MoviesCard isSavedMovies={isSavedMovies}/>
      <MoviesCard isSavedMovies={isSavedMovies}/>
      <MoviesCard isSavedMovies={isSavedMovies}/>
    </div>
  );
}

export default MoviesCardList;