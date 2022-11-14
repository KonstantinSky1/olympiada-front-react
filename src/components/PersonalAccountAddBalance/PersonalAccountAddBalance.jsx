import React from "react";
import { Link } from 'react-router-dom';

import './PersonalAccountAddBalance.css';

import kaspiPic from "../../images/kaspiqr.png";
import qiwiPic from '../../images/qiwi.png';

import PersonalAccountUser from '../PersonalAccountUser/PersonalAccountUser';

function PersonalAccountAddBalance() {
  return (
    <section className="pesonal-account-payments">
      <div className="pesonal-account-banks">
        <PersonalAccountUser />
        <div className="pesonal-account-banks__payments">
          <div className="pesonal-account-banks__payments-info">
            <h4 className="pesonal-account-banks__payments-info-title">Пополнение баланса</h4>
            <div className="pesonal-account-banks__payments-info-user">
              <div className="pesonal-account-banks__payments-info-user-itemOne">
                <p className="pesonal-account-banks__payments-info-user-text">Номер счета:</p>
                <p className="pesonal-account-banks__payments-info-user-text">Имя пользователя:</p>
                <p className="pesonal-account-banks__payments-info-user-text">Текущий баланс:</p>
              </div>
              <div className="pesonal-account-banks__payments-info-user-itemOne">
                <p className="pesonal-account-banks__payments-info-user-text font-color-dark">#2345678768</p>
                <p className="pesonal-account-banks__payments-info-user-text font-color-dark">karimova.d@gmail.com</p>
                <p className="pesonal-account-banks__payments-info-user-text font-color-dark">1200 тенге</p>
              </div>
            </div>
            <p className="pesonal-account-banks__payments-info-text">Стоимость участия в одной олимпиаде составляет:</p>
            <p className="pesonal-account-banks__payments-info-text">- для школьников 2500 тенге;</p>
            <p className="pesonal-account-banks__payments-info-text">- для учителей 2500 тенге.</p>
            <p className="pesonal-account-banks__payments-info-payment-choice">Выберите удобный способ пополнения счета:</p>
          </div>
          <div className="pesonal-account-banks__payments-bank">
            <img src={kaspiPic} alt="Картинка" />
            <p className="pesonal-account-banks__payments-bank-payment">Оплата через Kaspi банк</p>
            <p className="pesonal-account-banks__payments-bank-text">Данный способ позволяет удобно и быстро пополнить баланс счета через приложение Kaspi.kz. Вы можете самостоятельно отыскать в разделе платежи, либо воспользоваться QR кодом, нажав кнопку "Перейти к оплате"</p>
            <Link to="/kaspipayment" className="pesonal-account-banks__payments-bank-link">Перейти к оплате</Link>
          </div>
          <div className="pesonal-account-banks__payments-bank">
            <img src={qiwiPic} alt="Картинка" />
            <p className="pesonal-account-banks__payments-bank-payment">Оплата через платежные терминалы QIWI (ОСМП)</p>
            <p className="pesonal-account-banks__payments-bank-text">После платежа через платежные терминалы деньги мгновенно поступают на счет участника. Комиссия в данном способе оплаты составляет 0 тенге.</p>
            <p className="pesonal-account-banks__payments-bank-text">При платеже необходимо указать номер счета учаcтника зарегистрированного на текущем сайте</p>
            <Link to="#" className="pesonal-account-banks__payments-bank-link">Перейти к оплате</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


export default PersonalAccountAddBalance;