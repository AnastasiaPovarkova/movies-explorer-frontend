import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import '../Movies/Movies.css';

function SavedMovies(props) {
  return (
    <>
      <SearchForm 
        onFilterCheckbox={props.onFilterCheckbox}
        isChecked={props.isChecked} 
        setIsChecked={props.setIsChecked}
        onMovieSearch={props.onMovieSearch}
      />
      {(props.isLoading && <Preloader />) || 
        (props.nothingFound && <h2 className="movies__notfound">{props.nothingFound}</h2>) ||
        <MoviesCardList 
          movies={props.savedMovies} 
          onDeleteMovie={props.onDeleteMovie}
        /> 
      }
    </>
  );
}

export default SavedMovies;