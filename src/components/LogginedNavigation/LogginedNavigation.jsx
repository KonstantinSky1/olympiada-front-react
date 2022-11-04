import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import './LogginedNavigation.css';

function LogginedNavigation() {
  useEffect(() => {
    const hadleClickOnOverlayClose = (event) => {
      const userDomElement = document.querySelector('.loggined-user-profile-image');

      if (event.target !== userDomElement) {
        const toggleMenu = document.querySelector('.loggined-user-menu');

        toggleMenu.classList.remove('loggined-user-menu_active');
      }
    };

    document.addEventListener('mousedown', hadleClickOnOverlayClose);

    return () => {
      window.removeEventListener('mousedown', hadleClickOnOverlayClose);
    }
  }, []);

  const menuVisibilityToggle = () => {
    const toggleMenu = document.querySelector('.loggined-user-menu');

    toggleMenu.classList.toggle('loggined-user-menu_active');
  }

  return (
    <div className="loggined-user-action">
      <div className="loggined-user-profile">
        <span className="loggined-user-profile-image" onClick={menuVisibilityToggle}></span>
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