import React, { useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {

  const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  const navigate = useNavigate();

  useEffect(()=>{
    if (!loginStatus) {
      navigate('/adminLogin');
    }
  },[]); 

  return (

    <div>
        <AdminDashboard />
    </div>

  )
}


