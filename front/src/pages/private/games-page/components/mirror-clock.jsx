import React, { useState } from 'react';
import { randomTime, whatIsTheTime } from './clock-functions';

import ClockCircleCounts from './clock-circle-counts';

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

  return (
    <div>

      <ClockCircleCounts time={time} />
      <button type="button" onClick={generateTime}>start</button>
      <div>{time}</div>
      <div>input write</div>
      <button type="button" onClick={mirrorTimeIs}>submit</button>
      <div>
        result:
        {' '}
        {answer}
        {' '}
      </div>
      {
        showClock2 && <ClockCircleCounts time={answer} />
      }

    </div>
  );
}

export default MirrorClock;
