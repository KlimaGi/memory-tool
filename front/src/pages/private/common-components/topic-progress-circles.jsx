/* eslint-disable react/prop-types */
import React from 'react';
import styles from './common-styles.module.scss';

function TopicProgressCircles({ count }) {
  const circles = [0, 1, 2, 3, 4];
  const circleStyle = (circleNum) => (count >= circleNum
    ? `${styles.circle} ${styles.fill}`
    : `${styles.circle}`
  );

  return (
    <div className="d-flex fd-row">
      {circles.map((circleNum) => (
        <div
          key={circleNum}
          className={circleStyle(circleNum)}
        />
      ))}
    </div>
  );
}

export default TopicProgressCircles;
