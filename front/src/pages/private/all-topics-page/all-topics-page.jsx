/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useContext, useEffect } from 'react';
import MainContext from '../../../context/main-context';
import { get } from '../../../plugins/http';
import SingleTopic from './components/single-topic';
import styles from './components/single-topic.module.scss';

function AllTopicsPage() {
  const { topics, setTopics } = useContext(MainContext);
  useEffect(() => {
    const allTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`allTopics/${secret}`);
      setTopics(res.data);
    };
    allTopics();
  }, []);

  return (
    <div className={styles['topics-container']}>
      {topics.map((topic) => <SingleTopic key={topic._id} topic={topic} />)}
    </div>
  );
}

export default AllTopicsPage;