import React from "react";

import './PersonalAccountInfo.css';

import pic1 from '../../images/student-photo.png';
import pic2 from "../../images/subscribers-icon.png";
import pic3 from "../../images/subscriptions-icon.png";
import pic4 from "../../images/news-photo.png";
import pic5 from "../../images/news1.png";
import pic6 from "../../images/news2.png";

import PersonalAccountUser from '../PersonalAccountUser/PersonalAccountUser';

function PersonalAccountInfo() {
  return (
    <section className="pesonal-account-info">

      <div className="pesonal-account">
        <PersonalAccountUser />
        <div className="pesonal-account__full-info">
          <div className="dropdown-menu dropdown-menu_padding-top">
            <span className="dropdown-menu__arrow arrow-full-info" onClick={() => {
              document.querySelector('.pesonal-account__full-info-content').classList.toggle('subMenu-open');
            }}></span>
          </div>
          <div className="pesonal-account__full-info-content">
            <div className="pesonal-account__full-info-content-header">
              <h4 className="pesonal-account__full-info-content-header-title">Общая информация</h4>
              <a href="#" className="pesonal-account__full-info-content-header-link">Редактировать</a>
            </div>
            <div className="pesonal-account__full-info-content-body">
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-one">Учебное заведение:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-two">Ельтайская средняя школа</p>
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-three">Преподаватель:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-four">Асанова Айгерим Аскаровна</p>
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-five">Дата рождения:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-six">26.10.1992</p>
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-seven">ФИО:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-eight">Каримова Дарина Максутовна</p>
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-nine">Номер телефона:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-ten">+7 (777) 777-23-34</p>
              <p className="pesonal-account__full-info-content-body-itemOne-text pesonal-account__full-info-eleven">Имя пользователя:</p>
              <p className="pesonal-account__full-info-content-body-itemTwo-text pesonal-account__full-info-twelve">karimova.d@gmail.com</p>
            </div>
          </div>
          <span className="pesonal-account__full-info-content-line"></span>
          <div className="pesonal-account__full-info-subscriptions">
            <div className="pesonal-account__full-info-subscriptions-subscribers">
              <p className="subscribers-count">37</p>
              <p className="subscribers-text">подписчиков</p>
              <img src={pic2} alt="Картинка" className="subscribers-image" />
            </div>
            <div className="pesonal-account__full-info-subscriptions-subscriptions">
              <p className="subscribers-count">24</p>
              <p className="subscribers-text">подписок</p>
              <img src={pic3} alt="Картинка" className="subscribers-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="post-news">
        <div className="post-news__student-photo">
          <img src={pic1} alt="Картинка" />
        </div>
        <form name="post-news-form" className="post-news__form">
          <div className="post-news__inputs-blocks">
            <div className="post-news__inputs-block">
              <input type="text" name="news" className="post-news__input" placeholder="Что у Вас нового?" />
              <div>
                <button type="submit" className="post-news__submit"></button>
              </div>
            </div>
            <div>
              <button type="button" className="post-news__add-image"></button>
            </div>
          </div>
        </form>
      </div>

      <div className="account-all-news">
        <div className="account-all-news__header">
          <h4 className="account-all-news__header-title">Все новости</h4>
        </div>
        <div className="news">
          <div className="news__wrapper">
            <div className="news__info">
              <div className="news__info__student-photo">
                <img src={pic4} alt="Картинка" />
              </div>
              <div className="news__info-content">
                <p className="news__info-content-text">Школа №7</p>
                <p className="news__info-content-date">26 ноября 2022 в 9:23</p>
              </div>
            </div>
            <div className="news__content">
              <div className="news__content-block">
                <img src={pic5} alt="Картинка" className="news__content-image" />
                <p className="news__content-text"></p>
              </div>
              <div className="news__content-buttons-block">
                <button className="news__content-button-like"></button>
                <button className="news__content-button-comment"></button>
                <button className="news__content-button-send"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="news__wrapper">
            <div className="news__info">
              <div className="news__info__student-photo">
                <img src={pic4} alt="Картинка" />
              </div>
              <div className="news__info-content">
                <p className="news__info-content-text">Школа №7</p>
                <p className="news__info-content-date">26 ноября 2022 в 9:23</p>
              </div>
            </div>
            <div className="news__content">
              <div className="news__content-block">
                <img src={pic6} alt="Картинка" className="news__content-image" />
                <p className="news__content-text"></p>
              </div>
              <div className="news__content-buttons-block">
                <button className="news__content-button-like"></button>
                <button className="news__content-button-comment"></button>
                <button className="news__content-button-send"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default PersonalAccountInfo;