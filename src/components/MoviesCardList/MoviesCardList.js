import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  return (
    <section className="movies"> 
      {props.isLoading && <Preloader /> ||
       props.nothingFound && <h2 className="movies__notfound">{props.nothingFound}</h2> ||
        props.movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onSaveMovie={props.onSaveMovie}
              onDeleteMovie={props.onDeleteMovie}
            />
          );
        })}
    </section>
  );
}

export default MoviesCardList;