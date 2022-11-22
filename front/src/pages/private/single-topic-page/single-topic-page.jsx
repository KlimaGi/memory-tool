import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainContext from '../../../context/main-context';
import { get } from '../../../plugins/http';
import TopicProgressCircles from '../common-components/topic-progress-circles';
import Button from '../common-components/button';
import UpdateTopic from './components/update-topic';
import { dateStr } from '../../../plugins/date-str';

function SingleTopicPage() {
  const { id } = useParams();
  const { topics } = useContext(MainContext);

  const oneTopic = topics.find((topic) => topic._id === id);

  const [topic, setTopic] = useState(null);
  const date = dateStr(oneTopic.progressDate);
  const [progressDate, setProgressDate] = useState(date);

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    const singleTopic = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`singleTopic/${id}/${secret}`);

      setTopic(res.data);
    };
    singleTopic();
  }, []);

  const setNewRevisionDate = async () => {
    const res = await get(`updateProgress/${id}`);

    if (!res.error) {
      console.log('res-update revision', res);

      setTopic(res.data.updateTopicDate);
      setProgressDate(dateStr(topic.progressDate));
    }
    if (res.error) console.log('update revision date fail, try again');
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
            <TopicProgressCircles count={topic.progressDone} />
            {
              topic.progressDone < 4
                ? (
                  <span className="m-t-b date-text">
                    Next topic revision date:
                    {' '}
                    {progressDate}
                  </span>
                )
                : <span className="m-t-b">Topic revision done</span>
            }

            <h3 className="m-t-b">{topic.title}</h3>
            <p className="m-t-b">{topic.content}</p>

            <div className="button-container">
              <Button func={update} text="Edit" />
              {topic.progressDone < 4 && <Button func={setNewRevisionDate} text="Revision done" />}
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
