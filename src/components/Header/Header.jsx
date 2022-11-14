import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BurgerMenuContext } from '../../contexts/BurgerMenuContext';

import './Header.css';

import iconMapMarkerImage from '../../images/icon-map-marker.svg';
import iconPeaceLang from '../../images/icon-peace-lang.svg';

import NotLogginedNavigation from '../NotLogginedNavigation/NotLogginedNavigation';
import LogginedNavigation from '../LogginedNavigation/LogginedNavigation';

function Header() {
  // Получаем menuActive, setMenuActive для бургер-меню через Context
  const {menuActive, setMenuActive} = useContext(BurgerMenuContext);

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
            {/* Бургер меню: */}
            <div className={menuActive ? 'menu__icon _active' : 'menu__icon'} onClick={() => {
              setMenuActive(!menuActive);
              document.body.classList.toggle('_lock');
            }}>
              <span></span>
            </div>

            <Link to="/" className="header__bottom-title">Hi Test!</Link>
            <form name="search" className="search-form">
              <input type="text" className="search-form__input" placeholder="Поиск" />
              <button type="submit" className="search-form__button"></button>
            </form>
            {/* В зависимости от того залогинен ли пользователь сделать примерно так: { isUserLoggined() ? <LogginedNavigation /> : <NotLogginedNavigation /> } */}
            <LogginedNavigation />
            {/* <NotLogginedNavigation /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;