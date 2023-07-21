import React from 'react'
import './Home.css'
function Home() {
    const username = sessionStorage.getItem('username')
  return (
    <div className='home-page'>
    <header>
    <span></span>
  </header>
  <main>
    <section class="hero">
      <p> Hero section with background image or color </p>
      <div class="hero-content">
        <p> Add your hero content here </p>
        <h1>Welcome to Our Website</h1>
        <p>This is a catchy tagline or description.</p>
        <button>Call to Action</button>
      </div>
    </section>

    <section class="feature">
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
    </section>

    <p> Add more sections with different colors and content as needed </p>

  </main>
  <footer>
    <p> Add your footer content here </p>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
    </div>
  )
}

export default Home