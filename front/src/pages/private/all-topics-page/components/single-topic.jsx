/* eslint-disable react/prop-types */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicProgressCircles from '../../common-components/topic-progress-circles';

function SingleTopic({ topic }) {
  const nav = useNavigate();
  const handleDivClick = () => nav(`/dashboard/singleTopic/${topic._id}`);

  return (
    <div
      role="button"
      tabIndex={0}
      className="topic"
      onClick={handleDivClick}
      onKeyDown={handleDivClick}
    >

      <TopicProgressCircles count={topic.progressDone} />

      <h3>{topic.title}</h3>
      <p>{topic.content}</p>

    </div>
  );
}

export default SingleTopic;
