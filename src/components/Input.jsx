import React from 'react';

export const Input = ({
  name,
  error = '',
  value,
  label = '',
  type = '',
  onChange,
}) => {
  return (
    <>
      <label>
        {label}
        <input name={name} value={value} type={type} onChange={onChange} />
      </label>
      {error && <span>{error}</span>}
    </>
  );
};
