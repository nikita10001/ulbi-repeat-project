import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ addPost }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const createPost = (e) => {
    e.preventDefault();
    if (post.title) {
      const newPost = {
        id: Date.now(),
        ...post,
      };
      addPost(newPost);
      setPost({ title: '', body: '' });
    }
  };
  return (
    <div className="page__form">
      <form action="">
        <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} placeholder="Введите заголовок..." />
        <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} placeholder="Введите текст..." />
        <MyButton onClick={createPost}>Добавить</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
