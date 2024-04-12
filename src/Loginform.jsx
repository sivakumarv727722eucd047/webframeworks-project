import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showFailed, setShowFailed] = useState(false);

  const apiUrl = 'http://localhost:9123/login';

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const res = await axios.get(`http://localhost:9123/get/${username}/${password}`);
      console.log(res.data);
      if (res.data === "user") {
          alert("User name does not Exist");
      } else if (res.data === "pass") {
          alert("Password does not match");
      } else {
          window.location.href = '/home'; // Example redirection
      }
  } catch (error) {
      // Handle error
      console.error('Error occurred:', error);
      // You can display an appropriate error message to the user here
  }
  
  };

  return (
    <div className="login-page">
    <div className="wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <Link to="/register">
              <span style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }}>
                Register
              </span>
            </Link>
          </p>
        </div>
        {showFailed && <div className="glassmorphic-failed">Login failed. Please try again.</div>}
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
