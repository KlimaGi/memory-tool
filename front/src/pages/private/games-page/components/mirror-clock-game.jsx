/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useRef } from 'react';
import { randomTime, whatIsTheTime } from './clock-functions';

import ClockCircleCounts from './clock-circle-counts';
import styles from './clock.module.scss';

function MirrorClockGame() {
  const [time, setTime] = useState('00:00');
  const [answer, setAnswer] = useState('00:00');
  const [show, setShow] = useState(false);
  const showAnswerStyle = show ? styles['answer-show'] : styles['answer-hide'];
  const hourRef = useRef();
  const minutesRef = useRef();

  const generateTime = () => {
    const newTime = randomTime();
    setTime(newTime);
    if (show === true) setShow(false);
    hourRef.current.value = '';
    minutesRef.current.value = '';
  };

  const mirrorTimeIs = () => {
    const rightResult = whatIsTheTime(time);
    setAnswer(rightResult);
    setShow(!show);
    const hours = hourRef.current.value;
    const minutes = minutesRef.current.value;

    const addZero = (num) => ((num.length < 2) ? `0${num}` : num);

    const userAnswer = [addZero(hours), addZero(minutes)].join(':');
    console.log('userAnswer', userAnswer);
    if (userAnswer === rightResult) console.log('correct');
    else console.log('right answear is ', rightResult);
  };

  const flowWrite = () => {
    if (hourRef.current.value.length === 2) minutesRef.current.focus();
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
              maxLength="2"
              ref={hourRef}
              onChange={flowWrite}
            />
          </label>
          <b>:</b>

          <label htmlFor="minutes">
            <input
              type="text"
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
