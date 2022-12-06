import React, { useState } from 'react';
import { randomTime, timeDifference } from '../functions/clock-functions';
import ClockCircleCounts from '../common-components/clock-circle-counts';
import UserInputAction from '../common-components/user-input-action';
import styles from '../common-components/clock.module.scss';

function ClockDifference() {
  const [time, setTime] = useState(['00:00', '00:00']);
  const [rightAnswer, setRightAnswer] = useState('00:00');
  const [wrongAnswer, setWrongAnswer] = useState('00:00');
  const [show, setShow] = useState(false);
  const showAnswerStyle = show ? styles['answer-show'] : styles['answer-hide'];
  const [answerStyle, setAnswerStyle] = useState(null);

  const generateTimes = () => {
    const time1 = randomTime();
    const time2 = randomTime();
    setTime([time1, time2]);
    if (show === true) setShow(false);
    setWrongAnswer('00:00');
  };

  const timeDifferenceIs = (userAnswer) => {
    const rightResult = timeDifference(time);
    setRightAnswer(rightResult);
    setShow(!show);

    if (userAnswer === rightResult) {
      setWrongAnswer('00:00');
      setAnswerStyle(styles.correct);
    } else {
      setWrongAnswer(userAnswer);
      setAnswerStyle(styles.wrong);
    }
    console.log('rightResult', rightResult);
  };

  return (
    <div className={styles['game-container']}>

      <div className={styles['game-item']}>
        <ClockCircleCounts time={time[0]} />
      </div>

      <div className={styles['game-item']}>
        <ClockCircleCounts time={time[1]} />
      </div>

      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={generateTimes}
        >
          Start game 2
        </button>

        <b>
          {time[0]}
          {' '}
          -
          {' '}
          {time[1]}
        </b>

        <UserInputAction getUserAnswer={timeDifferenceIs} />

      </div>

      <div className={`${answerStyle} ${showAnswerStyle}`}>
        <p>
          Correct answer :
          {' '}
          {rightAnswer}
        </p>

        {
          wrongAnswer !== '00:00'
          && (
            <p>
              Your answer:
              {' '}
              {wrongAnswer}
            </p>
          )
        }
      </div>
    </div>
  );
}

export default ClockDifference;
