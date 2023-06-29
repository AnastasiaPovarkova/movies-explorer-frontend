import { useContext } from 'react';
import { UserContext } from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(UserContext);
  const {formValue, error, handleChange, resetValidation, isValid} = useForm();

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
              value={currentUser.name || formValue.name}
              disabled={true}
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
              value={currentUser.email || formValue.email}
              disabled={true}
            >
            </input>
            <span className="email-field-error profile__span"></span>
          </div>
        </div>
        <button type="submit" className="profile__submit" name="submit" defaultValue="Сохранить">Сохранить</button>
      </form>
      <div className="profile__bottom">
        <button 
          className="profile__link"
          // onClick={}
          >
            Редактировать
          </button>
        <button 
          className="profile__link profile__link-red"
          onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
          <button>
            Сохранить
          </button>
      </div>
    </section>
  );
}

export default Profile;
