/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useContext } from 'react';
import MainContext from '../../../context/main-context';
import SingleTopic from './components/single-topic';
import styles from './components/single-topic.module.scss';

function AllTopicsPage() {
  const { topics } = useContext(MainContext);

  return (
    <div className={styles['topics-container']}>
      {topics.map((topic) => <SingleTopic key={topic._id} topic={topic} />)}
    </div>
  );
}

export default AllTopicsPage;
