import React from "react";

import './SeasonWinnersCard.css';

import pic1 from '../../images/seasonWinners-card-image.png';

function SeasonWinnersCard() {
  return (
    <li className="seasonWinners__list-item">
      <div className="seasonWinners__list-item-image-block">
        <img src={pic1} alt="Картинка" />
      </div>
      <h5 className="seasonWinners__list-item-title">Горбунова Мария</h5>
      <p className="seasonWinners__list-item-text">СЛОД №24 с обучением на трёх языках</p>
    </li>
  );
}

export default SeasonWinnersCard;