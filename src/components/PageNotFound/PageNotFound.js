import React from "react";
import { Link } from 'react-router-dom';
import './PageNotFound.css';


function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__info">
        <h2 className="not-found__404">404</h2>
        <h2 className="not-found__text">Страница не найдена</h2> 
      </div>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>
  );
}

export default PageNotFound;
