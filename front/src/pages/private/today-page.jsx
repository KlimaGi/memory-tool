import React, { useEffect } from 'react';
import moment from 'moment';
import { post } from '../../plugins/http';

function TodayPage() {
  const today = moment().format('YYYY-MM-DD');
  const date = moment().format('YYYY-MM-DD').split('-').map((x) => Number(x));
  console.log('date', date);
  // const [topics, setTopics] = useState(null);

  const topicDate = {
    dateArr: date,
  };

  useEffect(() => {
    const todayTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await post(`todayTopics/${secret}`, topicDate);
      console.log('res-today', res);
      // if (!res.error) setTopics(res.data);
    };
    todayTopics();
  }, []);

  return (
    <div>
      <div>
        {today}
      </div>
      <div>
        Today you don not have any topics to review
      </div>
      {
        //   <div>
        //   {topics
        //     && topics[0].title}
        // </div>
      }

    </div>
  );
}

export default TodayPage;
