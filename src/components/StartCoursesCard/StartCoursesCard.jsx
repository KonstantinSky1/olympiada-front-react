import React from "react";

import './StartCoursesCard.css';

import pic1 from '../../images/test.png';

function StartCoursesCard() {
  return (
    <li className="startCoursesCard">
      <div className="startCoursesCard__image">
        <img src={pic1} alt="Картинка" />
      </div>
      <h5 className="startCoursesCard__title">Шедевры мировой литературы</h5>
      <p className="startCoursesCard__text">SMARTEST Academy</p>
    </li>
  );
}

export default StartCoursesCard;