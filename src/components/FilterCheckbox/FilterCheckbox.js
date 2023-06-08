import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox">
	    <input type="checkbox" className="checkbox__input"></input>
	    <span className="checkbox__switch"></span>
    </label>
  );
}

export default FilterCheckbox;