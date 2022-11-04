import React from "react";

import './Promotion.css';

import pic1 from '../../images/olymp-promotion1.png';

function Promotion() {
  return (
    <li className="promotion">
      <div className="promotion__content">
        <div className="promotion__imageBlock">
          <img src={pic1} alt="Картинка" />
        </div>
        <div className="promotion__textBlock">
          <h4 className="promotion__text-title">Скидка на обучение 50 %</h4>
          <div className="promotion__text-content">
            <p className="promotion__text">До 31 декабря, совершайте покупки в SMARTEST на сумму свыше 50 000 тенге и получайте скидку -50% на онлайн-курс.</p>
          </div>
          <a href="#" className="promotion__link">Осталось 58 дней</a>
        </div>
      </div>
    </li>
  );
}

export default Promotion;