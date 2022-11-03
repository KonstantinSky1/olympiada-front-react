import React from "react";
import { Link } from "react-router-dom";

import './Login.css';

function Login() {
  const handleShowPassword = () => {
    const input = document.querySelector('#input-password');
    
    if (input.type === "password") {
      input.type = "text"
    } else {
      input.type = "password"
    }
  }

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__content">
          <h4 className="login__title">Вход в личный кабинет</h4>
          <p className="login__text">Авторизуйтесь для принятия участия в Олимпиаде</p>
          <form name="login-form" className="login__form">
            <div className="login__form-inputs-block">
              <label className="login__form-label">
                <p className="login__form-label-text">Имя пользователя/логин</p>
                <input type="text" name="login" className="login__form-input" placeholder="Ваш логин" required />
              </label>
              <label className="login__form-label">
                <p className="login__form-label-text">Пароль:</p>
                <div className="login__form-input-password-block">
                  <input type="password" name="password" id="input-password" className="login__form-input" placeholder="Введите пароль" required />
                  <button
                    className="icon-show-password"
                    type="button"
                    onClick={handleShowPassword}
                  ></button>
                </div>
              </label>
            </div>
            <div className="login__buttons-block">
              <Link to="#" className="forgotten-password">Забыли пароль?</Link>
              <button
                type="submit"
                className="login__button-submit"
              >
                Войти
              </button>
              <span className="border-line"></span>
              <Link to="/signup" className="login__link">
                Нет аккаунта?
                <span className="login__link-text">Зарегистироваться</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;