import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList isLoading={props.isLoading} movies={props.savedMovies}/> 
    </>
  );
}

export default SavedMovies;