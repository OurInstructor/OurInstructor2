import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './StudentSidebar.css'



const StudentSidebar = () => {
    const [isDiv, setDiv] = useState(true);
    const toggleSidebar = () => {
       setDiv(!isDiv);
    }
  return (
    <div>
      <button className="sidebar" onClick={toggleSidebar}><ion-icon className="lines" name="menu-outline"></ion-icon></button>
    
      {isDiv === true ? (
        <div className='SideBarColumn beforeCollapse'>
            <ul style={{listStyleType:"none"}}>
                <li><Link className='SideItems'>Home</Link></li>
                <li><Link className='SideItems'>Student</Link></li>
                <li><Link className='SideItems'>Teacher</Link></li>
            </ul> 
        </div>
      ) : (
        <div className='SideBarColumn afterCollapse'>
          <ion-icon name="home-outline"></ion-icon><br/>
          <ion-icon name="book-outline"></ion-icon><br/>
          <ion-icon name="person-circle-outline"></ion-icon>
        </div>
      )}
    </div>
  )
}

export default StudentSidebar
