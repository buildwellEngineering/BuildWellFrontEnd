import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/LoginStatusSlice.js'; // Adjust the import path as needed

const useAxiosInstance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    //baseURL: 'https://buildwell-engineering.vercel.app',
    baseURL: 'http://localhost:7777', // Your API base URL 
    withCredentials: true,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        dispatch(logout(false));
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
