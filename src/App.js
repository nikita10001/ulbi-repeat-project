import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import { useSortedAndSearchedPosts } from './components/hooks/usePosts';
import { PostService } from './API/PostService';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aHello', body: 'cText' },
    { id: 2, title: 'bHello', body: 'bText' },
    { id: 3, title: 'cHello', body: 'aText' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isLoading, setIsLoading] = useState(true);
  const sortedAndSearched = useSortedAndSearchedPosts(posts, filter.sort, filter.query);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await PostService.getPosts();
    setPosts(response.data.posts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="page">
      <PostForm addPost={addPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearched} removePost={removePost} />
    </div>
  );
}

export default App;
