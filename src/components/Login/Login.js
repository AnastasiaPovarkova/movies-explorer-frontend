import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import './Login.css';

function Login(props) {
  const {formValue, error, handleChange, resetValidation, isValid} = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(formValue);
  }

  function handleResetAll() {
    resetValidation();
    props.setErrorMessage('');
  }

  return (
    <section className="login">
      <form 
        name="login__form" 
        className="login__form"
        onSubmit={handleSubmit}
      >
        <div className="login__inputs">
          <Link 
            className="login__logo" 
            to="/"
            onClick={handleResetAll}
          >
            <img className="login__logo" src={logo} alt="Movies Explorer"/>
          </Link>
          <h2 className="login__title">Рады видеть!</h2>
          <label htmlFor="email-field" className="login__lable">E-mail</label>
          <input 
            type="email" 
            id="email-field" 
            className="login__field" 
            minLength="2" 
            maxLength="50" 
            required 
            name="email"
            value={formValue.email || ''}
            onChange={handleChange}
          />
          <span className="name-field-error login__span">{error.email || ''}</span>
          <label htmlFor="password-field" className="login__lable">Пароль</label>
          <input
            type="password"
            id="password-field"
            className="login__field"
            minLength="8"
            maxLength="40"
            required
            name="password"
            value={formValue.password || ''}
            onChange={handleChange}
          />
          <span className="profession-field-error login__span">{error.password || ''}</span>
        </div>
        <h2 className="login__error">{props.errorMessage}</h2>
        <button 
          type="submit" 
          className={`login__submit ${(isValid) ? '' : 'login__submit-disabled'}`}
          name="submit" 
          defaultValue="Войти"
        >
          {props.isAuthLoading ? "Вход..." : "Войти"}
        </button>
      </form>
      <div className="login__bottom">
        <h2 className="login__text">Ещё не зарегистрированы?</h2>
        <Link to="/signup" className="login__text login__link" onClick={handleResetAll}>Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;