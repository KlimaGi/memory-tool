import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from '../../../plugins/http';
import TopicProgressCircles from '../common-components/topic-progress-circles';
import Button from '../common-components/button';

const SingleTopicPage = () => {
  const nav = useNavigate();
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
      const progressDone = res.data.progressDone;
      const reviewDate = revisionDates[progressDone].slice(0, 3).join('-');
      setRevisionDate(reviewDate);
    };
    singleTopic();
  }, []);

  // const revisionDates = topic.data.progress;
  // const progressStep = topic.data.progressStep;
  // const revisionDate = revisionDates[progressStep].slice(0, 3).join('-');
  const updateRevisionDone = () => {
    console.log('update done');
  }

  const edit = () => {
    console.log('update');
  }

  return (
    <div className='main'>
      {topic &&
        <div className='topic-container'>
          Single Topic Page
          <TopicProgressCircles count={topic.data.progressDone} />

          <span>Topic revision date: {revisionDate}</span>

          <h3>{topic.data.title}</h3>
          <p>{topic.data.content}</p>
          <Button func={edit} text="Edit" />
          <Button func={updateRevisionDone} text='Revision Done' />
        </div>
      }

    </div>

  )
}

export default SingleTopicPage;
