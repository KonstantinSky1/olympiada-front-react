import React from "react";

import './Tutors.css';

import Pic1 from '../../images/study-abroad-info-img.png';
import TutorCard from '../TutorCard/TutorCard';

function Tutors() {
  return (
    <section className="tutors">
      <div className="tutors-class">
        <div className="tutors-subject">
          <img src={Pic1} alt="Картинки" className="tutors-subject__image" />
          <div className="tutors-subject__content-block">
            <div className="tutors-subject__content-block-text">
              <p className="tutors-subject__content-text-header">Для всех возрастов</p>
              <h5 className="tutors-subject__content-text-title">Репетиторы</h5>
              <p className="tutors-subject__content-text-info">На сайте вы можете ознакомиться с анкетами преподавателей и выбрать тех, кто вам подходит, или спросить совета, и мы вам порекомендуем оптимальные варианты. Наши консультации и подбор подходящего вам репетитора — бесплатны. Вы оплачиваете только сами занятия непосредственно преподавателю.</p>
            </div>
            <a href="#" className="tutors-subject__content-link-begin"><span>Подобрать</span></a>
          </div>
        </div>
      </div>

      <div className="tutors-subjects">
        <h4 className="tutors-subjects__title">Выберите предмет, для того чтобы отобразить репетиторов</h4>
        <ul className="tutors-subjects__list">
          <li><a href="#" className="tutors-subjects__list-item">Математика</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Английский язык</a></li>
          <li><a href="#" className="tutors-subjects__list-item">История Казахстана</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Всемирная история</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Физика</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Русский язык</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Казахский язык</a></li>
          <li><a href="#" className="tutors-subjects__list-item">Химия</a></li>
        </ul>
      </div>

      <div className="tutors-best-teachers">
        <div className="tutors-best-teachers__header">
          <h4 className="tutors-best-teachers__header-title">Лучшие преподаватели</h4>
          <button type="button" className="tutors-best-teachers__header-button">Показать все</button>
        </div>
        <ul className="tutors-best-teachers__list">
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
        </ul>
      </div>
    </section>
  );
}

export default Tutors;