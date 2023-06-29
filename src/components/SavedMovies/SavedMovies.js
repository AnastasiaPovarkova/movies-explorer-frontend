import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
  console.log('in Saved Movies: ', props.savedMovies)
  return (
    <>
      <SearchForm 
        onFilterCheckbox={props.onFilterCheckbox}
        isChecked={props.isChecked} 
        setIsChecked={props.setIsChecked}
        onMovieSearch={props.onMovieSearch}
      />
      <MoviesCardList 
        isLoading={props.isLoading} 
        movies={props.savedMovies} 
        onDeleteMovie={props.onDeleteMovie}
      /> 
    </>
  );
}

export default SavedMovies;