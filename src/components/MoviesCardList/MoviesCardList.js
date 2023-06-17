import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <section className="movies"> 
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </section>
  );
}

export default MoviesCardList;