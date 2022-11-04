import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import iconMapMarkerImage from '../../images/icon-map-marker.svg';
import iconPeaceLang from '../../images/icon-peace-lang.svg';

import NotLogginedNavigation from '../NotLogginedNavigation/NotLogginedNavigation';
import LogginedNavigation from '../LogginedNavigation/LogginedNavigation';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__top-city">
            <img src={iconMapMarkerImage} alt="Маркер" />
            <p className="header__top-city-text">Алматы</p>
          </div>
          <div className="header__top-lang">
            <img src={iconPeaceLang} alt="Планета" />
            <select className="header__top-lang-select">
              <option>Рус</option>
              <option>Каз</option>
              <option>Eng</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__container">
          <div className="header__bottom-content">
            <Link to="/" className="header__bottom-title">SMARTEST</Link>
            <form name="search" className="search-form">
              <input type="text" className="search-form__input" placeholder="Поиск" />
              <button type="submit" className="search-form__button"></button>
            </form>
            {/* В зависимости от того залогинен ли пользователь сделать примерно так: { isUserLoggined() ? <LogginedNavigation /> : <NotLogginedNavigation /> } */}
            <LogginedNavigation />
            <NotLogginedNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;