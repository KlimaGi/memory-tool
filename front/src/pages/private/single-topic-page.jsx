import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../plugins/http';
import TopicProgressCircles from './components/topic-progress-circles';

const SingleTopicPage = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [revisionDate, setRevisionDate] = useState('');

  useEffect(() => {
    const singleTopic = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`singleTopic/${id}/${secret}`);
      console.log('res-single-topic-page', res);
      setTopic(res);

      const revisionDates = res.data.progress;
      const progressStep = res.data.progressStep;
      const reviewDate = revisionDates[progressStep].slice(0, 3).join('-');
      setRevisionDate(reviewDate);
    };
    singleTopic();
  }, []);

  // const revisionDates = topic.data.progress;
  // const progressStep = topic.data.progressStep;
  // const revisionDate = revisionDates[progressStep].slice(0, 3).join('-');

  return (
    <div>
      {topic &&
        <div>
          Single Post Page
          <TopicProgressCircles count={topic.data.progressStep} />
          <span>Topic revision date: {revisionDate}</span>
          <h3>{topic.data.title}</h3>
          <p>{topic.data.content}</p>
          <button>Edit</button>
          <button>Revision Done</button>
        </div>}
    </div>

  )
}

export default SingleTopicPage;
