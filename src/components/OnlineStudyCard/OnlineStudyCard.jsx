import React from 'react';

import './OnlineStudyCard.css';

import pic1 from '../../images/online-study-card-image.png';

function OnlineStudyCard() {
  return (
    <li className="onlineStudyCard">
      <div className="onlineStudyCard__image">
        <img src={pic1} alt="Картинка" />
      </div>
      <p className="onlineStudyCard__date">9 нояб. 2022- 10 дек. 2022</p>
      <p className="onlineStudyCard__status">Запланировано</p>
      <p className="onlineStudyCard__description">Учимся писать сочинения. Для школьников 4 класс</p>
      <button className="onlineStudyCard__button" type="button">Записаться</button>
    </li>
  );
}

export default OnlineStudyCard;