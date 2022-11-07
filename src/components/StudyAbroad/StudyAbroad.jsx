import React from "react";

import './StudyAbroad.css';

import Pic1 from '../../images/study-abroad-info-img.png';

import StudyAbroadCard from '../StudyAbroadCard/StudyAbroadCard';

function StudyAbroad() {
  return (
    <section className="studyAbroad">
      <div className="studyAbroad-class">
        <div className="studyAbroad-subject">
          <img src={Pic1} alt="Картинки" className="studyAbroad-subject__image" />
          <div className="studyAbroad-subject__content-block">
            <div className="studyAbroad-subject__content-block-text">
              <p className="studyAbroad-subject__content-text-header">Для всех возрастов</p>
              <h5 className="studyAbroad-subject__content-text-title">Обучение за рубежом</h5>
              <p className="studyAbroad-subject__content-text-info">Самая актуальная информация и экспертное мнение по процессу поступления, выдаче туристических и студенческих виз, перелетам и ограничениям в связи с пандемией и политической ситуацией.</p>
            </div>
            <a href="#" className="studyAbroad-subject__content-link-begin"><span>Подробнее</span></a>
          </div>
        </div>
      </div>

      <div className="studyAbroad__our-partners">
        <h4 className="studyAbroad__our-partners-title">Наши партнеры</h4>
        <ul className="studyAbroad__our-partners-list">
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
          <StudyAbroadCard />
        </ul>
      </div>
    </section>
  );
}

export default StudyAbroad;