import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import useForm from "../../hooks/useForm";
import loupe from "../../images/loupe.svg";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const {formValue, handleChange, setInput} = useForm();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setInput(localStorage.input);
    } else {
      setInput('');
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.onMovieSearch({
      input: formValue.movie,
    });
  }
  return (
    <>
      <form 
        className="search"
        onSubmit={handleSubmit}
      >
        <div className="search__searcher">
          <img className="search__loupe" src={loupe} alt="loupe" />
          <input 
            type="text" 
            name="movie" 
            value={formValue.movie}
            onChange={handleChange}
            placeholder="Фильм"
            className="search__input" 
          >
          </input>
          <button type="submit" className="search__submit"></button>
        </div>
        <div className="search__shorts">
          <FilterCheckbox 
            isChecked={props.isChecked} 
            setIsChecked={props.setIsChecked}
            onFilterCheckbox={props.onFilterCheckbox}
          />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
      <div className="search-line"></div>
    </>
  );
}

export default SearchForm;