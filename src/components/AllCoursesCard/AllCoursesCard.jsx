import React from "react";
import { Link } from "react-router-dom";

import './AllCoursesCard.css';

import pic1 from '../../images/startCoursesCard.png';
import starIcon from '../../images/start-icon.svg';

function AllCoursesCard() {
  return (
    <li className="courses-all__list-item">
      <div className="courses-all__image">
        <img src={pic1} alt="Картинка" />
      </div>
      <div className="courses-all__content">
        <h5><Link to="/opencoursescard" className="courses-all__title">Шедевры мировой литературы</Link></h5>
        <p className="courses-all__description">Краткое содержание основных произведений.</p>
        <p className="courses-all__text">SMARTEST Academy</p>
        <div className="courses-all__rating-block">
          <p className="courses-all__rating-number">5,0</p>
          <div className="courses-all__rating-stars">
            <img src={starIcon} alt="Картинки" />
            <img src={starIcon} alt="Картинки" />
            <img src={starIcon} alt="Картинки" />
            <img src={starIcon} alt="Картинки" />
            <img src={starIcon} alt="Картинки" />
          </div>
          <p className="courses-all__rating-people">(76)</p>
        </div>
        <p className="courses-all__count-courses">Всего 4 часа - 21 уроков</p>
      </div>
    </li>
  );
}

export default AllCoursesCard;