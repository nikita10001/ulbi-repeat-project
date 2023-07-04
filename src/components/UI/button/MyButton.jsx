import React from 'react';

const MyButton = ({ children, onClick, ...props }) => {
  return (
    <button className="button" {...props} onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
};

export default MyButton;
