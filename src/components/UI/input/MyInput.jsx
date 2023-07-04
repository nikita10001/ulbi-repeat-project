import React from 'react';

const MyInput = ({ onChange, ...props }) => {
  return (
    <div className="input__wrapper">
      <input onChange={(e) => onChange(e)} {...props} className="input" />
    </div>
  );
};

export default MyInput;
