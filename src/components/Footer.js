import React from 'react';
import './styles/Footer.css';

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
                    </div>    
                 </div>       
            </footer>
        </div>
    )
}
