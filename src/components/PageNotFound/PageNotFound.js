import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <div className="notfound__info">
        <h2 className="notfound__404">404</h2>
        <h2 className="notfound__text">Страница не найдена</h2> 
      </div>
      <Link className="notfound__link" onClick={() => navigate(-1)}>Назад</Link>
    </section>
  );
}

export default PageNotFound;
