import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import bi from '../../Assets/S4.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();



 

  

    const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

      fetch('https://ourinstructor.pythonanywhere.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('access' , data.access);
        localStorage.setItem('refresh', data.refresh)
        localStorage.setItem('profile' , data.profile.username)
        localStorage.setItem('role' , data.profile.role)
        if(data.profile.role === "teacher")
        navigate('/teacher')
        else if(data.profile.role === "student")
        navigate('/student')
        window.location.reload();
      })
      .catch((error) => {
        alert('Incorrect username or password')
        console.error(error);
      });
  };

  

  return (
    <div className="auth" style={{backgroundImage: `url(${bi})`}}>
        <section>
          <div className='form-box'>
            <div className='form-value'>
            <form onSubmit={handleSubmit} className="auth-login">
              <h2>LOGIN</h2>
              <div className='inputbox'>
                  <ion-icon name="mail-outline"></ion-icon>
                  <input type="text" name='username' required />
                  <label for="username">Email</label>
              </div>
              <div className='inputbox'>
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input type="password" name='password' required />
                  <label for="password">Password</label>
              </div>
              <button className='btn'>Log in</button>
              <div className='register' style={{paddingTop:"10px" }}>
                 <p>Don't have an account ?</p>
                 <button className='btn reg'><Link to="/" className='btn2'>Sign-up</Link></button>
              </div>
            </form>
            </div>
          </div>
        </section>
   </div>
  );
};

export default Login;
