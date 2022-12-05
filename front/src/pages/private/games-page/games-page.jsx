import React from 'react';
import MirrorClockGame from './components/mirror-clock-game';
import ClockDifference from './components/clock-difference';

function GamesPage() {
  return (
    <div>
      <div>mirror clock</div>
      <MirrorClockGame />
      <hr />
      <div>difference time</div>
      <ClockDifference />
    </div>
  );
}

export default GamesPage;
