import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Futher from '../Futher/Futher';
import Preloader from '../Preloader/Preloader'
import './Movies.css';

function Movies(props) {
  let location = useLocation();

  return (
    <>
      <SearchForm 
        onMovieSearch={props.onMovieSearch} 
        isChecked={props.isChecked} 
        setIsChecked={props.setIsChecked}
        onFilterCheckbox={props.onFilterCheckbox}
      />
      {(props.isLoading && <Preloader />) || 
      (location.pathname === "/movies" ? 
        (localStorage.nothingFound && <h2 className="movies__notfound">{localStorage.nothingFound}</h2>) :
        (props.nothingFound && <h2 className="movies__notfound">{props.nothingFound}</h2>)) ||
        <MoviesCardList 
          movies={location.pathname === "/movies" ? (localStorage.renderedMovies ? JSON.parse(localStorage.renderedMovies) : props.filterMovies) : props.filterMovies} 
          onSaveMovie={props.onSaveMovie}
        /> 
      }
      {props.isFuther && <Futher onFuther={props.onFuther} />}
    </>
  );
}

export default Movies;
