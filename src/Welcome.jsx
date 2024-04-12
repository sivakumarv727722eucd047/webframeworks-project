// Welcome.jsx

import React from 'react';
import './Welcome.css';
import zenlogo from './zenlogo.jpg';
import { useNavigate } from 'react-router-dom';



export default function Welcome() {

      const navigate = useNavigate();

  return (
    <div className="half-and-half-container">
      <div className="left-half">
        <img className="wellogo" src={zenlogo} alt="ZenGarden" />
      </div>

      <div className="right-half">
        <p className="welcomepageMessage">
          Welcome to ZenGarden,<br />Your oasis of calm in the digital world.<br />
        </p>
        
        {/* Aesthetic Button */}
        <div className="button-container">
          <button className="go-to-home-button" onClick={() => navigate('/home')}>Go to Home</button>
          <button className="go-to-home-button" onClick={() => navigate('/login')}>Login</button>
          <button className="go-to-home-button" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
