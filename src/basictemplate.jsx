import React from 'react';
import './basictemplate.css';

import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
    <div>
    <header>
    <nav class="navbar">
      <h2 class="logo"><a href="#">ZenGarden</a></h2>
      <input type="checkbox" id="menu-toggler"/>
      <label for="menu-toggler" id="hamburger-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </label>
      <ul class="all-links">
        <li ><a href="#home">Home</a></li>
        <li><a href="#services">courses</a></li>
        <li><a href="#portfolio">articles</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li ><a href="#" onClick={() =>navigate('/login')}>Login</a></li>
        <li><a href="#" onClick={() =>navigate('/register')}>Sign Up</a></li>
      </ul>
    </nav>
  </header>




  <section class="homepage" id="home">
    <div class="content">
      <div class="text">
        <h1>Nuture your mind.</h1>
        <p class="text2">
        "Nurture your mind like a garden, cultivating seeds of curiosity, watering the soil with knowledge, 
        and letting the sunshine of positivity illuminate the blossoms of wisdom. 
        In the garden of your thoughts, tend to the beauty of growth, for in the fertile grounds of the mind, 
        possibilities bloom into the extraordinary."</p>
      </div>
      <a href="#services">Begin your Journey</a>
    </div>
  </section>





  <section class="services" id="services">
    <h2>Our courses</h2>
    <p>Explore our available courses and begin your journey towards self discovery and inner peace.</p>
    
    <div className='courses'>
    <ul class="cards">

      <li class="card">
        <img src="candle.jpg" alt="img"/>
        <h3>Meditation</h3>
        <p>Meditation is both a skill and an experience that can improve your health and happiness</p>
        <p className="come">coming soon</p>
        
      </li>


      <li class="card">
        <img src="mindful.jpg" alt="img"/>
        <h3>mindfulness</h3>
        <p>Mindfulness is the idea of learning how to be fully present and engaged in the moment</p>
        <p className="come">coming soon</p>
      </li>


      <li class="card">
        <img src="stress.jpg" alt="img"/>
        <h3>Stress & Anxiety</h3>
        <p>Learn how to manage stress and everyday anxious feelings</p>
        <p className="come">coming soon</p>
      </li>


    </ul>
    </div>
  </section>

  <section class="portfolio" id="portfolio">
    <h2>Articles</h2>
    <p>Take a look at some of our articles.</p>
    <ul class="cards">
    <li class="card">
        <img src="selfcare.jpg" alt="img"/>
        <h3>Serene Moments: A Guided Meditation Experience</h3>
      </li>
     
    </ul>
  </section>

  <section class="about" id="about">
    <h2>About Us</h2>
    <p>Discover our story .</p>
    <div class="row company-info">
      <h3>Our Story</h3>
      <p>In the hustle and bustle of academic life, three students from diverse backgrounds came together with a shared passion for mindfulness and a common vision to create a digital oasis for those seeking tranquility in the midst of chaos. Born out of the fusion of computer science and design, our team embarked on a journey to develop a website that goes beyond the realms of academia, inviting visitors to explore the transformative power of meditation and mindfulness.
      </p>
    </div>
    <div class="row mission-vision">
      <h3>Our Mission</h3>
      <p>At the core of our mission is a commitment to demystify and make mindfulness accessible to all. We believe in the power of mindfulness to enhance mental well-being, reduce stress, and foster a deeper connection with oneself. Our mission is to provide a digital sanctuary where users, regardless of their background or experience, can embark on a journey of self-discovery and inner peace. Through a harmonious blend of technology and design, we aim to empower individuals with the tools they need to cultivate mindfulness in their daily lives.</p>
      <h3>Our Vision</h3>
      <p>We envision a world where the digital realm is not just a source of information but a conduit for serenity and self-awareness. Our website stands as a testament to the harmonious integration of computer science and design principles, creating an immersive experience that guides users toward mindfulness. We aspire to be a catalyst for positive change, fostering a global community united by a commitment to mental well-being and mindfulness.</p>
    </div>
    <div class="row team">
      <h3>Our Team</h3>
      <ul>
        <li>Sivakumar v - project Manager</li>
        <li>Alfred Jackson I - user account Manager</li>
        <li>Sanjay R - course and article Manager</li>
      </ul>
    </div>
  </section>

  <section class="contact" id="contact">
    <h2>Contact Us</h2>
    <p>Reach out to us for any inquiries or feedback.</p>
    <div class="row">
      <div class="col information">
        <div class="contact-details">
        <h3>Email</h3>  
        <p><i class="fas fa-map-marker-alt"></i>727722eucd0041@skcet.ac.in</p>
          <p><i class="fas fa-envelope"></i>727722eucd047@skcet.ac.in</p>
          <p><i class="fas fa-phone"></i>727722eucd003@skcet.ac.in</p>
    
        </div>          
      </div>
      <div class="col form">
        <form>
          <input type="text" placeholder="Name*" required/>
          <input type="email" placeholder="Email*" required/>
          <textarea placeholder="Message*" required></textarea>
          <button id="submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div>
      <span>Copyright © 2023 All Rights Reserved</span>
      <span class="link">
          <a href="#">Home</a>
          <a href="#contact">Contact</a>
      </span>
    </div>
  </footer>

 

    </div>
    </>
  )
}
