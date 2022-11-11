/* eslint-disable react/prop-types */
import React from 'react';
import styles from './common-styles.module.scss';

function Button({ func, text }) {
  const className = text === 'Delete' ? 'delete-button' : 'button';
  return (
    <button
      onClick={func}
      className={styles[className]}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
