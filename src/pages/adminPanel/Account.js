// import React, { useState } from 'react';
// import axios from 'axios';

// const Account = () => {
//     const [currentEmail, setCurrentEmail] = useState('');
//     const [currentPassword, setCurrentPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handleChangePassword = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:7777/adminLogin/changePassword', {
//                 currentEmail,
//                 currentPassword,
//                 newPassword
//             },{withCredentials:true});
//             setMessage(response.data.msg);
//             alert('Password Updated Successfully !!!')
//             setCurrentEmail('');
//             setCurrentPassword('');
//             setNewPassword('');
//         } catch (error) {
//             setMessage(error.response.data.error || 'An error occurred');
//         }
//     };


//     return (
//         <div className='p-4'>
            
//             <div>
//                 <h2>Change Password</h2>
//                 <form onSubmit={handleChangePassword}>
//                     <div>
//                         <label>Current Email:</label>
//                         <input
//                             type="email"
//                             value={currentEmail}
//                             onChange={(e) => setCurrentEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Current Password:</label>
//                         <input
//                             type="password"
//                             value={currentPassword}
//                             onChange={(e) => setCurrentPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>New Password:</label>
//                         <input
//                             type="password"
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className='admin-btn p-2'>Change Password</button>
//                 </form>
//             </div>

//             {/* <div>
//                 <h2>Add New Admin User</h2>
//                 <form onSubmit={handleAddAdmin}>
//                     <div>
//                         <label>Email:</label>
//                         <input
//                             type="email"
//                             value={newAdminEmail}
//                             onChange={(e) => setNewAdminEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input
//                             type="password"
//                             value={newAdminPassword}
//                             onChange={(e) => setNewAdminPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className='admin-btn p-2'>Add Admin User</button>
//                 </form>
//             </div> */}

//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default Account;



import React, { useState } from 'react';
import axios from 'axios';
import useAxiosInstance from '../../axiosInstance/AxiosInstance';

const Account = () => {
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const axiosInstance = useAxiosInstance();
 

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:7777/adminLogin/changePassword', {
            //     currentEmail,
            //     currentPassword,
            //     newPassword
            // }, { withCredentials: true });

            const response = await axiosInstance.post('/adminLogin/changePassword', {
                currentEmail,
                currentPassword,
                newPassword
            });
            
            setMessage(response.data.msg);
            alert('Password Updated Successfully !!!');
            setCurrentEmail('');
            setCurrentPassword('');
            setNewPassword('');
        } catch (error) {
           
                setMessage(error.response?.data?.error || 'An error occurred');

        }
    };

    return (
        <div className='p-4'>
            <div>
                <h2>Change Password</h2>
                <form onSubmit={handleChangePassword}>
                    <div>
                        <label>Current Email:</label>
                        <input
                            type="email"
                            value={currentEmail}
                            onChange={(e) => setCurrentEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Current Password:</label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>New Password:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='admin-btn p-2'>Change Password</button>
                </form>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Account;
