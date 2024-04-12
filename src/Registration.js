//register jsx

import React, { useEffect } from 'react';
import axios from 'axios';
import './register.css';

const Registration = () => {
  useEffect(() => {
    // Add the class 'page2' to the body element when the component mounts
    document.body.classList.add('page2');

    // Clean up: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('page2');
    };
  }, []);

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(event.target);
    const username = formData.get('Username');
    const email = formData.get('Email');
    const password = formData.get('Password');
    const confirmPassword = formData.get('ConfirmPassword');
  
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
  
    const userData = {
      username,
      mailid: email,
      password,
    };
  
    try {
      // Send data to the API
      const res = await axios.post("http://localhost:9123/insert", userData);
      console.log(res);
      // Redirect to the login page after successful registration
      window.location.href = 'http://localhost:3000/login';
    } catch (error) {
      console.error("Error occurred while registering:", error);
      // Handle error here, show a message to the user or retry registration
    }
  };
  

  return (
    <div className="container">
      <div className="form-box">
        <form name="Formfill" onSubmit={handleRegistrationSubmit}>
          <h2>REGISTRATION</h2>
          <div className="input-box">
            <i className='bx bxs-user'></i>
            <input type="text" name="Username" placeholder="Username" />
          </div>
          <div className="input-box">
            <i className='bx bxs-envelope'></i>
            <input type="email" name="Email" placeholder="Email" />
          </div>
          <div className="input-box">
            <i className='bx bxs-lock-alt'></i>
            <input type="password" name="Password" placeholder="Password" />
          </div>
          <div className="input-box">
            <i className='bx bxs-lock' ></i>
            <input type="password" name="ConfirmPassword" placeholder="Confirm Password" />
          </div>
          <div className="button">
            <input type="submit" className="btn" value="Register" />
          </div>
          <div className="group">
            <span><a href=' '>FORGET PASSWORD</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;