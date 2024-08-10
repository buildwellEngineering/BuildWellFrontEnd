// import React from 'react';
// import './styles/Counter.css';

// export default function Counter() {
//     return (
//         <div>
//             <section className="Counter py-5" style={{ background: '#EDCD1F' }}>
//             <div className="container">
//                 <div className="row px-3 d-flex justify-content-center">
//                     <div className="establish col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
//                         <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
//                             2010
//                         </h2>
//                         <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
//                             Year<br />Established
//                         </h4>
//                     </div>
//                     <div className="projects col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
//                         <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
//                             206
//                         </h2>
//                         <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
//                             Projects<br />Completed
//                         </h4>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>
//     )
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Counter.css';

export default function Counter() {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        // Fetch achievements from the backend when the component mounts
        axios.get('http://localhost:7777/homePage/getData/counter')
            .then(response => setAchievements(response.data))
            .catch(error => console.error('Error fetching achievements:', error));
    }, []);

    return (
        <div>
            <section className="Counter py-5" style={{ background: '#EDCD1F' }}>
                <div className="container">
                    <div className="row px-3 d-flex justify-content-center">
                        {achievements.map(achievement => (
                            <div key={achievement._id} className="col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                                <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                                    {achievement.value}
                                </h2>
                                <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                                    {achievement.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
