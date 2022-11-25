/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { randomTime, whatIsTheTime } from './clock-functions';

import ClockCircleCounts from './clock-circle-counts';
import styles from './clock.module.scss';

function MirrorClockGame() {
  const [time, setTime] = useState('00:00');
  const [answer, setAnswer] = useState('00:00');
  const [show, setShow] = useState(false);
  const showAnswerStyle = show ? styles['answer-show'] : styles['answer-hide'];

  const generateTime = () => {
    const newTime = randomTime();
    setTime(newTime);
    if (show === true) setShow(false);
  };

  const mirrorTimeIs = () => {
    const result = whatIsTheTime(time);
    setAnswer(result);
    setShow(!show);
  };
  // todo: auto focus, submited result on clock,
  // todo:  success alert or add right answer in opacity red background

  return (
    <div className="d-flex">

      <ClockCircleCounts time={time} />
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={generateTime}
        >
          start
        </button>
        <b>{time}</b>

        <div className={styles['input-container']}>
          <label htmlFor="hours">
            <input
              type="text"
              id="hours"
              placeholder="hh"
              className={styles['input-label']}
              autoFocus
            />
          </label>
          <b>:</b>

          <label htmlFor="minutes">
            <input
              type="text"
              id="minutes"
              placeholder="mm"
              className={styles['input-label']}
            />
          </label>
        </div>

        <button
          className={styles.button}
          type="button"
          onClick={mirrorTimeIs}
        >
          submit
        </button>

        <div className={showAnswerStyle}>
          result:
          {' '}
          {answer}
          {' '}
        </div>

      </div>

      {
        show && <ClockCircleCounts time={answer} />
      }

    </div>
  );
}

export default MirrorClockGame;
