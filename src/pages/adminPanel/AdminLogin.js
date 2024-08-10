



// import React, { useState } from 'react';
// import './styles/Admin.css';
// import AC from '../../assests/Images/adminPanel/loginPage.svg';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { login } from '../../store/slices/LoginStatusSlice';
// import { useNavigate } from 'react-router-dom';

// export default function AdminLogin() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   });

//   const [otp, setOtp] = useState(''); // State for OTP
//   const [showOtpInput, setShowOtpInput] = useState(false); // State to toggle OTP input visibility
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       // const response = await axios.post(
//       //   'https://buildwell-engineering.vercel.app/adminLogin/login', 
//       //   data
//       // );
//       // const response = await axios.post(
//       //   'https://buildwell-engineering.vercel.app/adminLogin/login', 
//       //   data
//       // );

//       const response = await axios.post(
//         'http://localhost:7777/adminLogin/login', 
//         data
//       );

//       console.log("Form data submitted successfully:", response.data);
//       if (response.data.msg === 'OTP sent to your email. Please verify to continue.') {
//         setShowOtpInput(true);
//         setErrorMessage('')
//       } 
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrorMessage('Invalid email or password.');
//     }
//   };

//   const handleOtpSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         'https://buildwell-engineering.vercel.app/adminLogin/verifyOtp', 
//         { email: data.email, otp }
//       );

//       console.log("OTP verified successfully:", response.data);
//       dispatch(login());
//       localStorage.setItem('token', response.data.accessToken);
//       setErrorMessage('')
//       navigate('/adminPanel');
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setErrorMessage('Invalid or expired OTP.');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   return (
//     <div className="admin-panel-container d-flex">
//       <div className="login-section col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
//         <h1 className="mb-4">Admin Login</h1>
//         {showOtpInput ? (
//           <form className="w-75" onSubmit={handleOtpSubmit}>
//             <div className="mb-3">
//               <label htmlFor="otp" className="form-label">Enter OTP</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="otp"
//                 name="otp"
//                 value={otp}
//                 onChange={handleOtpChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Verify OTP</button>
//             {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//           </form>
//         ) : (
//           <form className="w-75" onSubmit={handleLogin}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 aria-describedby="emailHelp"
//                 required
//               />
//             </div>
//             <div className="mb-3 position-relative">
//               <label htmlFor="password" className="form-label">Password</label>
//               <div className="input-group flex-nowrap">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Password"
//                   aria-label="Password"
//                   aria-describedby="addon-wrapping"
//                   name="password"
//                   value={data.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <span className="input-group-text" id="addon-wrapping">
//                   <button
//                     type="button"
//                     className="btn btn-link show-hide-btn p-0 m-0 text-decoration-none"
//                     onClick={togglePasswordVisibility}
//                     style={{ lineHeight: '100%' }}
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </span>
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Login</button>
//             {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//           </form>
//         )}
//         <div className="login-rules mt-4 text-center">
//           <p>Maximum 5 attempts available in 30 mins</p>
//           <p>A verification code will be sent to registered email for login</p>
//         </div>
//       </div>
//       <div className="image-section col-lg-6 col-md-12 d-none d-lg-block">
//         <div className="login-image-div d-flex justify-content-center flex-column py-5">
//           <img src={AC} alt="Construction Company" className="img-fluid" />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './styles/Admin.css';
import AC from '../../assests/Images/adminPanel/loginPage.svg'; // Fixed the path typo
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/slices/LoginStatusSlice';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [otp, setOtp] = useState(''); // State for OTP
  const [showOtpInput, setShowOtpInput] = useState(false); // State to toggle OTP input visibility
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:7777/adminLogin/login', 
        data
      );

      console.log("Form data submitted successfully:", response.data);
      if (response.data.msg === 'OTP sent to your email. Please verify to continue.') {
        setShowOtpInput(true);
        setErrorMessage('');
      } 
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage('Invalid email or password.');
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://buildwell-engineering.vercel.app/adminLogin/verifyOtp', 
        { email: data.email, otp }
      );

      console.log("OTP verified successfully:", response.data);
      dispatch(login());
      document.cookie = `accessToken=${response.data.accessToken}; path=/;`;
      setErrorMessage('');
      navigate('/adminPanel');
    } catch (error) {
      console.error("Error verifying OTP:", error);
      
      setErrorMessage('Invalid or expired OTP.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="admin-panel-container d-flex">
      <div className="login-section col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-4">Admin Login</h1>
        {showOtpInput ? (
          <form className="w-75" onSubmit={handleOtpSubmit}>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Verify OTP</button>
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </form>
        ) : (
          <form className="w-75" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group flex-nowrap">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
                <span className="input-group-text" id="addon-wrapping">
                  <button
                    type="button"
                    className="btn btn-link show-hide-btn p-0 m-0 text-decoration-none"
                    onClick={togglePasswordVisibility}
                    style={{ lineHeight: '100%' }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          </form>
        )}
        <div className="login-rules mt-4 text-center">
          <p>A verification code will be sent to registered email for login</p>
        </div>
      </div>
      <div className="image-section col-lg-6 col-md-12 d-none d-lg-block">
        <div className="login-image-div d-flex justify-content-center flex-column py-5">
          <img src={AC} alt="Construction Company" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
