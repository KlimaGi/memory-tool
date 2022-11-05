/* eslint-disable react/prop-types */
import React from 'react';

function Button({ func, text }) {
  return (
    <button onClick={func} className="button" type="button">{text}</button>
  );
}

export default Button;
