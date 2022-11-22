/* eslint-disable react/prop-types */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopicProgressCircles from '../../common-components/topic-progress-circles';
// import { dateStr } from '../../../../plugins/date-str';
import styles from './single-topic.module.scss';

function SingleTopic({ topic }) {
  const nav = useNavigate();
  // const [revisionDate, setRevisionDate] = useState('');
  const handleDivClick = () => nav(`/dashboard/singleTopic/${topic._id}`);

  // useEffect(() => {
  //   const reviewDateStr = dateStr(topic.progress, topic.progressDone);
  //   setRevisionDate(reviewDateStr);
  // }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.topic}
      onClick={handleDivClick}
      onKeyDown={handleDivClick}
    >

      <TopicProgressCircles count={topic.progressDone} />
      <span className="date-text">
        Review date:
        {' '}
        revisionDate
      </span>
      <h3>{topic.title}</h3>
      <p>{topic.content}</p>

    </div>
  );
}

export default SingleTopic;
