import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList/>
    </>
  );
}

export default SavedMovies;