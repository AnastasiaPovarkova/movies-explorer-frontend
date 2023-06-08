import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <div className="movies"> 
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </div>
  );
}

export default MoviesCardList;