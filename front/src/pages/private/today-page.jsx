import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { get } from '../../plugins/http';
import SingleTopic from './all-topics-page/components/single-topic';

function TodayPage() {
  const today = moment().format('YYYY-MM-DD');
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    const todayTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`todayTopics/${secret}/${today}`);
      console.log('res-today', res);
      if (!res.error) setTopics(res.data);
    };
    todayTopics();
  }, []);

  return (
    <div>
      <div>
        {today}
      </div>
      {!topics
        && (
          <div>
            Today you do not have any topics to review
          </div>
        )}
      <div>
        {topics
          && topics.map((topic) => <SingleTopic topic={topic} key={topic._id} />)}
      </div>

    </div>
  );
}

export default TodayPage;
