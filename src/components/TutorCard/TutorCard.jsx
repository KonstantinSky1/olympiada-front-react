import React from "react";

import './TutorCard.css';

import pic1 from '../../images/test.png';

function TutorCard() {
  return (
    <li className="tutors-best-teachers__list-item">
      <div className="tutors-best-teachers__list-item-image">
        <img src={pic1} alt="Картинка" />
      </div>
      <h5 className="tutors-best-teachers__list-item-title">Горбунова Мария</h5>
      <p className="tutors-best-teachers__list-item-text">СЛОД №24 с обучением на трёх языках</p>
    </li>
  );
}

export default TutorCard;