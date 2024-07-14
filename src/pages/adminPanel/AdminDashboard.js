import React,{useEffect} from 'react';
import Analytics from './Analytics';
import Content from './Content';
import Messages from './Messages';
import Projects from './Projects';
import Account from './Account';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../assests/Images/logo1.png';
import './styles/AdminDashboard.css';
import logo123 from '../../assests/Images/download.png';
import { useSelector } from 'react-redux';
// import { login } from '../../store/Slices/LoginStatusSlice';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  console.log(loginStatus)

  useEffect(()=>{
    if (!loginStatus) {
      navigate('/adminLogin');
    }
  },[]); 

  return (
    <>
    <div id='AdminDashboard' className='container-fluid d-flex'>
      <div className='row' style={{ height: '100px',width:'100vw'}}>
        <div className='col-auto'>
          <button className="btn no-focus-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" style={{ padding: '0px', margin: '0px' }}>
            <FontAwesomeIcon icon={faBars} style={{ paddingLeft: '25px', paddingTop: '25px', height: '50px', width: '50px' }} />
          </button>
        </div>
        <div className="offcanvas offcanvas-start py-3" id="demo" style={{background:'#EDCD1F'}}>
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
            <img src={logo123} className='img-fluid' alt='' style={{width:'250px',height:'70px'}} onClick={()=>{navigate('/adminPanel')}} />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body pt-5">
            <ul className='list-unstyled d-flex flex-column justify-content-center'>
              <li className='border-bottom border-black py-1'>
                  <Link to='/adminPanel/messages' className='text-decoration-none' style={{color:'#00365E',fontSize:'30px',fontFamily:'Georgia'}}>
                    Messages
                  </Link>
              </li>
              <li className='border-bottom border-black py-1'>
                  <Link to='/adminPanel/projects' className='text-decoration-none' style={{color:'#00365E',fontSize:'30px',fontFamily:'Georgia'}}>
                    Projects
                  </Link>
              </li>
              <li className='border-bottom border-black py-1'>
                  <Link to='/adminPanel/content' className='text-decoration-none' style={{color:'#00365E',fontSize:'30px',fontFamily:'Georgia'}}>
                    Content
                  </Link>
              </li>
              <li className='border-bottom border-black py-1'>
                  <Link to='/adminPanel/account' className='text-decoration-none' style={{color:'#00365E',fontSize:'30px',fontFamily:'Georgia'}}>
                    Account
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <Routes>
          <Route path='/' element={<Analytics />} />  
          {/* <Route path='/analytics' element={<Analytics />} /> */}
           <Route path='/messages' element={<Messages />} />
          <Route path='/content' element={<Content />} />
          <Route path='/account' element={<Account />} />
          <Route path='/projects' element={<Projects />} />
          
        </Routes>
        {/* <Analytics /> */}
      </div>
    </div>
    </>
  )
}
