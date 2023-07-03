import React from 'react'
import './Futher.css'

const Futher = (props) => {
  function handleFuther(e) {
    e.preventDefault();
    props.onFuther();
  }

  return (
        <section className="futher">
            <button type="button" className="futher__button" onClick={handleFuther}>Ещё</button>
        </section>
    )
};

export default Futher