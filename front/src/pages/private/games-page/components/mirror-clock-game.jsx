/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useRef } from 'react';
import { randomTime, whatIsTheTime } from './clock-functions';

import ClockCircleCounts from './clock-circle-counts';
import AnimatedToggleContent from './animated-toggle-content';
import styles from './clock.module.scss';

function MirrorClockGame() {
  const [time, setTime] = useState('00:00');
  const [answer, setAnswer] = useState('00:00');
  const [wrongAnswer, setWrongAnswer] = useState('00:00');
  const [show, setShow] = useState(false);
  const showAnswerStyle = show ? styles['answer-show'] : styles['answer-hide'];
  const [answerStyle, setAnswerStyle] = useState(null);
  const hourRef = useRef();
  const minutesRef = useRef();

  const generateTime = () => {
    const newTime = randomTime();
    setTime(newTime);
    if (show === true) setShow(false);
    hourRef.current.value = '';
    minutesRef.current.value = '';
    setWrongAnswer('00:00');
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
    if (userAnswer === rightResult) {
      setWrongAnswer('00:00');
      setAnswerStyle(styles.correct);
    } else {
      setWrongAnswer(userAnswer);
      setAnswerStyle(styles.wrong);
    }
  };

  const flowWrite = () => {
    if (hourRef.current.value.length === 2) minutesRef.current.focus();
  };
  // todo: auto focus, submited result on clock,
  // todo: correct answers styles

  return (
    <div className={styles['game-container']}>
      <div className={styles['game-item']}>
        <ClockCircleCounts time={time} />
      </div>
      <div className={styles['game-item']}>
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
            onClick={mirrorTimeIs}
          >
            submit
          </button>

          <div className={showAnswerStyle}>
            <div className={answerStyle}>
              correct answer:
              {' '}
              {answer}
            </div>

          </div>

        </div>
      </div>

      {
        show && (
          <div className={styles['game-item']}>
            <ClockCircleCounts time={answer} />
          </div>
        )
      }

      <AnimatedToggleContent />

      {
        wrongAnswer !== '00:00' && (
          <div className={styles['game-item']}>
            <div className={styles['wrong-clock']}><ClockCircleCounts time={wrongAnswer} /></div>
          </div>
        )
      }

    </div>
  );
}

export default MirrorClockGame;
