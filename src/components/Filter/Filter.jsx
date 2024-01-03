import React from 'react';
import { nanoid } from 'nanoid';

function Filter({ onChange }) {
  const filterInputId = nanoid();
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </>
  );
}

export default Filter;
