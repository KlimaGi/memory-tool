import React, { useState } from 'react';
import styles from './animated-toggle-content.module.scss';

function AnimatedToggleContent() {
  const [active, setActive] = useState(false);
  const classActive = active ? `${styles.active}` : '';

  return (
    <div className={styles.navigation}>

      <div
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
        className={`${styles['menu-toggle']} ${classActive}`}
        role="button"
        tabIndex="0"
      >
        <div className="menu" />
      </div>
    </div>
  );
}

export default AnimatedToggleContent;
