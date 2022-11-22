/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import MainContext from './context/main-context';
import { get } from './plugins/http';
import './styles/index.scss';

import PublicPage from './pages/public-page';

import AuthLayout from './pages/auth/components/auth-layout';
import LoginPage from './pages/auth/login-page';
import RegisterPage from './pages/auth/register-page';

import PrivateLayout from './pages/private/common-components/private-layout';
import ProfilePage from './pages/private/profile-page/profile-page';
import CreateTopicPage from './pages/private/create-topic-page';
import AllTopicsPage from './pages/private/all-topics-page/all-topics-page';
import TodayPage from './pages/private/today-page';
import SingleTopicPage from './pages/private/single-topic-page/single-topic-page';

function App() {
  const [topics, setTopics] = useState([]);
  const [user, setUser] = useState(null);

  const states = {
    topics,
    setTopics,
    user,
    setUser,
  };

  useEffect(() => {
    const allTopics = async () => {
      const secret = localStorage.getItem('secret');
      const res = await get(`allTopics/${secret}`);
      if (!res.error) setTopics(res.data);
      if (res.error) console.log('there is no topics');
    };
    allTopics();
  }, []);

  return (
    <div>
      <MainContext.Provider value={states}>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<PublicPage />} />

            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            <Route path="dashboard" element={<PrivateLayout />}>
              <Route path="today" element={<TodayPage />} />
              <Route path="allTopics" element={<AllTopicsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="create" element={<CreateTopicPage />} />
              <Route path="singleTopic/:id" element={<SingleTopicPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
