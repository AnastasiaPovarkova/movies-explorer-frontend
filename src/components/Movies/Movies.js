import React from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Futher from '../Futher/Futher';

function Movies(props) {

  return (
    <>
      <SearchForm 
        onMovieSearch={props.onMovieSearch} 
        isChecked={props.isChecked} 
        setIsChecked={props.setIsChecked}
        onFilterCheckbox={props.onFilterCheckbox}/>
      <MoviesCardList isLoading={props.isLoading} movies={props.foundMovies} onSaveMovie={props.onSaveMovie}/>
      <Futher />
    </>
  );
}

export default Movies;
