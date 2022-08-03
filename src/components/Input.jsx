import React from 'react';

export const Input = ({ name, error = '', value, label = '', onChange }) => {
  return (
    <>
      <label>
        {label}
        <input name={name} value={value} onChange={onChange} />
      </label>
      {error && <span>{error}</span>}
    </>
  );
};
