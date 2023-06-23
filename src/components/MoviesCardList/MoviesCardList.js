import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  return (
    <section className="movies"> 
      {props.isLoading && <Preloader /> ||
        props.movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              movie={movie}
              onSaveMovie={props.onSaveMovie}
            />
          );
        })}
    </section>
  );
}

export default MoviesCardList;