import React from "react";

import './StudyAbroadCard.css';

import pic1 from '../../images/studyAbroad-university-name.png';

function StudyAbroadCard() {
  return (
    <li className="studyAbroad__our-partners-list-item">
      <div className="studyAbroad__our-partners-list-item-image">
        <img src={pic1} alt="Картинка" />
      </div>
      <p className="studyAbroad__our-partners-list-item-text">Карлов университет</p>
    </li>
  );
}

export default StudyAbroadCard;