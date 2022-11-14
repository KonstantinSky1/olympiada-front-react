import React from "react";
import { NavLink } from 'react-router-dom';

import './PersonalAccountUser.css';

import pic1 from '../../images/student-photo.png';

function PersonalAccountUser({style}) {
  return (
    <div className="pesonal-account__info" style={style}>
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
  );
}

export default PersonalAccountUser;