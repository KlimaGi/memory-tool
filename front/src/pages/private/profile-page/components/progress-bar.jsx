/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import TopicProgressCircles from '../../common-components/topic-progress-circles';
import styles from './profile.module.scss';

function ProgressBar({ progress, quantity }) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => { setCompleted(quantity); }, []);

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#a0a0b8',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div>
      <TopicProgressCircles count={progress} />
      <div className={styles['bar-container']}>
        <div style={fillerStyles}>

          <div className={styles.label}>{`${completed}%`}</div>

        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
