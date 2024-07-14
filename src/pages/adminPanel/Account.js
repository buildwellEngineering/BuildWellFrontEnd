import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function Account() {

  // const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  // console.log(loginStatus)
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if (!loginStatus) {
  //     navigate('/adminLogin');
  //   }
  // },[]);
  return (
    <div className='p-4'>
      <h1>Account</h1>
      <p>Account content goes here...</p>
    </div>
  );
}
