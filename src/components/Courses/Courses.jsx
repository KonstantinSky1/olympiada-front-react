import React from "react";

import './Courses.css';

import StartCoursesCard from '../StartCoursesCard/StartCoursesCard';
import AllCoursesCard from '../AllCoursesCard/AllCoursesCard';

function Courses() {
  return (
    <section className="courses">
      <div className="courses-popular-subjects">
        <h4 className="courses-popular-subjects__title">Популярные темы</h4>
        <ul className="courses-popular-subjects__list">
          <li><a href="#" className="courses-popular-subjects__list-link">География</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Математика</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Химия</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Языки</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Физика</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Биология</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">Экономика</a></li>
          <li><a href="#" className="courses-popular-subjects__list-link">SMM</a></li>
        </ul>
      </div>

      <div className="courses-popular">
        <h4 className="courses-popular__title">Начните с этих курсов</h4>
        <div className="courses-popular__buttons-block">
          <button type="button" className="courses-popular__button">Самые популярные</button>
          <button type="button" className="courses-popular__button">Новые</button>
        </div>
        <ul className="courses-popular__list">
          <StartCoursesCard />
          <StartCoursesCard />
          <StartCoursesCard />
          <StartCoursesCard />
        </ul>
      </div>

      <div className="courses-all">
        <h4 className="courses-all-title">Все курсы</h4>
        <ul className="courses-all__list">
          <AllCoursesCard />
          <AllCoursesCard />
          <AllCoursesCard />
          <AllCoursesCard />
          <AllCoursesCard />
        </ul>
      </div>
    </section>
  );
}

export default Courses;