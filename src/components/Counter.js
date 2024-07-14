import React from 'react';
import './styles/Counter.css';

export default function Counter() {
    return (
        <div>
            <section className="Counter py-5" style={{ background: '#EDCD1F' }}>
            <div className="container">
                <div className="row px-3 d-flex justify-content-center">
                    <div className="establish col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                        <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            2010
                        </h2>
                        <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            Year<br />Established
                        </h4>
                    </div>
                    <div className="projects col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                        <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            206
                        </h2>
                        <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            Projects<br />Completed
                        </h4>
                    </div>
                    {/* <div className="contracters col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                        <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            870
                        </h2>
                        <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                            Contracters<br />Appointed
                        </h4>

                        --- maybe repeat clients

                    </div> */}
                </div>
            </div>
        </section>
        </div>
    )
}
