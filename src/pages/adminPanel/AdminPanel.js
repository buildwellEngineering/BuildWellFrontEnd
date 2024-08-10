import React, { useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {

  const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  console.log(loginStatus)
  const navigate = useNavigate();

  useEffect(()=>{
    if (!loginStatus) {
      navigate('/adminLogin');
    }
  },[]); // [loginStatus, navigate]

  return (

    <div>
        <AdminDashboard />
    </div>

  )
}


