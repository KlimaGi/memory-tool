/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useContext, useEffect } from 'react';
import MainContext from '../../../context/main-context';
import SingleTopic from './components/single-topic';
import { get } from '../../../plugins/http';
import styles from './components/single-topic.module.scss';

function AllTopicsPage() {
  const { topics, setTopics } = useContext(MainContext);

  useEffect(() => {
    const allTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`allTopics/${secret}`);
      if (!res.error) setTopics(res.data);
      if (res.error) console.log('there is no topics');
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
