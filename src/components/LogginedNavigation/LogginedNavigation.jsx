import React from "react";
import { Link } from 'react-router-dom';

import './LogginedNavigation.css';

function LogginedNavigation() {
  const menuVisibilityToggle = () => {
    const toggleMenu = document.querySelector('.loggined-user-menu');

    toggleMenu.classList.toggle('active');
  }

  function close() {
    menuVisibilityToggle();
  }

  return (
    <div className="loggined-user-action">
      <div className="loggined-user-profile">
        <span className="loggined-user-profile-image" tabIndex={0} onClick={menuVisibilityToggle} onBlur={close}></span>
      </div>
        <ul className="loggined-user-menu">
          <li className="loggined-user-menu-item">
            <Link
              to="personalaccountinfo"
              className="loggined-user-menu__link"
            >
              Личный кабинет
            </Link>
          </li>
          <li className="loggined-user-menu-item">
            <Link
              to="/"
              className="loggined-user-menu__link"
            >
              Выход
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default LogginedNavigation;