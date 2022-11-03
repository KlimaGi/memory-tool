import React from 'react';
import TopicProgressCircles from './topic-progress-circles';

const SingleTopic = ({ topic }) => {
  console.log('topic', topic);
  return (
    <div className='topic'>

      <TopicProgressCircles count={topic.progressStep} />

      <h3>{topic.title}</h3>
      <p>{topic.content}</p>

    </div>
  )
}

export default SingleTopic
