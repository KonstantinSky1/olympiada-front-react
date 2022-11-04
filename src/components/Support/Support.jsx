import React from "react";

import './Support.css';

function Support() {
  return (
  <section className="support">
    <h4 className="support__title">Задать вопрос</h4>
    <form name="support-form" className="support__form">
      <div className="inputs-block">
        <label>
          <input type="text" name="question" className="support__input-question" />
        </label>
        
        <button className="support__button-submit" type="submit">Отправить</button>
      </div>
    </form>
    <h4 className="support__title">Связаться с нами</h4>
    <div className="support__textBlock">
      <p className="support__text">Телефон: 8 (777) 777-77-77</p>
      <p className="support__text">Почта: ccccccc@gmail.com</p>
      <p className="support__text">Адрес: г. Алматы, ул. Муканова, 236</p>
    </div>
    <h4 className="support__title">График работы</h4>
    <p className="support__text">Пн-Пт: 9:00-18:00</p>
    <p className="support__text">(Прием заявок осуществляется в рабочее время)</p>
  </section>
  );
}

export default Support;