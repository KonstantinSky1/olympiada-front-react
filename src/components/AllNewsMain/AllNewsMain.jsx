import React from "react";

import './AllNewsMain.css';

import NewsMain from '../NewsMain/NewsMain';

function AllNewsMain() {
  return (
    <section className="allNewsMain">
      <div className="allNewsMain__header">
        <h4 className="allNewsMain__header-title">Новости</h4>
        <button type="button" className="allNewsMain__header-show-all">Показать все</button>
      </div>
      <ul className="allNewsMain__list">
        <NewsMain />
        <NewsMain />
        <NewsMain />
      </ul>
    </section>
  );
}

export default AllNewsMain;