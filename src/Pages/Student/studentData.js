import React from 'react'
import './student.css'
import slide1 from '../../Assets/S1.jpg';


const StudentData = ({student}) => {
  return (
    <div class="cardbody">
    <div className="card" >
        <p><b>Name: </b>{student.first_name} {student.last_name}</p>
        <p><b>Applicable for classes: </b>{student.classes}</p>
        <p><b>Email: </b>{student.email}</p>
        <p><b>Number: </b>{student.number}</p>
        <p><b>Subject: </b>{student.subject}</p>
      <div class="card__content">
        <img alt= "profile pic" src={slide1}/>  
        <a href="/student"  onClick={() => alert('Class booked')}>Book the Class</a>
      </div>
    </div>
  </div>
  )
}

export default StudentData
