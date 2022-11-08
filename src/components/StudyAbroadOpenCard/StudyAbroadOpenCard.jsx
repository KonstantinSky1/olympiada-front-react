import React from "react";

import './StudyAbroadOpenCard.css';

import pic1 from '../../images/study-abroad-card-image.png';

function StudyAbroadOpenCard() {
  return (
    <section className="studyAbroadOpenCard">
      <div className="studyUniversityCardInfo">
        <div className="studyUniversityCardInfo__image-block">
          <div className="studyUniversityCardInfo__image">
            <img src={pic1} alt="Картинка" />
          </div>
          <div className="studyUniversityCardInfo__image-text">
            <p className="studyUniversityCardInfo__image-text-country">Чехия</p>
            <h4 className="studyUniversityCardInfo__image-text-university">Карлов университет</h4>
            <p className="studyUniversityCardInfo__image-text-description">Ка́рлов университе́т в Праге — главный университет Чехии, старейший университет Центральной и Восточной Европы и один из старейших классических университетов мира, был основан императором Карлом IV в 1348 году. Предметы преподаются на чешском и английском языках. Википедия</p>
          </div>
        </div>
        <div className="studyUniversityCardInfo__description-block">
          <p className="studyUniversityCardInfo__description-text">В настоящее время в университете учатся более 50 тыс. студентов, из которых около семи тысяч — иностранцев[1], причём больше всего выходцев из Словакии, Греции и Великобритании.</p>
          <p className="studyUniversityCardInfo__description-text">Университет сотрудничает со многими высшими учебными заведениями Америки, Европы и Азии. В том числе с 23 в США, 19 в Германии и 11 — во Франции. Также университет входит в ассоциацию главных европейских вузов вместе с Оксфордом, Сорбонной, Мюнхенским университетом, Университетом Женевы и др. На его факультетах читают лекции преподаватели ведущих университетов мира.</p>
          <p className="studyUniversityCardInfo__description-text">В настоящее время в так называемом «Шанхайском рейтинге» лучших вузов мира университет входит в третью сотню (по состоянию на 2017 год[2]), а среди чешских учебных заведений занимает первое место[2]. Также в 2012 году вуз впервые вошёл в рейтинги двухсот лучших в области математики и физики, а в 2016 году — в двести лучших медицинских высших школ мира[2].</p>
          <p className="studyUniversityCardInfo__description-text">На посту ректора с 2022 года находится Милена Краличкова.</p>
        </div>
      </div>

      <div className="studyUniversityFacultyInfo">
        <h4 className="studyUniversityFacultyInfo__title">Факультеты университета</h4>
        <ul className="studyUniversityFacultyInfo__list">
          <li className="studyUniversityFacultyInfo__list-item">три теологических (католический, евангелистский и гуситский);</li>
          <li className="studyUniversityFacultyInfo__list-item">шесть медицинских (из них три в Праге, по одному в Пльзене и Градце-Кралове и фармацевтический факультет);</li>
          <li className="studyUniversityFacultyInfo__list-item">физико-математический (физика, математика, информатика);</li>
          <li className="studyUniversityFacultyInfo__list-item">юридический;</li>
          <li className="studyUniversityFacultyInfo__list-item">философский;</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт общей лингвистики</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт этнологии</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт транслатологии (переводоведения)</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт философии и религиоведения</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт фонетики</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра логики</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра педагогики</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра театроведения</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра киноведения</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра физической культуры</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра психологии</li>
          <li className="studyUniversityFacultyInfo__list-item">Кафедра социологии</li>
          <li className="studyUniversityFacultyInfo__list-item">Языковой центр</li>
          <li className="studyUniversityFacultyInfo__list-item">и другие</li>
          <li className="studyUniversityFacultyInfo__list-item">педагогический;</li>
          <li className="studyUniversityFacultyInfo__list-item">социальных наук (экономика, менеджмент, журналистика, дизайн, международные отношения);</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт политологии и международных отношений (Международные отношения, Политология)</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт международных страноведений (Международное страноведение)</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт экономических наук (Экономическая теория, Экономика)</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт социологии (Социология и социальная политика)</li>
          <li className="studyUniversityFacultyInfo__list-item">Институт коммуникации и журналистики (СМИ (массмедиа) и коммуникация, журналистика)</li>
          <li className="studyUniversityFacultyInfo__list-item">природоведческий;</li>
          <li className="studyUniversityFacultyInfo__list-item">физической культуры и спорта (менеджмент);</li>
          <li className="studyUniversityFacultyInfo__list-item">гуманитарных наук.</li>
        </ul>
      </div>

      <div className="studyUniversityFreeConsult">

      </div>
    </section>
  );
}

export default StudyAbroadOpenCard;