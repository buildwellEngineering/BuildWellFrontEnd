import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <div >
            <footer className='py-3' >
                <div className='container py-3' style={{ borderTop: '1px solid silver' }}>
                    <div className='row px-xl-5'>
                        <div className='col-12 col-lg-6'>
                            <p>
                                <b>©</b> 2024 by BuildWell Constructions.
                            </p>
                        </div>

                        <div aria-label="breadcrumb" className='col-12 col-lg-6 d-flex justify-content-end' >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/" className='text-decoration-none '>Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/allProjects" className='text-decoration-none'>All Projects</Link></li>
                            </ol>
                        </div>
                    </div>    
                 </div>       
            </footer>
        </div>
    )
}
