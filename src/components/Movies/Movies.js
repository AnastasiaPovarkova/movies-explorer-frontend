import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Futher from '../Futher/Futher';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList isSavedMovies={false}/>
      <Futher />
    </>
  );
}

export default Movies;
