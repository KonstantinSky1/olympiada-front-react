import React, { useContext, useState, useEffect } from "react";
import { Pagination } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import './News.css';

import NewsItem from '../NewsItem/NewsItem';
import { JsonPlaceholderContext } from '../../contexts/JsonPlaceholderContext';

function News() {
  // Тестируем получение данных с API
  const { posts } = useContext(JsonPlaceholderContext);

  const [page, setPage] = useState(1);
  const [pageQuantity, setPageQuantity] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const itemsPerPage = 5;

  // Для изменения размера Pagination от разрешения экрана:
  const matches = useMediaQuery('(max-width:411px)');

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageQuantity(Math.ceil(posts.length / itemsPerPage));
  }, [posts, itemsPerPage, itemOffset]);

  function handleChangePage(num) {
    const newOffset = ((num-1) * itemsPerPage) % posts.length;

    setItemOffset(newOffset);
  }

  return (
    <section className="all-news">
      <h2 className="all-news__title">Все новости</h2>
      <ul className="all-news__list">
        {
          currentItems && currentItems.map(post => {
            return <NewsItem
                      key={post.id}
                      post={post}
                    />
          })
        }
      </ul>
      {
        !!pageQuantity && (
          <Pagination
            count={pageQuantity}
            page={page}
            sx={{
              marginX: 'auto',
              width: 'fit-content'
            }}
            onChange={(_, num) => {
              handleChangePage(num)
              setPage(num)}
            }
            size={`${matches && "small"}`}
          />
        )
      }
    </section>
  );
}

export default News;