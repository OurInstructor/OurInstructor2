import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       teacher
       <br/>
       <h1>Ourinstructor</h1>
         <p>We at OurInstructor are here for  Penetrating work culture in College Students. <br/>
         Bringing western students to work energy in our home country.</p>    
    </div>
  )
}

export default Teacher
