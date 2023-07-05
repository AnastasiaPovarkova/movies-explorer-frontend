import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  let location = useLocation();

  function handleChange (e) {
    props.setIsChecked(e.target.checked);
    props.onFilterCheckbox(e.target.checked);
    if (localStorage.isFilterChecked === 'true') {
      localStorage.setItem('isFilterChecked', false);
    } else localStorage.setItem('isFilterChecked', true);
  };

  return (
    <label className="checkbox">
	    <input 
        type="checkbox" 
        className="checkbox__input"
        // checked={props.isChecked}
        checked={location.pathname === "/movies" ? (localStorage.isFilterChecked === 'true' ? true : false) : props.isChecked}
        onChange={handleChange}>
      </input>
	    <span className="checkbox__switch"></span>
    </label>
  );
}

export default FilterCheckbox;