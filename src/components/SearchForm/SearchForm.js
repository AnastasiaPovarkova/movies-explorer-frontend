import React from "react";
import './SearchForm.css';
import loupe from "../../images/loupe.svg";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <>
      <form className="search">
        <div className="search__searcher">
          <img className="search__loupe" src={loupe} alt="loupe" />
          <input type="text" name="movie" placeholder="Фильм" className="search__input"></input>
          <button className="search__submit"></button>
        </div>
        <div className="search__shorts">
          <FilterCheckbox />
          <h2 className="search__text">Короткометражки</h2>
        </div>
      </form>
      <div className="search-line"></div>
    </>
  );
}

export default SearchForm;