import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink className="navigation__list-item-NavLink" to="/" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} end>Главная</NavLink>
          <ul>
            <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/news" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Новости</NavLink></li>
            <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/2" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Расписание 2022</NavLink></li>
          </ul>
        </li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/3" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Олимпиада</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/4" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Курсы</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/5" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Репетиторы</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/6" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Онлайн-обучение</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/7" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Обучение за рубежом</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/8" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Работа за рубежом</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/9" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Дневник</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/10" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Турниры</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/11" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Акции</NavLink></li>
        <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/12" style={({isActive}) => isActive ? {fontWeight: 700} : undefined}>Служба поддержки</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;