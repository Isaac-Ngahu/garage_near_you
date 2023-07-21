import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='register-container'>
        <h1>Register with us <span>Your trusted pit crew for top-notch car fixes!</span></h1>
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value = ""
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value = ""
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value = ""
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value = ""
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value = ""
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register