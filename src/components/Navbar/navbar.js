import "./navbar.css"
import { Link } from "react-router-dom"
import logo from "../../Assets/logo.png"
import React, { useState } from 'react';


const Navbar = () => {
  const [isProfile , setProfile] = useState(false);

  const ProfileButton = () => {
    setProfile(!isProfile);
  }
  const user = localStorage.getItem('refresh');
  const name = localStorage.getItem('profile');
  const role = localStorage.getItem('role');
  const logout = () => {
    localStorage.removeItem('refresh');
    localStorage.removeItem('profile');
    localStorage.removeItem('role');
    window.location.reload();
  };

  return (
    <div className="navbarh">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" width={"40px"} height={"40px"} />
          </Link>
          { user === null ? (
            <div>
              <Link to="/" className="nav-item nav-btn">Ourinstructor</Link>
            </div>
          ):(
            <div>
              {role === 'student' && 
                 <Link to="/student" className="nav-item nav-btn">Ourinstructor</Link>
              }           
              { role === 'teacher' && 
                 <Link to="/teacher" className="nav-item nav-btn">Ourinstructor</Link>
              }
            </div>
          )}
        </div>
        <div className="navbar-right">
          {user === null ? (
            <Link to="/login" className="nav-item nav-btn log">
              Login
            </Link>
          ) : (
            <div className="right">
              <div>
                <button onClick={ProfileButton} style={{backgroundColor: 'black' ,width:'auto',padding: '10px',color: 'white',borderRadius: '30%'}}>
                    {name.toUpperCase()} 
                </button>
                { isProfile && (
                  <div className="Name">
                    <Link className="NameItem" to="/Profile">Profile</Link><br/>
                    <Link className="NameItem" to="/" onClick={logout}>Log-Out</Link>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </nav>
    </div>
  );
};


export default Navbar
