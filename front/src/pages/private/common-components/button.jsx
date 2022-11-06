/* eslint-disable react/prop-types */
import React from 'react';
import styles from './common-styles.module.scss';

function Button({ func, text }) {
  return (
    <button
      onClick={func}
      className={styles.button}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
