import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({ number, id, title, body, removePost }) => {
  return (
    <div className="post">
      <div className="post__inner">
        <div className="post__top">
          <h3>
            {number}. {title}
          </h3>
        </div>
        <div className="post__body">{body}</div>
      </div>
      <MyButton onClick={(e) => removePost(id)}>Delete</MyButton>
    </div>
  );
};

export default PostItem;
