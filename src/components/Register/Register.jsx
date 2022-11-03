import React from "react";
import { Link } from "react-router-dom";

import './Register.css';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__content">
          <h4 className="register__title">Регистрация</h4>
          <p className="register__text">Для участия в Олимпиаде необходимо пройти регистрацию</p>
          <form name="register-form" className="register__form">
            <div className="register__form-inputs-block">
              <label className="register__form-label">
                <p className="register__form-label-text">Имя пользователя/логин*</p>
                <input type="text" name="name-user" className="register__form-input" placeholder="Придумайте логин" required />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Имя</p>
                <input type="text" name="name" className="register__form-input" placeholder="Ваше имя" />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Фамилия</p>
                <input type="text" name="surname" className="register__form-input" placeholder="Ваша фамилия" />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">ИИН*</p>
                <input type="text" name="iin" className="register__form-input" placeholder="Введите ИИН" required />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Номер телефона*</p>
                <input type="tel" name="tel" className="register__form-input" placeholder="Мобильный телефон" required />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Псевдоним</p>
                <input type="text" name="pseudonym" className="register__form-input" placeholder="Придумайте псевдоним" />
              </label>
              <div className="register__form-label">
                <p className="register__form-label-text">Роль</p>
                <select className="select-css" name="register-select-role">
                  <option value="schoolboy">Школьник</option>
                  <option value="teacher">Учитель</option>
                  <option value="tutor">Репетитор</option>
                  <option value="parent">Родитель</option>
                </select>
              </div>
              <label className="register__form-label">
                <p className="register__form-label-text">Пароль*</p>
                <input type="password" name="password" className="register__form-input" placeholder="Придумайте пароль" required />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Повторите пароль*</p>
                <input type="password" name="repeat-password" className="register__form-input" placeholder="Подтвердить" required />
              </label>
              <label className="register__form-label">
                <p className="register__form-label-text">Дата рождения</p>
                <input type="date" name="date-birthday" className="register__form-input" />
              </label>
            </div>
            <div className="register__buttons-block">
              <button
                type="submit"
                className="register__button-submit"
              >
                Зарегистрироваться
              </button>
              <div className="register__offer">
                <input type="checkbox"  name="offer"/>
                <p className="register__offer-text">Я согласен с условиями</p>
                <Link to="#" className="register__offer-link">
                  Оферты
                </Link>
              </div>
              <Link to="/signin" className="register__link">
                Уже имеется аккаунт?
                <span className="register__link-text">Войти</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;