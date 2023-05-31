import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Teacher from './Pages/Teacher/teacher';
import Student from './Pages/Student/student';
import Profile from './Pages/Profile/profile';


const AllRoutes = () => {
  return (
    <Routes>
       <Route path ='/' element={<Home/>} />   
       <Route path ='/login' element={<Login/>}  />
       <Route path ='/teacher' element={<Teacher/>}  />
       <Route path ='/student' element={<Student/>}  />
       <Route path ='/profile' element={<Profile/>}  />
    </Routes>
  )
}

export default AllRoutes
