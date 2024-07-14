import React, { useEffect } from 'react';
// import './styles/Admin.css';
import AdminDashboard from './AdminDashboard';
// import AC from '../../assests/Images/adminPanel/loginPage.svg';
// import tools from '../../assests/Images/adminPanel/tools.jpg';
import { useSelector } from 'react-redux';
// import { login } from '../../store/Slices/LoginStatusSlice';
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


