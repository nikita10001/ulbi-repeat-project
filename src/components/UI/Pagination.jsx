import React from 'react';
import MyButton from './button/MyButton';

const Pagination = ({ pages, currentPage, setPage }) => {
  return (
    <div className="page__pagination">
      <ul className="page__list">
        {pages.map((page) => (
          <li className="page__item" key={page}>
            <MyButton onClick={() => setPage(page)}>{page + 1}</MyButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
