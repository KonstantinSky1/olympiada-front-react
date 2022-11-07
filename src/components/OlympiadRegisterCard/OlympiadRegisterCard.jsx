import React from "react";
import { Link } from 'react-router-dom';

import './OlympiadRegisterCard.css';

function OlympiadRegisterCard() {
  return (
    <li className="olympiad-register__card">
      <h5 className="olympiad-register__card-title">АНГЛИЙСКИЙ ЯЗЫК</h5>
      <p className="olympiad-register__card-text olympiad-card-date">30.09.2021</p>
      <p className="olympiad-register__card-text olympiad-card-people">Для учителей</p>
      {/* olympiadstart - временное решение!!!!! */}
      <Link to="/olympiadstart" className="olympiad-register__card-link">Принять участие</Link>
    </li>
  );
}

export default OlympiadRegisterCard;