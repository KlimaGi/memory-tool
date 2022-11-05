import React, { useRef, useEffect, useContext } from 'react';
import { get, post } from '../../../../plugins/http';
import MainContext from '../../../../context/main-context';

function Profile() {
  const { user, setUser } = useContext(MainContext);
  const photoRef = useRef();

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
  };

  return (
    <div>
      profile
      {
        user
        && (
          <div className="d-flex fd-column side">
            <img src={user.photo} alt="" className="profile-img" />
            <button onClick={changePhoto} type="button">change photo</button>
            <input ref={photoRef} type="text" placeholder="photo url" />
          </div>
        )
      }
    </div>
  );
}

export default Profile;
