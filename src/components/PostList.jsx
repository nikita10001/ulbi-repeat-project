import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, removePost }) => {
  if (!posts.length) {
    return <h3 className="page__title">{`Постов нет :(`} </h3>;
  }
  return (
    <div className="page__posts">
      {posts.map((post, i) => (
        <PostItem removePost={removePost} key={post.id} number={i + 1} {...post} />
      ))}
    </div>
  );
};

export default PostList;
