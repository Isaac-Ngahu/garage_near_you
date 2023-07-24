import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Review from './Review';

function Home() {
    const username = sessionStorage.getItem('username')
    const navigate = useNavigate()
    
  return (
    <div className='home-page'>
    <header>
    <div><i className="fa-solid fa-id-badge"></i> {username}</div>
    <button onClick={()=>navigate("/reviews")}>Leave review</button>
    <button onClick={()=>navigate('/appointments')}>Book appointment</button>
    <button id='edit profile' onClick={()=>navigate('/profile')}> Edit profile</button>
  </header>
  <main>
    <section className="hero">
    <h1>Welcome to Our Website</h1>
      <div className="hero-content">
        <h2> We offer a wide range of services </h2>
        <ul>
          <li><span>Body and Paint Repairs: </span>Fixing minor dents, scratches, and repainting damaged areas.</li>
          <li><span>Classic Car Restoration:</span> Restoring and refurbishing vintage and classic cars.</li>
          <li><span>Fleet Maintenance: </span> Providing maintenance services for commercial and fleet vehicles.</li>
          <li><span>Motorcycle and ATV Repairs:</span> Servicing and repairing motorcycles and all-terrain vehicles.</li>
        </ul>
        
        <p>Expert Hands, Smooth Rides.</p>
        
      </div>
    </section>
    <section className="feature">
    <Review />
    <Review />
    <Review />
    </section>


    {/* <section class="feature">
      <p> Feature section with a different background color </p>
      <div class="feature-content">
        <p> Add your feature content here </p>
        <h2>Our Awesome Features</h2>
        <p>Here are some key features of our product/service.</p>
        <p> Add more feature details or images here </p>
      </div>
    </section>

    <section class="call-to-action">
      <p> Call-to-action section with a vibrant orange background </p>
      <div class="call-to-action-content">
        <p> Add your call-to-action content here </p>
        <h2>Sign up now for exclusive benefits</h2>
        <p>Join us to get the latest updates and special offers.</p>
        <button>Sign Up</button>
      </div>
    </section> */}

  </main>
  <footer>
    
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
    </div>
  )
}

export default Home