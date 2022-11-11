/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../../context/main-context';
import { get } from '../../../plugins/http';
import SingleTopic from './components/single-topic';
import styles from './components/single-topic.module.scss';

function AllTopicsPage() {
  const nav = useNavigate();
  const { topics, setTopics } = useContext(MainContext);
  // const secret = localStorage.getItem('secret');

  useEffect(() => {
    const allTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`allTopics/${secret}`);
      if (!res.error) setTopics(res.data);
      if (res.error) nav('/');
    };
    allTopics();
  }, []);

  // useEffect(() => {
  //   const secret = localStorage.getItem('secret');
  //   if (!secret) nav('/');
  // }, []);

  return (
    <div className={styles['topics-container']}>
      {topics.map((topic) => <SingleTopic key={topic._id} topic={topic} />)}
    </div>
  );
}

export default AllTopicsPage;
