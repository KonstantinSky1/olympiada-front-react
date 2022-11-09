import React from "react";
import { Link } from "react-router-dom";

import './StartCoursesCard.css';

import pic1 from '../../images/startCoursesCard.png';
import starIcon from '../../images/start-icon.svg';

function StartCoursesCard() {
  return (
    <li className="startCoursesCard">
      <div className="startCoursesCard__image">
        <img src={pic1} alt="Картинка" />
      </div>
      <h5><Link to="/opencoursescard" className="startCoursesCard__title">Шедевры мировой литературы</Link></h5>
      <p className="startCoursesCard__text">SMARTEST Academy</p>
      <div className="startCoursesCard__rating-block">
        <p className="startCoursesCard__rating-number">5,0</p>
        <div className="startCoursesCard__rating-stars">
          <img src={starIcon} alt="Картинки" />
          <img src={starIcon} alt="Картинки" />
          <img src={starIcon} alt="Картинки" />
          <img src={starIcon} alt="Картинки" />
          <img src={starIcon} alt="Картинки" />
        </div>
        <p className="startCoursesCard__rating-people">(76)</p>
      </div>
    </li>
  );
}

export default StartCoursesCard;