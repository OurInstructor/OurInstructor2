import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './student.css'
import StudentSidebar from '../../components/Sidebar/StudentSidebar';
import StudentData from './studentData';
import { useState } from 'react';


const Student = () => {
const [data, setData] = useState([]);

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.get('https://ourinstructor.pythonanywhere.com/teacher')
  .then(response => {
    console.log(response.data);
    setData(response.data); 
  })
  .catch(async (error) => {
    console.log('a') 
    console.error('Error:', error);
    const originalConfig = error.config;

    if (
      originalConfig.url !== 'https://ourinstructor.pythonanywhere.com/login' &&
      error.response &&
      error.response.status === 401 &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        const refreshResponse = await refreshToken(); // Call the separate async function
        const access = refreshResponse.data.access;
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refreshResponse.data.refresh);

        axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + access;
        window.location.reload();
        return axiosInstance(originalConfig);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  });

async function refreshToken() {
  try {
    const refreshResponse = await axiosInstance.post('https://ourinstructor.pythonanywhere.com/refresh', {
      refresh: localStorage.getItem('refresh')
    })
    window.location.reload();
    return refreshResponse;
  } catch (error) {
    return Promise.reject(error);
  }
}


  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('refresh'))
    {
      navigate('/')
    }
  })

  return (
    <div className='StudentBody'>
      <StudentSidebar />
        <div className='mid'>
          {data.map((item, index) => (
            <StudentData key={index} student={item} />
          ))}
        </div>
    </div>   
  )
}

export default Student
