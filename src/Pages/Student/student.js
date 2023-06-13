import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './student.css'
import StudentSidebar from '../../components/Sidebar/StudentSidebar';

const Student = () => {
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('refresh'))
    {
      navigate('/')
    }
  })
  return (
    <div className='body'>
       <StudentSidebar />
    
    
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
