import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <section className="login">
      <form name="login__form" className="login__form">
        <div className="login__inputs">
          <Link className="login__logo" to="/"><img className="login__logo" src={logo} alt="Movies Explorer" /></Link>
          <h2 className="login__title">Рады видеть!</h2>
          <label for="email-field" className="login__lable">E-mail</label>
          <input 
            type="email" 
            id="email-field" 
            className="login__field" 
            minLength="2" 
            maxLength="50" 
            required 
            name="email"/>
          <span className="name-field-error login__span"></span>
          <label for="password-field" className="login__lable">Пароль</label>
          <input
            type="text"
            id="password-field"
            className="login__field"
            minLength="2"
            maxLength="40"
            required
            name="password"
          />
          <span className="profession-field-error login__span"></span>
        </div>
        <button type="submit" className="login__submit" name="submit" defaultValue="Войти">Войти</button>
      </form>
      <div className="login__bottom">
        <h2 className="login__text">Ещё не зарегистрированы?</h2>
        <Link to="/signup" className="login__text login__link">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;