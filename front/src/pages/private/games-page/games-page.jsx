import React from 'react';
import MirrorClockGame from './components/mirror-clock-game';
import ClockDifference from './components/clock-difference';
import ShortMemoryQuiz from './components/short-memory-quiz';
import styles from './common-components/clock.module.scss';

function GamesPage() {
  return (
    <div className={styles['main-container']}>
      <div>Mirror clock</div>
      <MirrorClockGame />

      <hr />
      <div>Time difference</div>
      <ClockDifference />

      <hr />
      <div>Short memory quiz</div>
      <ShortMemoryQuiz />

    </div>
  );
}

export default GamesPage;
