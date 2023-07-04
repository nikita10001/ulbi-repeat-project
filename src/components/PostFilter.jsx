import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  const options = [
    { id: 1, value: 'title', name: 'По заголовку' },
    { id: 2, value: 'body', name: 'По тексту' },
  ];
  return (
    <div className="page__filter">
      <MyInput placeholder={'Поиск...'} value={filter.query} onChange={(e) => setFilter({ ...filter, query: e.target.value })} />
      <MySelect
        value={filter.sort}
        setValue={(value) => setFilter({ ...filter, sort: value })}
        options={options}
        defaultValue={'Сортировка'}
      />
    </div>
  );
};

export default PostFilter;
