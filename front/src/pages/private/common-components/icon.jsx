/* eslint-disable react/prop-types */
import React from 'react';

function Icon({ icon, text }) {
  return (
    <img width={30} height={25} src={icon} alt={text} />
  );
}

export default Icon;
