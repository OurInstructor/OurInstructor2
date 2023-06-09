import "./navbar.css"
import { Link } from "react-router-dom"
import logo from "../../Assets/logo.png"
import React from 'react';


const Navbar = () => {
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
          <Link to="/" className="nav-item nav-btn">
            Ourinstructor
          </Link>
        </div>
        <div className="navbar-right">
          {role === 'student' && 
             <Link to="/student" className="nav-item nav-btn">Student</Link>
          }           
          { role === 'teacher' && 
             <Link to="/teacher" className="nav-item nav-btn">Teacher</Link>
           }
          {user === null ? (
            <Link to="/login" className="nav-item nav-btn log">
              Login
            </Link>
          ) : (
            <div className="right">
              <Link to="/" onClick={logout} className="nav-item nav-btn">
                Log-Out
              </Link>
              <p
                style={{
                  backgroundColor: 'black',
                  width: '10px',
                  padding: '10px',
                  color: 'white',
                  borderRadius: '100%',
                }}
              >
                <Link
                  to="/Profile"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {name.charAt(0).toUpperCase()}
                </Link>
              </p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};


export default Navbar
