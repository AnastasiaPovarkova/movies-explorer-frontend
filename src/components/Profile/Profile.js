import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(UserContext);

  function handleLogout(e) {
    e.preventDefault();
    props.onLogout();
  }

  return (
    <section className="profile">
      <form name="profile__form" className="profile__form">
        <div className="profile__inputs">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__input"> 
            <label htmlFor="name-field" className="profile__lable">Имя</label>
            <input
              type="text"
              id="name-field"
              className="profile__field"
              minLength="2"
              maxLength="40"
              required
              name="name"
              value={currentUser.name || ''}
              disabled
            >
            </input>
            <span className="name-field-error profile__span"></span>
          </div>
          <div className="profile__input">
            <label htmlFor="email-field" className="profile__lable">E-mail</label>
            <input 
              type="email" 
              id="email-field" 
              className="profile__field profile__field-last" 
              minLength="2" 
              maxLength="50" 
              required 
              name="email"
              value={currentUser.email || ''}
              disabled
            >
            </input>
            <span className="email-field-error profile__span"></span>
          </div>
        </div>
        <button type="submit" className="profile__submit" name="submit" defaultValue="Сохранить">Сохранить</button>
      </form>
      <div className="profile__bottom">
        <Link className="profile__link">Редактировать</Link>
        <button 
          className="profile__link profile__link-red"
          onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        {/* <Link 
          to="/signup" 
          className="profile__link profile__link-red"
          onClick={handleLogout}
        >Выйти из аккаунта</Link> */}
      </div>
    </section>
  );
}

export default Profile;
