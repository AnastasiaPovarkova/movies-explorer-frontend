import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import './Register.css';

function Register(props) {
  const {formValue, error, handleChange, resetValidation} = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(formValue);
    resetValidation();
  }

  return (
    <section className="register">
      <form 
        name="register__form" 
        className="register__form"
        onSubmit={handleSubmit}
      >
        <div className="register__inputs">
          <Link className="register__logo" to="/"><img className="register__logo" src={logo} alt="Movies Explorer" /></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <label for="name-field" className="register__lable">Имя</label>
          <input
            type="text"
            id="name-field"
            className="register__field"
            minLength="2"
            maxLength="40"
            required
            name="name"
            value={formValue.name || ''}
            onChange={handleChange}
          />
          <span className="name-field-error register__span">{error.name || ''}</span>
          <label for="email-field" className="register__lable">E-mail</label>
          <input 
            type="email" 
            id="email-field" 
            className="register__field" 
            minLength="2" 
            maxLength="50" 
            required 
            name="email"
            value={formValue.email || ''}
            onChange={handleChange}
          />
          <span className="email-field-error register__span">{error.email || ''}</span>
          <label for="password-field" className="register__lable">Пароль</label>
          <input
            type="text"
            id="password-field"
            className="register__field"
            minLength="8"
            maxLength="40"
            required
            name="password"
            value={formValue.password || ''}
            onChange={handleChange}
          />
          <span className="password-field-error register__span">{error.password || ''}</span>
        </div>
        <button 
          type="submit" 
          className="register__submit" 
          name="submit" 
          defaultValue="Зарегистрироваться"
        >
          {props.isAuthLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
      <div className="register__bottom">
        <h2 className="register__text">Уже зарегистрированы?</h2>
        <Link to="/signin" className="register__text register__link">Войти</Link>
      </div>
    </section>
  );
}

export default Register;