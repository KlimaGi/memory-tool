import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../plugins/http';
import TopicProgressCircles from './common-components/topic-progress-circles';
import Button from './common-components/button';

function SingleTopicPage() {
  // const nav = useNavigate();
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [progressNum, setProgressNum] = useState(0);
  const [revisionDate, setRevisionDate] = useState('');

  const dateFormat = (arr) => {
    const dateArr = arr;
    if (dateArr[1] < 10) dateArr[1] = ('0').concat(dateArr[1]);
    if (dateArr[2] < 10) dateArr[2] = ('0').concat(dateArr[2]);
    return dateArr.slice(0, 3).join('-');
  };
  const dateStr = (revisionDates, progressDone) => {
    const reviewDate = revisionDates[progressDone];
    reviewDate[1] += 1;
    return dateFormat(reviewDate);
  };

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
  }, []);

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
    console.log('update');
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
              {progressNum < 4 && <Button func={setNewRevisionDate} text="Revision Done" />}
            </div>

          </div>
        )
      }
    </div>

  );
}

export default SingleTopicPage;
