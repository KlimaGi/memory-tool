import React from 'react';
import moment from 'moment';

function TodayPage() {
  const today = moment().format('YYYY-MM-DD');
  return (
    <div>
      {today}
    </div>
  );
}

export default TodayPage;
