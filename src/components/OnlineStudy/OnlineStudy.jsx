import React from 'react';

import './OnlineStudy.css';

import OnlineStudyCard from '../OnlineStudyCard/OnlineStudyCard';

function OnlineStudy() {
  return (
    <section className="onlineStudy">
      <div className="onlineStudy-info">
        <p className="onlineStudy-info__text">Онлайн-обучение - образовательный контент на нашей платформе. Все уроки, лекции, общение с преподавателями происходит дистанционно. Обязательное условие - наличие Интернета. Вы сможете подтянуть знания по любому предмету или даже освоить новую профессию.</p>
      </div>

      <ul className="onlineStudy__list">
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
        <OnlineStudyCard />
      </ul>
    </section>
  );
}

export default OnlineStudy;