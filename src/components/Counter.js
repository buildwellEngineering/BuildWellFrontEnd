


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Counter.css';

export default function Counter() {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        // Fetch achievements from the backend when the component mounts
        axios.get(`https://buildwell-engineering.vercel.app/homePage/getData/counter`)
            .then(response => {
                const data = response.data;
                // Ensure the data is an array
                if (Array.isArray(data)) {
                    setAchievements(data);
                } else {
                    console.error('Expected array but got:', data);
                    setAchievements([]);
                }
            })
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
