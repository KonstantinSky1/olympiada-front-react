import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { BurgerMenuContext } from '../../contexts/BurgerMenuContext';

import './Navigation.css';

import ButtonHelpPsych from '../ButtonHelpPsych/ButtonHelpPsych';

function Navigation() {
  // Получаем menuActive для бургер-меню через Context
  const { menuActive, setMenuActive } = useContext(BurgerMenuContext);

  return (
    <div className={menuActive ? 'navigation-block _active' : 'navigation-block'} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>
      <nav className='navigation'>
        <ul className="navigation__list">
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} end onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Главная</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/news" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Новости</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/opentoplay" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Олимпиада</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/courses" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Курсы</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/tutors" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Репетиторы</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/onlinestudy" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Онлайн-обучение</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/studyabroad" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Обучение за рубежом</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/workabroad" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Работа за рубежом</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/tournaments" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Турниры</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/promotions" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Акции</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/support" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Служба поддержки</NavLink></li>
          <li className="navigation__list-item"><NavLink className="navigation__list-item-NavLink" to="/rating" style={({isActive}) => isActive ? {fontWeight: 700} : undefined} onClick={() => {setMenuActive(false); document.body.classList.remove('_lock');}}>Рейтинг участников</NavLink></li>
        </ul>
      </nav>
      <ButtonHelpPsych />
    </div>
  );
}

export default Navigation;