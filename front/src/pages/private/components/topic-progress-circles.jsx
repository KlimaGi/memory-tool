import React from 'react'

const TopicProgressCircles = ({ count }) => {
  const circles = [0, 1, 2, 3, 4];
  const circleStyle = (index, count) => count >= index ? 'circle fill' : 'circle';
  return (
    <div className='d-flex fd-row'>
      {circles.map((item, index) => <div className={circleStyle(index, count)}></div>)}
    </div>
  )
}

export default TopicProgressCircles;
