import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './student.css'

const Student = () => {
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
    <div className='body'>
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
      <div className='StudentBody'>
        Student<br/>
        Student<br/>
        Student<br/>
        Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>Student<br/>
      </div>
 </div>   
  )
}

export default Student
