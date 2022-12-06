import React from 'react';
import MirrorClockGame from './components/mirror-clock-game';
import ClockDifference from './components/clock-difference';
import ShortMemoryQuiz from './components/short-memory-quiz';

function GamesPage() {
  return (
    <div>
      <div>Mirror clock</div>
      <MirrorClockGame />

      <div>Time difference</div>
      <hr />
      <ClockDifference />

      <div>Short memory quiz</div>
      <hr />
      <ShortMemoryQuiz />

    </div>
  );
}

export default GamesPage;
