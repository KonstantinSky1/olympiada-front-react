import React, { useContext  } from "react";

import './News.css';

import NewsItem from '../NewsItem/NewsItem';
import { JsonPlaceholderContext } from '../../contexts/JsonPlaceholderContext';

function News() {
  // Тестируем получение данных с API
  const { posts } = useContext(JsonPlaceholderContext);

  return (
    <section className="all-news">
      <h2 className="all-news__title">Все новости</h2>
      <ul className="all-news__list">
        {
          posts && posts.map(post => {
            return <NewsItem
                      key={post.id}
                      post={post}
                    />
          })
        }
      </ul>
    </section>
  );
}

export default News;