import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './teacher.css'

const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen) 
  }
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('refresh'))
    {
      navigate('/')
    }
  })

  

   

  return (
    <div>
      <button className="sidebar" onClick={toggleSidebar}><ion-icon className="lines" name="menu-outline"></ion-icon></button>
      {isOpen && (
        <div className="Sidebuttons">
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>Student</Link></li>
            <li><Link>Teacher</Link></li>
          </ul>
        </div>
      )}
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
      </div>
    </div>
  );
};

export default Teacher;
