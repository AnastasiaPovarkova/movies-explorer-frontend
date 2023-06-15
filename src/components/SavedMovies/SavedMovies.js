import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Futher from '../Futher/Futher';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList isSavedMovies={true}/>
    </>
  );
}

export default SavedMovies;