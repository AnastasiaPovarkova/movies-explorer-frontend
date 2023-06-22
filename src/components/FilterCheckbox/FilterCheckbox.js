import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  
  function handleChange (e) {
    props.setIsChecked(e.target.checked);
    props.onFilterCheckbox(e.target.checked);
  };

  return (
    <label className="checkbox">
	    <input 
        type="checkbox" 
        className="checkbox__input"
        checked={props.isChecked}
        onChange={handleChange}>
      </input>
	    <span className="checkbox__switch"></span>
    </label>
  );
}

export default FilterCheckbox;