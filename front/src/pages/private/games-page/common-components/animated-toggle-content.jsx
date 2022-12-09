/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styles from './animated-toggle-content.module.scss';

function AnimatedToggleContent({ rulesText }) {
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

        {rulesText.map((rule) => <p>{rule}</p>)}

      </div>
    </div>
  );
}

export default AnimatedToggleContent;
