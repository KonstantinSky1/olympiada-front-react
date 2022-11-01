import React from "react";

import './OlympiadRegisterCard.css';

function OlympiadRegisterCard() {
  return (
    <li className="olympiad-register__card">
      <h5 className="olympiad-register__card-title">АНГЛИЙСКИЙ ЯЗЫК</h5>
      <p className="olympiad-register__card-text olympiad-card-date">30.09.2021</p>
      <p className="olympiad-register__card-text olympiad-card-people">Для учителей</p>
      <button type="button" className="olympiad-register__card-button">Принять участие</button>
    </li>
  );
}

export default OlympiadRegisterCard;