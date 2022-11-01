import React from "react";

import './NewsMain.css';

import pic1 from '../../images/news-main-image.png';

function NewsMain() {
  return (
    <li className="allNewsMain__list-item">
      <div className="allNewsMain__list-item-image-block">
        <img src={pic1} alt="Картинка" />
      </div>
      <h5 className="allNewsMain__list-item-title">Подведены итоги олимпиады по английскому языку</h5>
      <p className="allNewsMain__list-item-date">20.09.2022</p>
    </li>
  );
}

export default NewsMain;