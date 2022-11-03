import React from "react";

import './News.css';

import NewsItem from '../NewsItem/NewsItem';

function News() {
  return (
    <section className="all-news">
      <h2 className="all-news__title">Все новости</h2>
      <ul className="all-news__list">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </ul>
    </section>
  );
}

export default News;