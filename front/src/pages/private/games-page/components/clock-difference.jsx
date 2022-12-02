import React, { useState } from 'react';
import { randomTime } from '../functions/clock-functions';

function ClockDifference() {
  const [time, setTime] = useState(['00:00', '00:00']);

  const generateTimes = () => {
    const time1 = randomTime();
    const time2 = randomTime();
    setTime([time1, time2]);
  };

  return (
    <div>

      <div>clock 1</div>
      <div>clock 2</div>
      <button
        type="button"
        onClick={generateTimes}
      >
        Start game 2
      </button>
      <div>difference time</div>
      <b>
        {time[0]}
        {' '}
        :
        {' '}
        {time[1]}
      </b>
      <input type="text" placeholder="your answer" />
      <input type="text" placeholder="your answer min" />
      <button type="button">submit</button>
      <div>message succes or fail, with correct answer</div>
    </div>
  );
}

export default ClockDifference;
