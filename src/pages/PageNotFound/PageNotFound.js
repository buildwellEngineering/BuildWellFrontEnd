import React from 'react';
import './styles/PageNotFound.css';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
   const navigate = useNavigate();
   return (
      <div>
         <section className="error-area error-one">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-7 col-xl-8 col-lg-8">
                     <div className="error-content text-center" style={{ color: '#00365E' }}>
                        <span className="error-404 ">404</span>
                        <h5 className="sub-title">Page Not Found</h5>
                        <p className="text " style={{ fontSize: "1.3rem" }}>
                           Click on below button to navigate you to our Homepage
                        </p>
                        <div className="error-form">
                           <button type="button" className='btn shadow-lg py-3 px-5' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem' }} onClick={() => { navigate('/') }}>
                              Homepage
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
