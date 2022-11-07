import React from "react";

import './RatingCard.css';

import pic1 from '../../images/test.png';

function RatingCard() {
  return (
    <li className="olympiad-rating__list-item olympiad-rating__list-item_paddingTopBottom">
      <div className="olympiad-rating__width15">
        <p className="olympiad-rating__list-item-text">1</p>
      </div>
      <div className="olympiad-rating__width40">
        <div className="olympiad-rating__user-info-block olympiad-rating__list-item_center">
          <div className="olympiad-rating__user-info-image">
            <img src={pic1} alt="Картинка" />
          </div>
          <div className="olympiad-rating__user-info-content">
            <p className="olympiad-rating__user-info-name">Иванова Мария</p>
            <p className="olympiad-rating__user-info-school">Школа №1</p>
          </div>
        </div>
      </div>
      <div className="olympiad-rating__width15">
        <p className="olympiad-rating__list-item-text">26</p>
      </div>
      <div className="olympiad-rating__width15">
        <p className="olympiad-rating__list-item-text">30:00</p>
      </div>
      <div className="olympiad-rating__width15">
        <p className="olympiad-rating__list-item-text">6/3/22</p>
      </div>
    </li>
  );
}

export default RatingCard;