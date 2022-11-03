import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicProgressCircles from './topic-progress-circles';

const SingleTopic = ({ topic }) => {
  const nav = useNavigate();
  console.log('topic', topic);

  return (
    <div className='topic' onClick={() => nav(`/dashboard/singleTopic/${topic._id}`)}>

      <TopicProgressCircles count={topic.progressDone} />

      <h3>{topic.title}</h3>
      <p>{topic.content}</p>

    </div>
  )
}

export default SingleTopic
