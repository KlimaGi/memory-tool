import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from '../../plugins/http';
import TopicProgressCircles from './common-components/topic-progress-circles';
import Button from './common-components/button';

const SingleTopicPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [revisionDate, setRevisionDate] = useState('');
  const [progressNum, setProgressNum] = useState(0);

  useEffect(() => {
    const singleTopic = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`singleTopic/${id}/${secret}`);
      setTopic(res.data);

      const revisionDates = res.data.progress;
      const progressDone = res.data.progressDone;
      setProgressNum(progressDone);
      const reviewDate = revisionDates[progressDone].slice(0, 3).join('-');
      setRevisionDate(reviewDate);
    };
    singleTopic();
  }, []);

  const setNewRevisionDate = async () => {
    const res = await get(`updateProgress/${id}`);

    if (!res.error) {
      const topicCopy = { ...topic };
      topicCopy.progressDone = Number(res.data.progressNum);
      setTopic(topicCopy);
      setProgressNum(Number(res.data.progressNum));
    };
  }

  const update = () => {
    console.log('update');
  }

  return (
    <div className='main'>
      Single Topic Page
      {topic &&
        <div className='topic-container'>

          <TopicProgressCircles count={progressNum} />

          <span className='m-t-b'>Topic revision date: {revisionDate}</span>
          <h3 className='m-t-b'>{topic.title}</h3>
          <p className='m-t-b'>{topic.content}</p>

          <Button func={update} text="Edit" />
          <Button func={setNewRevisionDate} text='Revision Done' />
        </div>
      }

    </div>

  )
}

export default SingleTopicPage;
