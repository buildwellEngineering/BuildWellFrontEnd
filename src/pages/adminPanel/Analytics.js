// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function Analytics() {
//     const [data, setData] = useState({
//         userCount: 0,
//         projectCount: 0,
//         messageCount: 0,
//         achievements: []
//     });

//     useEffect(() => {
//         const fetchAnalyticsData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:7777/analytics/getAnalyticsData',{withCredentials:true});
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching analytics data', error);
//             }
//         };

//         fetchAnalyticsData();
//     }, []);

//     return (
//         <div className='analytics'>
//             <h1 className='text-center' style={{color:'#00365E'}}>Analytics</h1>

//             <div className='container'>
//                 <div className='row d-flex justify-content-center'>
//                 <div className='col-12 col-md-6' >
//                     <Link to='/adminPanel/messages' className='text-decoration-none'>
//                     <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{backgroundColor:'#00365E',color:'#EDCD1F', fontSize:'1.5rem', boxShadow:'0 0 6px grey'}}>
//                     <h1>
//                         {data.messageCount}
//                     </h1>
//                     <p>Messages</p>
//                     </div>
//                     </Link>
//                 </div>

//                 <div className='col-12 col-md-6' >
//                 <Link to='/adminPanel/projects' className='text-decoration-none'>
//                     <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{backgroundColor:'#00365E',color:'#EDCD1F', fontSize:'1.5rem', boxShadow:'0 0 6px grey'}}>
//                     <h1>
//                         {data.projectCount}
//                     </h1>
//                     <p>Projects Completed</p>
//                     </div>
//                     </Link>
//                 </div>

//                 <div className='col-12 col-md-6' >
//                     <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{backgroundColor:'#00365E',color:'#EDCD1F', fontSize:'1.5rem', boxShadow:'0 0 6px grey'}}>
//                     <h1>
//                         {data.userCount}
//                     </h1>
//                     <p>Admins</p>
//                     </div>
//                 </div>

//                     {data.achievements.map((achievement, index) => (
//                         <div key={index} className='col-12 col-md-6'>
//                             <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem', boxShadow:'0 0 6px grey'}}>
//                             <h1>{achievement.value}</h1>
//                             <p>{achievement.name}</p>
//                             </div>
//                         </div>
//                     ))}
                
//             </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import useAxiosInstance from '../../axiosInstance/AxiosInstance';

export default function Analytics() {

    const axiosInstance = useAxiosInstance();
    
    const [data, setData] = useState({
        userCount: 0,
        projectCount: 0,
        messageCount: 0,
        achievements: []
    });

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                // const response = await axios.get('http://localhost:7777/analytics/getAnalyticsData', { withCredentials: true });
                const response = await axiosInstance.get('/analytics/getAnalyticsData');

                setData(response.data);
            } catch (error) {
                
                    console.error('Error fetching analytics data', error);
                
            }
        };

        fetchAnalyticsData();
    }, []);

    return (
        <div className='analytics'>
            <h1 className='text-center' style={{ color: '#00365E' }}>Analytics</h1>

            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-6'>
                        <Link to='/adminPanel/messages' className='text-decoration-none'>
                            <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem', boxShadow: '0 0 6px grey' }}>
                                <h1>{data.messageCount}</h1>
                                <p>Messages</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-12 col-md-6'>
                        <Link to='/adminPanel/projects' className='text-decoration-none'>
                            <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem', boxShadow: '0 0 6px grey' }}>
                                <h1>{data.projectCount}</h1>
                                <p>Projects Completed</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem', boxShadow: '0 0 6px grey' }}>
                            <h1>{data.userCount}</h1>
                            <p>Admins</p>
                        </div>
                    </div>

                    {data.achievements.map((achievement, index) => (
                        <div key={index} className='col-12 col-md-6'>
                            <div className='d-flex justify-content-center align-items-center flex-column m-5 p-5 rounded' style={{ backgroundColor: '#00365E', color: '#EDCD1F', fontSize: '1.5rem', boxShadow: '0 0 6px grey' }}>
                                <h1>{achievement.value}</h1>
                                <p>{achievement.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
