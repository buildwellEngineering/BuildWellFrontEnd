import React, { useState } from 'react';
import useAxiosInstance from '../../axiosInstance/AxiosInstance';

const Account = () => {
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const axiosInstance = useAxiosInstance();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
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
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                            {showCurrentPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div>
                        <label>New Password:</label>
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                            {showNewPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <button type="submit" className='admin-btn p-2 my-2'>Change Password</button>
                    </div>
                </form>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Account;
