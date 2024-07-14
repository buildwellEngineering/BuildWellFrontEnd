import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AllProjects from './pages/allProjects/AllProjects';
import AdminPanel from './pages/adminPanel/AdminPanel';
import AdminLogin from './pages/adminPanel/AdminLogin';
import PageNotFound from './pages/PageNotFound/PageNotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/allProjects' element={<AllProjects />} />
        <Route path='/adminPanel/*' element={<AdminPanel />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='*' element={<PageNotFound />} />
       </Routes>
    </BrowserRouter>
  );
}

