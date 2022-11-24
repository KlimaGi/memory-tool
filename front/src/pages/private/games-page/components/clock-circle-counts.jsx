import React from 'react';
import { Clock } from 'react-clock-styled';
import styles from './clock.module.scss';

function ClockCircleCounts() {
  return (

    <div className={styles.clock}>
      <Clock time="06:00:00" size="md" border="1px solid" color="#868bb1" handleColor="#344CB7" />
    </div>

  );
}

export default ClockCircleCounts;
