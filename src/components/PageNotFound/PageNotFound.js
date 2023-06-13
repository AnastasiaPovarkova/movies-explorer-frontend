import React from "react";
import { Link } from 'react-router-dom';
import './PageNotFound.css';


function PageNotFound() {
  return (
    <div className="notfound">
      <div className="notfound__info">
        <h2 className="notfound__404">404</h2>
        <h2 className="notfound__text">Страница не найдена</h2> 
      </div>
      <Link className="notfound__link" to="/">Назад</Link>
    </div>
  );
}

export default PageNotFound;
