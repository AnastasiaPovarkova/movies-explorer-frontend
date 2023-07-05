import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Futher from '../Futher/Futher';
import Preloader from '../Preloader/Preloader'
import './Movies.css';

function Movies(props) {

  return (
    <>
      <SearchForm 
        onMovieSearch={props.onMovieSearch} 
        isChecked={props.isChecked} 
        setIsChecked={props.setIsChecked}
        onFilterCheckbox={props.onFilterCheckbox}
      />
      {(props.isLoading && <Preloader />) || 
        (props.nothingFound && <h2 className="movies__notfound">{props.nothingFound}</h2>) ||
        <MoviesCardList 
          movies={props.filterMovies} 
          onSaveMovie={props.onSaveMovie}
        /> 
      }
      {props.isFuther && <Futher onFuther={props.onFuther} />}
    </>
  );
}

export default Movies;
