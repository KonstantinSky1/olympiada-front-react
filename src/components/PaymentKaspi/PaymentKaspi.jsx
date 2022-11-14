import React from "react";

import './PaymentKaspi.css';

import kaspiLogo from '../../images/kaspiqr.png';

import PersonalAccountUser from '../PersonalAccountUser/PersonalAccountUser';

function PaymentKaspi() {
  return (
    <section className="pesonal-account-info-payment-bank">
      <div className="pesonal-account-bank-name">
        <PersonalAccountUser />
        <div className="pesonal-account-bank-name__bank-payment">
          <h4 className="pesonal-account-bank-name__bank-title">Оплата через Kaspi банк</h4>
          <div className="pesonal-account-bank-name__bank-info">
            <img src={kaspiLogo} alt="Картинка" className="pesonal-account-bank-name__bank-info-image-kapsi" />
            <div>
              <p className="pesonal-account-bank-name__bank-info-text">Стоимость участия в одной олимпиаде составляет:</p>
              <p className="pesonal-account-bank-name__bank-info-text">- для школьников 350 тенге;</p>
              <p className="pesonal-account-bank-name__bank-info-text">- для учителей 500 тенге.</p>
            </div>
          </div>
          <p className="pesonal-account-bank-name__bank-payment-title">Оплата через Kaspi банк</p>
          <p className="pesonal-account-bank-name__bank-payment-text">Данный способ позволяет удобно и быстро пополнить баланс счета через приложение Kaspi.kz. Вы можете самостоятельно отыскать в разделе платежи, либо воспользоваться QR кодом, нажав кнопку "Перейти к оплате"</p>
          <form name="pesonal-account-bank-payment-form">
              <p className="payment-label-text">Укажите сумму пополнения, тенге:</p>
              <div className="pesonal-account-bank-name__bank-payment-input-block">
                <input type="text" name="payment" className="payment-input" placeholder="Сумма" />
                <button className="pesonal-account-bank-name__bank-payment-submit" type="submit">Пополнить</button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PaymentKaspi;