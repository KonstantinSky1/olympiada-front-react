import React from "react";

import './RatingCard.css';

import pic1 from '../../images/rating-card-image.png';

function RatingCard() {
  return (
    <li className="olympiad-rating__list-item olympiad-rating__list-item_paddingTopBottom">
      <div className="olympiad-rating__width15 olympiad-rating__order-2">
        <p className="olympiad-rating__list-item-text olympiad-rating__list-item-text-place">1</p>
      </div>
      <div className="olympiad-rating__width40 olympiad-rating__order-1">
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
      <div className="olympiad-rating__width15 olympiad-rating__order-3">
        <p className="olympiad-rating__list-item-text olympiad-rating__list-item-text-score">26</p>
      </div>
      <div className="olympiad-rating__width15 olympiad-rating__order-4">
        <p className="olympiad-rating__list-item-text olympiad-rating__list-item-text-time">30:00</p>
      </div>
      <div className="olympiad-rating__width15 olympiad-rating__order-5">
        <p className="olympiad-rating__list-item-text olympiad-rating__list-item-text-testDate">6/3/22</p>
      </div>
    </li>
  );
}

export default RatingCard;