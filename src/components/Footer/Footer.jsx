import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import footerLogo from '../../images/footer_logo.svg';
import iconTiktok from '../../images/icon-tiktok.png';
import iconInstagram from '../../images/icon-instagram.png';
import iconFacebook from '../../images/icon-facebook.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo-block">
            <img src={footerLogo} alt="Логотип" className="footer__logo-block-image" />
            <p className="footer__logo-block-text">Интернет олимпиады</p>
            <div className="footer__logo-block-icons-block">
              <img src={iconFacebook} alt="Иконка" />
              <img src={iconTiktok} alt="Иконка" />
              <img src={iconInstagram} alt="Иконка" />
            </div>
          </div>
          <div className="footer__navlinks">
            <div className="footer__navlinks-item">
              <p className="footer__title">О компании</p>
              <ul className="footer__list-links">
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">О нас</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Контакты</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Служба поддержки</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Стать партнером</Link></li>
              </ul>
            </div>
            <div className="footer__navlinks-item">
              <p className="footer__title">Олимпиады</p>
              <ul className="footer__list-links">
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Все олимпиады</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Призы</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Новости</Link></li>
                <li className="footer__list-links-item"><Link to="/" className="footer__list-links-item-link">Победители</Link></li>
              </ul>
            </div>
            <div className="footer__navlinks-item">
              <p className="footer__title">Служба поддержки</p>
              <ul className="footer__list-links">
                <li className="footer__list-links-item">8(727)2346789</li>
                <li className="footer__list-links-item">info@mail.ru</li>
                <li className="footer__list-links-item">График работы:<br/>Пн-Сб:<br/>10:00-19:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;