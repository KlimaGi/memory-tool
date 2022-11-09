import React, {
  useRef, useEffect, useContext, useState,
} from 'react';
import { get, post } from '../../../../plugins/http';
import MainContext from '../../../../context/main-context';
import Button from '../../common-components/button';
import ProgressBar from './progress-bar';
import styles from './profile.module.scss';

function Profile() {
  const { user, setUser } = useContext(MainContext);
  const photoRef = useRef();
  const [show, setShow] = useState(true);
  const arr = [9, 21, 23, 40, 10];

  useEffect(() => {
    const userData = async () => {
      const secretI = localStorage.getItem('secret');
      const res = await get(`userProfile/${secretI}`);
      console.log('res-profile', res);
      if (!res.error) setUser(res.data);
    };
    userData();
  }, []);

  const changePhoto = async () => {
    const photoData = {
      secret: localStorage.getItem('secret'),
      photo: photoRef.current.value,
    };

    const res = await post('setPhoto', photoData);
    if (!res.error) {
      const userCopy = { ...user };
      userCopy.photo = res.data.photo;
      setUser(userCopy);
    }
    console.log('res-front', res);
    setShow(!show);
  };

  const handleShow = () => setShow(!show);

  return (
    <div className={styles.main}>

      <section className={`d-flex fd-column ${styles.side}`}>
        {
          user && (<img src={user.photo} alt="" className={styles['profile-img']} />)
        }

        <div className={styles['show-container']}>
          <input
            onClick={handleShow}
            type="button"
            className={styles['edit-btn']}
          />

          {
            !show && (
              <>
                <input
                  ref={photoRef}
                  type="text"
                  placeholder="add photo url"
                  className={styles.input}
                />
                <Button
                  type="button"
                  func={changePhoto}
                  text="Submit"
                />
              </>
            )
          }
        </div>
      </section>

      <section className={styles['bar-side']}>
        {
          arr.map((num, index) => <ProgressBar progress={index} quantity={num} key={num} />)
        }
      </section>
    </div>
  );
}

export default Profile;
