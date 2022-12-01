/* eslint-disable react/prop-types */
import React from 'react';
import { Clock } from 'react-clock-styled';
import styles from './clock.module.scss';

function ClockCircleCounts({ time }) {
  return (

    <div className={styles.clock}>
      <Clock
        time={time}
        size="md"
        border="1px solid"
        color="#868BB1"
        handleColor="#344CB7"
        bg="#ffffff"
      />
    </div>

  );
}

export default ClockCircleCounts;
