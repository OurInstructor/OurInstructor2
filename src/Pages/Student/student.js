import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './student.css'
import StudentSidebar from '../../components/Sidebar/StudentSidebar';

const Student = () => {

  fetch('https://ourinstructor.pythonanywhere.com/teacher/') // Replace with your API endpoint URL
  .then(response => response.json())
  .then(data => {
    console.log(data); // Process the retrieved data as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
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
