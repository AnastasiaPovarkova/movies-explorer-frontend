import './Promo.css';
import { Link } from 'react-router-dom';
// import NavTab from '../NavTab/NavTab';

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__lenta">
        <div className="promo__container"> 
          <div className="promo__movies promo__movies-top">
            {props.allMovies?.map((movie) => {
              return (
                <img src={`https://api.nomoreparties.co/${movie.image.url}`} 
                    alt="movie" 
                    className={`promo__movie ${(movie.id % 3 === 0) ? 'promo__movie-small' : ''} 
                    ${((movie.id + 1) % 3 === 0) ? 'promo__movie-medium' : ''}
                    ${((movie.id + 2) % 3 === 0) ? 'promo__movie-large' : ''}`}/>
              );
            })}
          </div>
        </div>
        <div className="promo__container promo__container-display"> 
          <div className="promo__movies">
            {props.allMovies?.map((movie) => {
              return (
                <img src={`https://api.nomoreparties.co/${movie.image.url}`} 
                    alt="movie" 
                    className={`promo__movie ${(movie.id % 3 === 0) ? 'promo__movie-large' : ''} 
                    ${((movie.id + 1) % 3 === 0) ? 'promo__movie-small' : ''}
                    ${((movie.id + 2) % 3 === 0) ? 'promo__movie-medium' : ''}`}/>
              );
            })}
          </div>
        </div>
      </div>
      <div className="promo__info">
        <h2 className="promo__text">Учебный проект студента факультета Веб-разработки</h2>
        <h2 className="promo__title">Сервис для поиска фильмов</h2>
        <Link to="/movies" className="promo__button">Найти фильм</Link>
      </div>
      {/* <NavTab /> */}
    </section>
  );
}

export default Promo;