// import React from 'react';
// import './styles/OurMissionComponent.css'; // Ensure this CSS file is imported correctly and styled accordingly

// export default function OurMissionComponent(props) {
//     const { media, ourMissionPara, ourTechnologiesPara } = props;

//     return (
//         <div id="OurMission" className="scroll-section">
//             <section className="our-mission py-lg-5">
//                 <div className="container py-5">
//                     <div className="row align-items-center">
//                         <div className="col-12 d-lg-none">
//                             <img src={media} className="img-fluid" alt="Our Mission" />
//                         </div>
//                         <div className="col-12 col-lg-6 px-xl-5">
//                             <h1 className="our-mission-title" style={{ fontSize: '2.5rem', color: '#00365E' }}>OUR MISSION</h1>
//                             <div className="ourMissionLine mb-5"></div>
//                             <p className="mt-3 fw-light">{ourMissionPara}</p>
//                             <br />
//                             <br />
//                             <h1 className="our-mission-title" style={{ fontSize: '2.5rem', color: '#00365E' }}>OUR TECHNOLOGIES</h1>
//                             <div className="ourMissionLine mb-5"></div>
//                             <p className="mt-3 fw-light">{ourTechnologiesPara}</p>
//                         </div>
//                         <div className="col-lg-6 d-none d-lg-block">
//                             <div className="background-image" style={{ backgroundImage: `url(${media})` }}></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }



// import React from 'react';
// import './styles/OurMissionComponent.css'; // Ensure this CSS file is created and styled accordingly

// export default function OurMissionComponent(props) {
//     // const { image, ourMissionPara, ourTechnologiesPara } = props;
//     const {media, ourMissionPara, ourTechnologiesPara} = props;

//     return (
//         <div id="OurMission" className="scroll-section">
//             <section className="our-mission py-lg-5">
//                 <div className="container py-5">
//                     <div className="row align-items-center">
//                         <div className="col-12 d-lg-none">
//                             <img src={media} className="img-fluid" alt="Our Mission" />
//                         </div>
//                         <div className="col-12 col-lg-6 px-xl-5 py-sm-3 py-5">
//                             <h1 style={{ fontSize: '2.5rem', color: '#00365E' }}>OUR MISSION</h1>
//                             <div className="ourMissionLine mb-5"></div>
//                             <p className="mt-3 fw-light">{ourMissionPara}</p>
//                             <br />
//                             <br />
//                             <h1 style={{ fontSize: '2.5rem', color: '#00365E' }}>OUR TECHNOLOGIES</h1>
//                             <div className="ourMissionLine mb-5"></div>
//                             <p className="mt-3 fw-light">{ourTechnologiesPara}</p>
//                         </div>
//                         <div className="col-lg-6 d-none d-lg-block">
//                             <div className="background-image" style={{ backgroundImage: `url(${media})` }}></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }



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
                        {/* <div className="col-12 d-lg-none">
                            <img src={media} className="img-fluid" alt="Our Mission" />
                        </div> */}
                        <div className="col-12 col-lg-6 px-xl-5 py-sm-3 py-5">
                            <h1 className="our-mission-title">OUR MISSION</h1>
                            <div className="ourMissionLine mb-5"></div>
                            <p className="mt-3 fw-light">{ourMissionPara}</p>
                            <br />
                            <br />
                            <h1 className="our-mission-title">OUR TECHNOLOGIES</h1>
                            <div className="ourMissionLine mb-5"></div>
                            <p className="mt-3 fw-light">{ourTechnologiesPara}</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            {/* Placeholder for spacing */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}
