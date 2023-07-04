import React from 'react';

const MySelect = ({ options, defaultValue, value, setValue }) => {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="select"
      name="form[]"
    >
      <option value="1" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
