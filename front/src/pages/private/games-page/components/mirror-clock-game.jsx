/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { randomTime, whatIsTheTime } from '../functions/clock-functions';

import ClockCircleCounts from '../common-components/clock-circle-counts';
import AnimatedToggleContent from '../common-components/animated-toggle-content';
import UserInputAction from '../common-components/user-input-action';
import styles from '../common-components/clock.module.scss';

function MirrorClockGame() {
  const [time, setTime] = useState('00:00');
  const [answer, setAnswer] = useState('00:00');
  const [wrongAnswer, setWrongAnswer] = useState('00:00');
  const [show, setShow] = useState(false);
  const showAnswerStyle = show ? styles['answer-show'] : styles['answer-hide'];
  const [answerStyle, setAnswerStyle] = useState(null);

  const generateTime = () => {
    const newTime = randomTime();
    setTime(newTime);
    if (show === true) setShow(false);
    // hourRef.current.value = '';
    // minutesRef.current.value = '';
    setWrongAnswer('00:00');
  };

  const mirrorTimeIs = (userAnswer) => {
    const rightResult = whatIsTheTime(time);
    setAnswer(rightResult);
    setShow(!show);

    if (userAnswer === rightResult) {
      setWrongAnswer('00:00');
      setAnswerStyle(styles.correct);
    } else {
      setWrongAnswer(userAnswer);
      setAnswerStyle(styles.wrong);
    }
  };

  return (
    <div className={styles['game-container']}>
      <div className={styles['rule-block']}>
        <AnimatedToggleContent />
      </div>

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

          <UserInputAction mirrorTimeIs={mirrorTimeIs} />

          <div className={showAnswerStyle}>
            <div className={answerStyle}>
              correct answer:
              {' '}
              {answer}
            </div>

          </div>

        </div>
      </div>
      <div className={styles['clock-block']}>
        {
          show && (
            <div className={styles['game-item']}>
              <ClockCircleCounts time={answer} />
            </div>
          )
        }
      </div>

      <div className={styles['clock-block']}>
        {
          wrongAnswer !== '00:00' && (
            <div className={`${styles['game-item']} ${styles['wrong-clock']}`}>

              <ClockCircleCounts time={wrongAnswer} />

            </div>
          )
        }

      </div>

    </div>
  );
}

export default MirrorClockGame;
