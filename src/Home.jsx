import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Review from './Review';
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const username = sessionStorage.getItem('username')
    const navigate = useNavigate()
    const [reviews,setReviews]=useState([])
    const uniqueId = uuidv4();
    useEffect(()=>{
      fetch("http://localhost:9292/reviews")
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setReviews(()=> data)
      } )
    },[]);
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
    {reviews.map((review)=>{
      <Review key={uniqueId} review={review}/>
    })}
    </section>
  </main>
  <footer>
    
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
    </div>
  )
}

export default Home