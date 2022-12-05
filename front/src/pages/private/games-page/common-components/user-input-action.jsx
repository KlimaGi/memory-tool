/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styles from './clock.module.scss';

function UserInputAction({ getUserAnswer }) {
  const hourRef = useRef();
  const minutesRef = useRef();

  const userAnswer = () => {
    const hours = hourRef.current.value;
    const minutes = minutesRef.current.value;

    const addZero = (num) => ((num.length < 2) ? `0${num}` : num);
    const answerFormatted = [addZero(hours), addZero(minutes)].join(':');

    getUserAnswer(answerFormatted);
    hourRef.current.value = '';
    minutesRef.current.value = '';
  };

  const flowWrite = () => {
    if (hourRef.current.value.length === 2) minutesRef.current.focus();
  };

  return (
    <div>
      <div className={styles['input-container']}>
        <label htmlFor="hours">
          <input
            type="number"
            min="00"
            max="12"
            id="hours"
            placeholder="hh"
            className={styles['input-label']}
            maxLength="2"
            ref={hourRef}
            onChange={flowWrite}
          />
        </label>
        <b>:</b>

        <label htmlFor="minutes">
          <input
            type="number"
            min="00"
            max="59"
            id="minutes"
            placeholder="mm"
            className={styles['input-label']}
            maxLength="2"
            ref={minutesRef}
          />
        </label>
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={userAnswer}
      >
        submit
      </button>
    </div>
  );
}

export default UserInputAction;
