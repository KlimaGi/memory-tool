import React, { useState, useRef, useEffect } from 'react';
import { generateNums } from '../functions/memory-quiz';
import styles from '../common-components/clock.module.scss';

function ShortMemoryQuiz() {
  const [numbers, setNumbers] = useState('');
  const [numQuantity, setNumQuantity] = useState(4);
  const numsRef = useRef();
  const [show, setShow] = useState(true);

  const generate = () => {
    const num = generateNums(numQuantity);
    const numStringify = num.join('');
    setNumbers(numStringify);
    setShow(true);
    numsRef.current.focus();
  };

  const checkCorrectness = () => {
    if (numsRef.current.value === numbers) setNumQuantity(numQuantity + 1);
    else setNumQuantity(numQuantity - 2);

    generate();
    numsRef.current.value = '';
    setShow(true);
  };

  const handleChange = () => {
    setShow(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      console.log('numQuantity', numQuantity);
    }, (numQuantity * 1, 7) * 1000);

    return () => clearTimeout(timeout);
  }, [numQuantity]);

  return (
    <div className={styles['game-container']}>
      <button
        onClick={generate}
        type="button"
        className={styles.button}
      >
        Start
      </button>
      {
        show && <p>{numbers}</p>
      }
      <input
        type="number"
        placeholder="answer"
        className={styles['input-label']}
        ref={numsRef}
        onChange={handleChange}
      />
      <button
        type="button"
        className={styles.button}
        onClick={checkCorrectness}
      >
        Submit

      </button>
    </div>
  );
}

export default ShortMemoryQuiz;
