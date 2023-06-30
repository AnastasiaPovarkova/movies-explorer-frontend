import { useContext } from 'react';
import { UserContext } from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import './Profile.css';

function Profile(props) {
  const currentUser = useContext(UserContext);
  const {formValue, error, handleChange, isValid, setData} = useForm();

  function handleLogout(e) {
    e.preventDefault();
    props.onLogout();
  }

  function handleEditClick() {
    props.setIsEditing(true); 
    setData(currentUser.name, currentUser.email);
  }

  function handleEditProfileSubmit(e) {
    e.preventDefault();
    props.onEditProfileSubmit(formValue);
  }


  return (
    <section className="profile">
      <form 
        name="profile__form" 
        className="profile__form" 
        onSubmit={props.isEditing ? handleEditProfileSubmit : handleEditClick}
      >
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
              value={props.isEditing ? formValue.name : currentUser.name}
              onChange={handleChange}
              disabled={props.isEditing ? false : true}
            >
            </input>
            <span className="name-field-error profile__span">{error.name}</span>
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
              value={props.isEditing ? formValue.email : currentUser.email}
              onChange={handleChange}
              disabled={props.isEditing ? false : true}
            >
            </input>
            <span className="email-field-error profile__span">{error.email}</span>
          </div>
        </div>
        <h2 className="profile__error">{props.errorMessageProfile}</h2>
        <button 
          type="submit" 
          className={`profile__submit ${(props.isEditing) ? '' : 'profile__hidden'}`}
          name="submit" 
          defaultValue="Сохранить"
          disabled={props.isEditing ? false : true}
        >
          Сохранить
        </button>
        <div className={`profile__bottom ${(props.isEditing) ? 'profile__hidden' : ''}`}>
          <button 
            type="button"
            className='profile__link'
            onClick={handleEditClick}
          >Редактировать
          </button>
          <button 
            type="button"
            className="profile__link profile__link-red"
            onClick={handleLogout}
          >Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
