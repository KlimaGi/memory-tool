import React from 'react';
import moment from 'moment';

function TodayPage() {
  const today = moment().format('YYYY-MM-DD');
  return (
    <div>
      <div>
        {today}
      </div>
      <div>
        Today you don not have any topics to review
      </div>

    </div>
  );
}

export default TodayPage;
