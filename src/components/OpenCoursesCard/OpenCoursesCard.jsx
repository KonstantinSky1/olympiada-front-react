import React from "react";

import './OpenCoursesCard.css';

import starIcon from '../../images/start-icon.svg';
import pic1 from '../../images/open-courses-card.png';

function OpenCoursesCard() {
  return (
    <section className="openCoursesCard">
      <div className="openCoursesCard-content">

        <div className="openCoursesCard-info">
          <div className="openCoursesCard-info__block">
            <h5 className="openCoursesCard-info__block-title">География 5-9 класс. Облети земной шар</h5>
            <p className="openCoursesCard-info__block-description">Полное погружение в материал. Поможем изучить школьную программу. Ответы на самые интересные вопросы.</p>
            <p className="openCoursesCard-info__block-text">SMARTEST Academy</p>
            <div className="openCoursesCard-info__block-rating-block">
              <p className="openCoursesCard-info__block-rating-number">4,0</p>
              <div className="openCoursesCard-info__block-rating-stars">
                <img src={starIcon} alt="Картинки" />
                <img src={starIcon} alt="Картинки" />
                <img src={starIcon} alt="Картинки" />
                <img src={starIcon} alt="Картинки" />
              </div>
              <p className="openCoursesCard-info__block-rating-people">(35)</p>
            </div>
            <p className="openCoursesCard-info__block-update">Всего 4 часа - 21 уроков</p>
          </div>
          <div className="openCoursesCard-info__block">
            <h5 className="openCoursesCard-info__block-title">Для кого:</h5>
            <ul className="openCoursesCard-info__block-list">
              <li className="openCoursesCard-info__block-list-item">Школьникам, которые пропустили некоторые темы или хотят углубить свои знания</li>
              <li className="openCoursesCard-info__block-list-item">Студентам-геологам, географам, физикам, экономистам и социологам, которые собираются делать исследовательскую работу или доклад</li>
              <li className="openCoursesCard-info__block-list-item">Всем, кто хочет знать о географии больше, чем дается в школьной программе</li>
            </ul>
          </div>
          <div className="openCoursesCard-info__block">
            <h5 className="openCoursesCard-info__block-title">Зачем:</h5>
            <ul className="openCoursesCard-info__block-list">
              <li className="openCoursesCard-info__block-list-item">Подготовиться к ЕГЭ или экзаменам, профильным олимпиадам</li>
              <li className="openCoursesCard-info__block-list-item">Полюбить географию и расширить кругозор</li>
              <li className="openCoursesCard-info__block-list-item">Увидеть другой подход к преподаванию</li>
            </ul>
          </div>
          <div className="openCoursesCard-info__block">
            <h5 className="openCoursesCard-info__block-title">Авторский подход:</h5>
            <ul className="openCoursesCard-info__block-list">
              <li className="openCoursesCard-info__block-list-item">Этот курс спроектирован преподавателями на основе многолетнего опыта работы с учениками. Материалы курса сопровождаются понятными примерами и иллюстрациями</li>
            </ul>
          </div>
        </div>

        <div className="openCoursesCard-card">
          <div className="openCoursesCard-card__image">
            <img src={pic1} alt="Картинка" />
          </div>
          <p className="openCoursesCard-card__discount-price">100 000 тг</p>
          <div className="openCoursesCard-card__price-block">
            <p className="openCoursesCard-card__price">70 000 тг.</p>
            <p className="openCoursesCard-card__discount">Скидка 30%</p>
          </div>
          <p className="openCoursesCard-card__finish-promotion">До конца акции осталось:</p>
          <div className="openCoursesCard-card__promotion-block">
            <div className="openCoursesCard-card__promotion-number-block">
              <p className="openCoursesCard-card__promotion-number">4</p>
              <p className="openCoursesCard-card__promotion-text">Дня</p>
            </div>
            <div className="openCoursesCard-card__promotion-number-block">
              <p className="openCoursesCard-card__promotion-number">7</p>
              <p className="openCoursesCard-card__promotion-text">Дня</p>
            </div>
            <div className="openCoursesCard-card__promotion-number-block">
              <p className="openCoursesCard-card__promotion-number">15</p>
              <p className="openCoursesCard-card__promotion-text">Дня</p>
            </div>
            <div className="openCoursesCard-card__promotion-number-block">
              <p className="openCoursesCard-card__promotion-number">56</p>
              <p className="openCoursesCard-card__promotion-text">Дня</p>
            </div>
          </div>
          <button type="button" className="openCoursesCard-card__button">Оставить заявку</button>
        </div>
      </div>
    </section>
  );
}

export default OpenCoursesCard;