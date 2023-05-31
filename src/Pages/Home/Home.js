import React, { useState } from 'react';
import slide1 from '../../Assets/S1.jpg';
import slide2 from '../../Assets/S2.jpg';
import slide3 from '../../Assets/S3.jpg';
import slide4 from '../../Assets/S4.jpg';
import slide5 from '../../Assets/S5.jpg';
import slide6 from '../../Assets/S6.jpg';
import './Home.css';

const MyComponent = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];
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
  
  


  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
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
});

  
    
    

    


  }

  return (
    <div className="home">
      <button className="prev-button" onClick={handlePrevSlide}>&#10094;</button>
      <div className="Container" style={{ backgroundImage: `url(${currentSlide})`,opacity:'0.8'}}>
      <h1>Ourinstructor</h1>
         <p>We at OurInstructor are here for  Penetrating work culture in College Students. <br/>
         Bringing western students to work energy in our home country.</p> 
         
      </div>
      <button className="next-button" onClick={handleNextSlide}>&#10095;</button>
      
      {!showForm ? (
         <div className='main'>

         <h1 className='head'>Teacher Form</h1>
         <div className='main2' style={{ display: 'flex' }}>
   <div style={{ flex: 1, padding: '20px' , margin:'10px'}} className='first'>
     <form >
       <label htmlFor="username">Username</label><br/>
       <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/><br/>
       <label htmlFor="password">Password</label><br/>
       <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
       <label htmlFor="password2">Confirm Password</label><br/>
       <input type="password" name="password2" placeholder="Confirm Password" onChange={(e) => setPassword2(e.target.value)} /><br/><br/>
       <label htmlFor="email">Email</label><br/>
       <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
       <label htmlFor="phone">Phone Number</label><br/>
       <input type="number" name="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} /><br/><br/>
       <label htmlFor="fname">First Name</label><br/>
       <input type="text" name="fname" placeholder="First Name" onChange={(e) => setFirst_name(e.target.value)} /><br/><br/>
       <label htmlFor="lname">Last Name</label><br/>
       <input type="text" name="lname" placeholder="Last Name" onChange={(e) => setLast_name(e.target.value)} /><br/><br/>
       <label htmlFor="parent">Parent</label><br/>
       <input type="text" name="parent" placeholder="Parent" onChange={(e) => setParent(e.target.value)} /><br/><br/>
     </form>
   </div>
   <div style={{ flex: 1, padding: '20px' }}>
     <form>
       <label htmlFor="subject">Subject</label><br/>
       {subjects.map(subject => (
  <div key={subject.id} className="subject-checkbox">
    <label htmlFor={subject.name} className="subject-label">
      <input 
        type="checkbox"
        id={subject.name}
        name={subject.name}
        value={subject.name}
        checked={selectedSubjects.includes(subject.name)}
        onChange={handleSubjectChange}
      />
      {subject.name}
    </label>
  </div>
))}
        <br/><br/>
       <label htmlFor="address">Address</label><br/>
       <input type="text" name="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} /><br/><br/>
       <label htmlFor="pincode">Pincode</label><br/>
       <input type="number" name="pincode" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} /><br/><br/>
               <label for="classes">Classes</label><br/>
               <select name="classes" onChange={(e) => setClasses(e.target.value)} >
                 <option>1-7</option>
                 <option>8-10</option>
                 <option>11-12</option>
                 <option>university</option>
               </select><br/><br/>
               <label for="school">School</label><br/>
               <input type="text" name="school" placeholder='School' onChange={(e) => setSchool(e.target.value)}></input><br/><br/>
             </form>
           </div>
         </div>
         <div className='btns'>
           <button className='sumbit' onClick={handlestudent}>Sumbit</button><br/>
           <button className='sbt' onClick={handleteacher}>Are you a Student</button>
         </div>
       </div>
      ) : (
        <div className='main'>

         <h1 className='head'>Student Form</h1>
         <div className='main2' style={{ display: 'flex' }}>
   <div  style={{ flex: 1, padding: '20px'}}>
     <form className='first' >
       <label htmlFor="username">Username</label><br/>
       <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br/><br/>
       <label htmlFor="password">Password</label><br/>
       <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
       <label htmlFor="password2">Confirm Password</label><br/>
       <input type="password" name="password2" placeholder="Confirm Password" onChange={(e) => setPassword2(e.target.value)} /><br/><br/>
       <label htmlFor="email">Email</label><br/>
       <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
       <label htmlFor="phone">Phone Number</label><br/>
       <input type="number" name="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} /><br/><br/>
       <label htmlFor="fname">First Name</label><br/>
       <input type="text" name="fname" placeholder="First Name" onChange={(e) => setFirst_name(e.target.value)} /><br/><br/>
       <label htmlFor="lname">Last Name</label><br/>
       <input type="text" name="lname" placeholder="Last Name" onChange={(e) => setLast_name(e.target.value)} /><br/><br/>
       <label htmlFor="parent">Parent</label><br/>
       <input type="text" name="parent" placeholder="Parent" onChange={(e) => setParent(e.target.value)} /><br/><br/>
     </form>
   </div>
   <div style={{ flex: 1, padding: '20px' }}>
     <form>
       <label htmlFor="subject" >Subject</label><br/>
       {subjects.map(subject => (
  <div key={subject.id} className="subject-checkbox">
    <label htmlFor={subject.name} className="subject-label">
      <input 
        type="checkbox"
        id={subject.name}
        name={subject.name}
        value={subject.name}
        checked={selectedSubjects.includes(subject.name)}
        onChange={handleSubjectChange}
      />
      {subject.name}
    </label>
  </div>
))}

        <br/><br/>
       <label htmlFor="address">Address</label><br/>
       <input type="text" name="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} /><br/><br/>
       <label htmlFor="pincode">Pincode</label><br/>
       <input type="number" name="pincode" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} /><br/><br/>
               <label for="classes">Classes</label><br/>
               <select name="classes" onChange={(e) => setClasses(e.target.value)} >
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 <option>6</option>
                 <option>7</option>
                 <option>8</option>
                 <option>9</option>
                 <option>10</option>
                 <option>11</option>
                 <option>12</option>
                 <option>university</option>
               </select><br/><br/>
               <label for="school">School</label><br/>
               <input type="text" name="school" placeholder='School' onChange={(e) => setSchool(e.target.value)}></input><br/><br/>
             </form>
           </div>
         </div>
           <div className='btns'>
           <button className='sumbit' onClick={handlestudent}>Sumbit</button><br/>
           <button className='sbt' onClick={handleteacher}>Are you a Teacher</button>
           </div>
       </div>
      )}

     
    </div>
    
  );
};

export default MyComponent;
