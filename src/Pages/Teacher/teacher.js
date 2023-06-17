import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './teacher.css'
import TeacherSidebar from '../../components/Sidebar/TeacherSidebar';

const Teacher = () => {
  
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('refresh'))
    {
      navigate('/')
    }
  })

  return (
    <div>
      <TeacherSidebar/>
      <div className='TeacherBody'>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      <div>Teacher</div>
      </div>
    </div>
  );
};

export default Teacher;
