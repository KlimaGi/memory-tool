import React from 'react';
import styled from 'styled-components';
import { Clock } from 'react-clock-styled';

const Main = styled.div`
//min-height: 100vh;
// display:flex;
// justify-content:center;
// align-items: center;
// flex-wrap: wrap;
.clock{margin: 10px 150px;}
 `;

function ClockCircleCounts() {
  return (
    <Main>
      <div className="clock">
        <Clock time="06:00:00" size="sm" border="" color="#000957" handleColor="#344CB7" />
      </div>
    </Main>

  );
}

export default ClockCircleCounts;
