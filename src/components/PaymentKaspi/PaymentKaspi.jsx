import React from "react";
import { NavLink } from 'react-router-dom';

import './PaymentKaspi.css';

import pic1 from '../../images/student-photo.png';
import kaspiLogo from '../../images/kaspiqr.png';

function PaymentKaspi() {
  return (
    <section className="pesonal-account-info">
      <div className="pesonal-account">
        <div className="pesonal-account__info">
          <div className="pesonal-account__info-photo-card-block">
            <div className="pesonal-account__info-photo-card-block-image">
              <img src={pic1} alt="Фотография" />
            </div>
            <p className="pesonal-account__info-photo-card-student-name">Дарина Каримова</p>
            <p className="pesonal-account__info-photo-card-student-info">Школьник</p>
          </div>
          <div className="pesonal-account__info-nav-links-block">
            <div className="dropdown-menu">
              <p className="dropdown-menu__text">Личный кабинет</p>
              <span className="dropdown-menu__arrow arrow-nav-links" onClick={() => {
                document.querySelector('.pesonal-account__info-nav-links-list').classList.toggle('subMenu-open');
              }}></span>
            </div>
            <ul className="pesonal-account__info-nav-links-list">
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/personalaccountinfo" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Общая информация</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/personalaccountaddballance" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Пополнение баланса</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/3" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Рейтинги</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/4" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Мои олимпиады</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/5" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Новостная лента</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/6" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Реферальная ссылка</NavLink></li>
              <li className="pesonal-account__info-nav-links-list-item"><NavLink to="/7" className="pesonal-account__info-nav-links-list-item-link" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Мои уроки</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="pesonal-account__bank-payment">
          <h4 className="pesonal-account__bank-title">Оплата через Kaspi банк</h4>
          <div className="pesonal-account__bank-info">
            <img src={kaspiLogo} alt="Картинка" />
            <div>
              <p className="pesonal-account__bank-info-text">Стоимость участия в одной олимпиаде составляет:</p>
              <p className="pesonal-account__bank-info-text">- для школьников 350 тенге;</p>
              <p className="pesonal-account__bank-info-text">- для учителей 500 тенге.</p>
            </div>
          </div>
          <p className="pesonal-account__bank-payment-title">Оплата через Kaspi банк</p>
          <p className="pesonal-account__bank-payment-text">Данный способ позволяет удобно и быстро пополнить баланс счета через приложение Kaspi.kz. Вы можете самостоятельно отыскать в разделе платежи, либо воспользоваться QR кодом, нажав кнопку "Перейти к оплате"</p>
          <form name="pesonal-account-bank-payment-form">
              <p className="payment-label-text">Укажите сумму пополнения, тенге:</p>
              <div className="pesonal-account__bank-payment-input-block">
                <input type="text" name="payment" className="payment-input" placeholder="Сумма" />
                <button className="pesonal-account__bank-payment-submit" type="submit">Пополнить</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PaymentKaspi;