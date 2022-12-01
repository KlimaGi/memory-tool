/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styles from './animated-toggle-content.module.scss';

function AnimatedToggleContent() {
  const [active, setActive] = useState(false);
  const classActive = active ? `${styles.active}` : '';
  const classBox = active ? `${styles.box}` : '';

  return (
    <div className={styles.navigation}>

      <div
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
        className={`${styles['menu-toggle']} ${classActive}`}
        role="button"
        tabIndex="0"
      />
      <div className={`${styles.menu} ${classBox}`}>
        <p>Hours are between 1 and 13.</p>
        <p>There is no 00:20, instead it is 12:20.</p>
        <p>There is no 13:20, instead it is 01:20.</p>
      </div>
    </div>
  );
}

export default AnimatedToggleContent;
