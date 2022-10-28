import React, { useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from './context/main-context';
import ProfilePage from './pages/profile-page';

import AuthLayout from './pages/auth/components/auth-layout';
import LoginPage from './pages/auth/login-page';
import RegisterPage from './pages/auth/register-page';
import CreatePostPage from './pages/create-post-page';
import AllPostsPage from './pages/all-posts-page';
import SinglePostPage from './pages/single-post-page';
import Toolbar from './components/toolbar';



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
          <Toolbar />
          <Routes>
            <Route path='auth' element={<AuthLayout />}>
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
            </Route>

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/create' element={<CreatePostPage />} />
            <Route path='/allPosts' element={<AllPostsPage />} />
            <Route path='/singlePost' element={<SinglePostPage />} />

          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
