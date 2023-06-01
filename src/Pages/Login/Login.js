import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import bi from '../../Assets/S4.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setSignup] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [role, setRole] = useState('teacher');

  const handleteacher = () => {
    setShowForm(!showForm);

    if (role === 'student') {
      setRole('teacher');
    } else if (role === 'teacher') {
      setRole('student');
    }
  };

  const subjects = [
    { id: 1, name: "Maths" },
    { id: 2, name: "EVS" },
    { id: 3, name: "English" },
    { id: 4, name: "Social Science" },
    { id: 5, name: "Physics" },
    { id: 6, name: "Chemistry" },
    { id: 7, name: "Biology" },
    { id: 8, name: "Computer Science" }
  ];
  
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  
  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    if (selectedSubjects.includes(selectedSubject)) {
      setSelectedSubjects(selectedSubjects.filter(subject => subject !== selectedSubject));
    } else {
      setSelectedSubjects([...selectedSubjects, selectedSubject]);
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [number, setPhone] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [Address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [classes, setClasses] = useState('');
  const [school_university, setSchool] = useState('');
  const [parent, setParent] = useState('');
  
  

  const handleClick = () => {
    setSignup(!isSignup);
  };

  

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

  const handlestudent = (event) =>{
    event.preventDefault();
    const subject = selectedSubjects.join();
    fetch('https://ourinstructor.pythonanywhere.com/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username, password, password2, email, first_name, last_name, number, parent , subject, Address, pincode, role, classes, school_university })
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});}

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
                 <p>Don't have an account ? <button className='btn'><Link to="/" className='btn2'>Sign-up</Link></button></p>
              </div>
            </form>
            </div>
          </div>
        </section>
   </div>
  );
};

export default Login;
