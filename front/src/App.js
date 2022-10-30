import React, { useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from './context/main-context';
import ProfilePage from './pages//private/profile-page';

import AuthLayout from './pages/auth/components/auth-layout';
import LoginPage from './pages/auth/login-page';
import RegisterPage from './pages/auth/register-page';

import PrivateLayout from './pages/private/components/private-layout';
import CreatePostPage from './pages/private/create-post-page';
import AllPostsPage from './pages/private/all-posts-page';
import SinglePostPage from './pages/private/single-post-page';

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const states = {
    posts,
    setPosts,
    user,
    setUser
  }

  return (
    <div>
      <MainContext.Provider value={states}>

        <BrowserRouter>

          <Routes>
            <Route path='auth' element={<AuthLayout />}>
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
            </Route>

            <Route path='dashboard' element={<PrivateLayout />} >

              <Route path='allPosts' element={<AllPostsPage />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='create' element={<CreatePostPage />} />
              <Route path='singlePost' element={<SinglePostPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
