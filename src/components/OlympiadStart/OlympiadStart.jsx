import React from "react";
import { Link } from "react-router-dom";

import './OlympiadStart.css';

import Pic1 from '../../images/english-subject.png';
import pic2 from '../../images/icon-clock.svg';
import pic3 from '../../images/graph.png';
import pic4 from '../../images/test.png';

function OlympiadStart() {
  return (
    <div className="olympiadStart">
      <div className="olympiad-class">
        <div className="olympiad-subject">
          <img src={Pic1} alt="Картинки" className="olympiad-subject__image" />
          <div className="olympiad-subject__content-block">
            <div className="olympiad-subject__content-block-text">
              <p className="olympiad-subject__content-text-header">для школьников</p>
              <h5 className="olympiad-subject__content-text-title">Интернет-Олимпиада по английскому языку</h5>
              <p className="olympiad-subject__content-text-info">Узнай свой уровень английского в масштабах всей страны и получи сертификат для портфолио! Участие бесплатное!</p>
            </div>
            <a href="#" className="olympiad-subject__content-link-begin"><span>Начать</span></a>
          </div>
        </div>
      </div>

      <div className="olympiad-class-choice">
        <p className="olympiad-class-choice__text">Решились пройти Интернет-Олимпиаду? Это отлично! Итак, стартуем!</p>
        <p className="olympiad-class-choice__text">Пожалуйста, выберите свой класс:</p>
        <ul className="olympiad-class-choice__list">
          <li>
            <a href="#" className="olympiad-class-choice__link">5 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">6 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">7 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">8 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">9 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">10 класс</a>
          </li>
          <li>
            <a href="#" className="olympiad-class-choice__link">11 класс</a>
          </li>
        </ul>
      </div>

      <div className="olympiad-exercises">
        <div className="olympiad-exercises__header">
          <div className="olympiad-exercises__pagination">
            Здесь будет Пагинация
          </div>
          <div className="olympiad-exercises__time-counter">
            <img src={pic2} alt="Картинка" />
            <p className="olympiad-exercises__time-counter-text">03:00</p>
          </div>
        </div>
        <div className="olympiad-exercises__content">
          <div className="olympiad-exercises__content-body">
            <p className="olympiad-exercises__content-title">Задание 1 из 25.</p>
            <p className="olympiad-exercises__content-question">Часть речи в английском языке, которая обозначает количество и порядок предметов при счете?</p>
            <img src={pic3} alt="Картинка" className="olympiad-exercises__content-image" />
            <img src={pic4} alt="Картинка" className="olympiad-exercises__content-image" />
            <ul className="olympiad-exercises__content-answers">
              <li className="radio">
                <input type="radio" name="answer" className="custom-radio" id="radio1" />
                <label htmlFor="radio1" className="olympiad-exercises__content-answers-item-text">Существительное (Noun)</label>
              </li>
              <li className="radio">
                <input type="radio" name="answer" className="custom-radio" id="radio2" />
                <label htmlFor="radio2" className="olympiad-exercises__content-answers-item-text">Глагол (Verb)</label>
              </li>
              <li className="radio">
                <input type="radio" name="answer" className="custom-radio" id="radio3" />
                <label htmlFor="radio3" className="olympiad-exercises__content-answers-item-text">Числительное (Numerals)</label>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className="olympiad-exercises__content-button">Далее</button>
      </div>

      <div className="olympiad-rezults">
        <div className="olympiad-rezults__header">
          <h4 className="olympiad-rezults__header-title">Ваши результаты:</h4>
          <Link to="#" className="olympiad-rezults__header-link">Посмотреть ответы</Link>
        </div>
        <div className="olympiad-rezults__rezult-block">
          <div className="olympiad-rezults__rezult-answer-block">
            <p className="olympiad-rezults__rezult-text">Правильные ответы:</p>
            <p className="olympiad-rezults__rezult-answer">1</p>
          </div>
          <div className="olympiad-rezults__rezult-answer-block">
            <p className="olympiad-rezults__rezult-text">Неправильные ответы:</p>
            <p className="olympiad-rezults__rezult-answer">24</p>
          </div>
          <div className="olympiad-rezults__rezult-answer-block">
            <p className="olympiad-rezults__rezult-text">Затраченное время:</p>
            <p className="olympiad-rezults__rezult-answer">30:04</p>
          </div>
          <div className="olympiad-rezults__rezult-answer-block">
            <p className="olympiad-rezults__rezult-text">Общее количество баллов:</p>
            <p className="olympiad-rezults__rezult-answer">25</p>
          </div>
        </div>
        <Link to="/rating" className="olympiad-rezults__rating-link">Рейтинг участников</Link>
      </div>
    </div>
  );
}

export default OlympiadStart;