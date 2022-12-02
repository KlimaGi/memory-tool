import React from 'react';
import MirrorClockGame from './components/mirror-clock-game';
import ClockDifference from './components/clock-difference';

function GamesPage() {
  return (
    <div>
      <MirrorClockGame />
      <hr />
      <ClockDifference />
    </div>
  );
}

export default GamesPage;
