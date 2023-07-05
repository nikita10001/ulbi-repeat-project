import './App.css';
import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import { useSortedAndSearchedPosts } from './hooks/usePosts';
import { PostService } from './API/PostService';
import Header from './components/Header';
import { useFetching } from './hooks/useFetching';
import Pagination from './components/UI/Pagination';
import { getPagesArray } from './utils/getPagesArray';
import { getPagesCount } from './utils/getPagesCount';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aHello', body: 'cText' },
    { id: 2, title: 'bHello', body: 'bText' },
    { id: 3, title: 'cHello', body: 'aText' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearched = useSortedAndSearchedPosts(posts, filter.sort, filter.query);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pagesCount, setPagesCount] = useState(0);
  const pagesArray = getPagesArray(pagesCount);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page * 10);
    setPosts(response.data.posts);
    setPagesCount(getPagesCount(response.data.total, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="page">
      <Header />
      <div className="page__wrapper">
        <PostForm addPost={addPost} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {isPostsLoading ? (
          <h3 className="page__title">{`Загрузка...`} </h3>
        ) : (
          <div>
            <PostList posts={sortedAndSearched} removePost={removePost} />
            <Pagination pages={pagesArray} setPage={setPage} currentPage={page} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
