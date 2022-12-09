/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { randomTime, whatIsTheTime } from '../functions/clock-functions';

import ClockCircleCounts from '../common-components/clock-circle-counts';
import AnimatedToggleContent from '../common-components/animated-toggle-content';
import UserInputAction from '../common-components/user-input-action';
import { mirrorClockRules } from '../texts/game-rules-text';
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
        <AnimatedToggleContent mirrorClockRules={mirrorClockRules} />
      </div>

      <div className={styles['game-item']}>
        <ClockCircleCounts time={time} />
      </div>

      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={generateTime}
        >
          start
        </button>
        <b>{time}</b>

        <UserInputAction getUserAnswer={mirrorTimeIs} />

        <div className={`${answerStyle} ${showAnswerStyle}`}>
          <p>
            Correct answer is:
            {' '}
            {answer}
          </p>
          {
            wrongAnswer !== '00:00'
            && (
              <p>
                Wrong answer:
                {' '}
                {wrongAnswer}
              </p>
            )
          }
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
