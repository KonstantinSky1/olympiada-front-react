import React from "react";

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
                <select class="select-css"> 
                  <option>Школьник</option> 
                  <option>Учитель</option> 
                  <option>Репетитор</option> 
                  <option>Родитель</option> 
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;