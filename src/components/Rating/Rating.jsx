import React from "react";

import './Rating.css';

import RatingCard from '../RatingCard/RatingCard';

function Rating() {
  return (
    <div className="olympiad-rating">
      <h4 className="olympiad-rating__title">Рейтинг участников интернет-олимпиады “HiTest” по английскому языку от 04.11.2022 года</h4>
      <div className="olympiad-rating__content">
        <div className="olympiad-rating__quantity">
          <p className="olympiad-rating__quantity-users">Участников</p>
          <p className="olympiad-rating__quantity-number">25</p>
        </div>
        <ul className="olympiad-rating__list">
          <li className="olympiad-rating__list-item olympiad-rating__list-item_marginBottom20">
            <div className="olympiad-rating__width15"><p className="olympiad-rating__list-item-title">Место</p></div>
            <div className="olympiad-rating__width40"><p className="olympiad-rating__list-item-title">Фамилия Имя</p></div>
            <div className="olympiad-rating__width15"><p className="olympiad-rating__list-item-title">Баллы</p></div>
            <div className="olympiad-rating__width15"><p className="olympiad-rating__list-item-title">Время</p></div>
            <div className="olympiad-rating__width15"><p className="olympiad-rating__list-item-title">Дата сдачи</p></div>
          </li>
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
        </ul>
      </div>
    </div>
  );
}

export default Rating;