import React from 'react';
import { Link } from 'react-router-dom';

import './NotLogginedNavigation.css';

function NotLogginedNavigation() {
  return (
    <div className="notLogginedNavigation">
      <Link
        className="notLogginedNavigation-login-link"
        to="signin"
      >
        Вход
      </Link>
      <Link
        className="notLogginedNavigation-register-link"
        to="signup"
      >
        Регистрация
      </Link>
    </div>
  );
}

export default NotLogginedNavigation;