import React, { useContext, useEffect } from 'react';
import MainContext from '../../context/main-context';
import { get } from '../../plugins/http';

const AllTopicsPage = () => {
  const { topics, setTopics } = useContext(MainContext);
  useEffect(() => {
    const allTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`allTopics/${secret}`);
      console.log('res-front', res);
      setTopics(res.data);
      console.log('res.data', res.data);
    };
    allTopics();
  }, []);

  return (
    <div>
      All Topics Page
    </div>
  )
}

export default AllTopicsPage;
