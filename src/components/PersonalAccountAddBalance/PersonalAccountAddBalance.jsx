import React from "react";
import { NavLink, Link } from 'react-router-dom';

import './PersonalAccountAddBalance.css';

import pic1 from '../../images/student-photo.png';
import kaspiPic from "../../images/kaspiqr.png";
import qiwiPic from '../../images/qiwi.png';

function PersonalAccountAddBalance() {
  return (
    <section className="pesonal-account-payments">
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
        <div className="pesonal-account__payments">
          <div className="pesonal-account__payments-info">
            <h4 className="pesonal-account__payments-info-title">Пополнение баланса</h4>
            <div className="pesonal-account__payments-info-user">
              <div className="pesonal-account__payments-info-user-itemOne">
                <p className="pesonal-account__payments-info-user-text">Номер счета:</p>
                <p className="pesonal-account__payments-info-user-text">Имя пользователя:</p>
                <p className="pesonal-account__payments-info-user-text">Текущий баланс:</p>
              </div>
              <div className="pesonal-account__payments-info-user-itemOne">
                <p className="pesonal-account__payments-info-user-text font-color-dark">#2345678768</p>
                <p className="pesonal-account__payments-info-user-text font-color-dark">karimova.d@gmail.com</p>
                <p className="pesonal-account__payments-info-user-text font-color-dark">1200 тенге</p>
              </div>
            </div>
            <p className="pesonal-account__payments-info-text">Стоимость участия в одной олимпиаде составляет:</p>
            <p className="pesonal-account__payments-info-text">- для школьников 2500 тенге;</p>
            <p className="pesonal-account__payments-info-text">- для учителей 2500 тенге.</p>
            <p className="pesonal-account__payments-info-payment-choice">Выберите удобный способ пополнения счета:</p>
          </div>
          <div className="pesonal-account__payments-bank">
            <img src={kaspiPic} alt="Картинка" />
            <p className="pesonal-account__payments-bank-payment">Оплата через Kaspi банк</p>
            <p className="pesonal-account__payments-bank-text">Данный способ позволяет удобно и быстро пополнить баланс счета через приложение Kaspi.kz. Вы можете самостоятельно отыскать в разделе платежи, либо воспользоваться QR кодом, нажав кнопку "Перейти к оплате"</p>
            <Link to="/kaspipayment" className="pesonal-account__payments-bank-link">Перейти к оплате</Link>
          </div>
          <div className="pesonal-account__payments-bank">
            <img src={qiwiPic} alt="Картинка" />
            <p className="pesonal-account__payments-bank-payment">Оплата через платежные терминалы QIWI (ОСМП)</p>
            <p className="pesonal-account__payments-bank-text">После платежа через платежные терминалы деньги мгновенно поступают на счет участника. Комиссия в данном способе оплаты составляет 0 тенге.</p>
            <p className="pesonal-account__payments-bank-text">При платеже необходимо указать номер счета учаcтника зарегистрированного на текущем сайте</p>
            <Link to="#" className="pesonal-account__payments-bank-link">Перейти к оплате</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


export default PersonalAccountAddBalance;