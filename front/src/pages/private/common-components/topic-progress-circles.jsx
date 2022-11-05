/* eslint-disable react/prop-types */
import React from 'react';

function TopicProgressCircles({ count }) {
  const circles = [0, 1, 2, 3, 4];
  const circleStyle = (circleNum) => (count >= circleNum ? 'circle fill' : 'circle');
  return (
    <div className="d-flex fd-row">
      {circles.map((circleNum) => <div key={circleNum} className={circleStyle(circleNum)} />)}
    </div>
  );
}

export default TopicProgressCircles;
