import React from "react";
import { Link } from "react-router-dom";

import './NewsItem.css';

import olympAllnewsImage from '../../images/olymp-allnews-image.png';

function NewsItem() {
  return (
    <li className="all-news__list-item">
      <div className="all-news__list-itemBlock">
        <div className="all-news__list-item-textBlock">
          {/* Сделать чтобы в URL добавлялся title новости */}
          <h4 className="all-news__list-item-title"><Link to="/newsitemopen" className="all-news__list-item-title-link">Подведены итоги олимпиады по английскому языку</Link></h4>
          <p className="all-news__list-item-text">Подведены итоги олимпиады по географии для учителей, которая прошла с 4 по 7 октября 2022 г.</p>
          <p className="all-news__list-item-date">20.09.2022</p>
        </div>
        <div className="all-news__list-item-imageBlock">
          <img src={olympAllnewsImage} alt="Картинка" />
        </div>
      </div>
    </li>
  );
}

export default NewsItem;


