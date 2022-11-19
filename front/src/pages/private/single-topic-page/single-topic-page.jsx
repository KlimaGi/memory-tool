import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from '../../../plugins/http';
import TopicProgressCircles from '../common-components/topic-progress-circles';
import Button from '../common-components/button';
import UpdateTopic from './components/update-topic';
import { dateStr } from '../../../plugins/date-str';

function SingleTopicPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [progressNum, setProgressNum] = useState(0);
  const [revisionDate, setRevisionDate] = useState('');
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const singleTopic = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`singleTopic/${id}/${secret}`);

      setTopic(res.data);

      const { progressDone } = res.data;
      setProgressNum(progressDone);

      const reviewDateStr = dateStr(res.data.progress, progressDone);
      setRevisionDate(reviewDateStr);
    };
    singleTopic();
  }, [showUpdateForm]);

  const setNewRevisionDate = async () => {
    const res = await get(`updateProgress/${id}`);

    if (!res.error) {
      const topicCopy = { ...topic };
      topicCopy.progressDone = Number(res.data.progressNum);

      setTopic(topicCopy);
      setProgressNum(topicCopy.progressDone);

      const reviewDateStr = dateStr(topicCopy.progress, topicCopy.progressDone);
      setRevisionDate(reviewDateStr);
    }
  };

  const update = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  // todo: add message to user like alert
  const deleteTopic = async () => {
    const res = await get(`deleteTopic/${id}`);
    console.log('res-delete', res);
    nav('/dashboard/allTopics');
  };

  return (
    <div>
      {
        topic
        && (
          <div className="topic-container">
            <TopicProgressCircles count={progressNum} />
            {
              progressNum < 4
                ? (
                  <span className="m-t-b">
                    Next topic revision date:
                    {revisionDate}
                  </span>
                )
                : <span className="m-t-b">Topic revision done</span>
            }

            <h3 className="m-t-b">{topic.title}</h3>
            <p className="m-t-b">{topic.content}</p>

            <div className="button-container">
              <Button func={update} text="Edit" />
              {progressNum < 4 && <Button func={setNewRevisionDate} text="Revision done" />}
              <Button func={deleteTopic} text="Delete" />
            </div>
          </div>
        )
      }
      {
        showUpdateForm && (
          <UpdateTopic
            topic={topic}
            setTopic={() => setTopic()}
            setClose={() => setShowUpdateForm()}
          />
        )
      }
    </div>

  );
}

export default SingleTopicPage;
