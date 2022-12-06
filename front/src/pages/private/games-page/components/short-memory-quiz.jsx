import React, { useState } from 'react';
import { generateNums } from '../functions/memory-quiz';
import styles from '../common-components/clock.module.scss';

function ShortMemoryQuiz() {
  const [numbers, setNumbers] = useState([]);

  const generate = () => {
    const num = generateNums(4);
    setNumbers(num);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={generate}
        type="button"
        className={styles.button}
      >
        Begin

      </button>
      <p>{numbers.map((num) => num)}</p>
      <input placeholder="answer" />
      <button
        type="button"
        className={styles.button}
      >
        Submit

      </button>
    </div>
  );
}

export default ShortMemoryQuiz;
