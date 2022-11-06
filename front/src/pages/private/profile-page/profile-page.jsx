import React from 'react';
import Profile from './components/profile';
import styles from './components/profile.module.scss';

function ProfilePage() {
  return (
    <div className={styles.side}>

      <Profile />

    </div>
  );
}

export default ProfilePage;
