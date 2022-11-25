/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { randomTime, whatIsTheTime } from './clock-functions';

import ClockCircleCounts from './clock-circle-counts';
import styles from './clock.module.scss';

function MirrorClock() {
  const [time, setTime] = useState('06:00');
  const [answer, setAnswer] = useState('06:00');
  const [showClock2, setShowClock2] = useState(false);

  const generateTime = () => {
    const newTime = randomTime();
    setTime(newTime);
    if (showClock2 === true) setShowClock2(false);
  };

  const mirrorTimeIs = () => {
    const result = whatIsTheTime(time);
    setAnswer(result);
    setShowClock2(!showClock2);
  };
  // todo: auto focus, submited result on clock,
  // todo:  success alert or add right answear in opacity red background

  return (
    <div className="d-flex">

      <ClockCircleCounts time={time} />
      <div>
        <button type="button" onClick={generateTime}>start</button>
        <span>{time}</span>

        <div>

          <label htmlFor="hours">
            <input
              type="text"
              id="hours"
              placeholder="hh"
              className={styles['input-label']}
              autoFocus
            />
          </label>
          :
          <label htmlFor="minutes">
            <input
              type="text"
              id="minutes"
              placeholder="mm"
              className={styles['input-label']}
            />
          </label>
        </div>

        <button type="button" onClick={mirrorTimeIs}>submit</button>
        {
          showClock2 && (
            <div>
              result:
              {' '}
              {answer}
              {' '}
            </div>
          )
        }
      </div>

      {
        showClock2 && <ClockCircleCounts time={answer} />
      }

    </div>
  );
}

export default MirrorClock;
