import React from "react";

import './WorkAbroad.css';

import Pic1 from '../../images/work-abroad-image.png';

import OpenVacanciesCard from '../OpenVacanciesCard/OpenVacanciesCard';

function WorkAbroad() {
  return (
    <section className="workAbroad">
      <div className="workAbroad-class">
        <div className="workAbroad-subject">
          <img src={Pic1} alt="Картинки" className="workAbroad-subject__image" />
          <div className="workAbroad-subject__content-block">
            <div className="workAbroad-subject__content-block-text">
              <p className="workAbroad-subject__content-text-header">Для всех возрастов</p>
              <h5 className="workAbroad-subject__content-text-title">Работа за рубежом</h5>
              <p className="workAbroad-subject__content-text-info">Самая актуальная информация и экспертное мнение по процессу поступления, выдаче туристических и студенческих виз, перелетам и ограничениям в связи с пандемией и политической ситуацией.</p>
            </div>
            <a href="#" className="workAbroad-subject__content-link-begin"><span>Подробнее</span></a>
          </div>
        </div>
      </div>
      <div className="openVacancies">
        <div className="openVacancies__header">
          <p className="openVacancies__header-title">Открытые вакансии</p>
          <button type="button" className="openVacancies__header-button">Показать все</button>
        </div>
        <ul className="openVacancies__list">
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
          <OpenVacanciesCard />
        </ul>
      </div>
    </section>
  );
}

export default WorkAbroad;