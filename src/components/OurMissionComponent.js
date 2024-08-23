

import React from 'react';
import './styles/OurMissionComponent.css';

export default function OurMissionComponent(props) {
    const { media, ourMissionPara, ourTechnologiesPara } = props;

    return (
        <div id="OurMission" className="scroll-section">
            <div className="ourMission">
            <div className="background-image" style={{ backgroundImage: `url(${media})` }}></div>
            <section className="our-mission-content py-lg-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 px-xl-5 py-sm-3 py-5">
                            <h1 className="our-mission-title">OUR MISSION</h1>
                            <div className="ourMissionLine mb-5"></div>
                            <p className="mt-3 ">{ourMissionPara}</p>
                            <br />
                            <br />
                            <h1 className="our-mission-title">OUR TECHNOLOGIES</h1>
                            <div className="ourMissionLine mb-5"></div>
                            <p className="mt-3 ">{ourTechnologiesPara}</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}
