import { useState } from 'react'
import './Register.css'
function Register() {
 const [formData,setFormData] = useState({
    username:"",
    phoneNumber:"",
    email:"",
    password:"",
    confirmPassword:""
 })

 function handleFormChange(e){
    setFormData(()=>(
        {
            ...formData,
            [e.target.id]:e.target.value
        }
    ))
 }
  return (
    <div className='register-container'>
        <h1 id='header'>Register with us <span>Your trusted pit crew for top-notch car fixes!</span></h1>
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value = {formData.username}
          onChange={handleFormChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value = {formData.phoneNumber}
          onChange={handleFormChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value = {formData.email}
          onChange={handleFormChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value = {formData.password}
          onChange={handleFormChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value = {formData.confirmPassword}
          onChange={handleFormChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  )
}

export default Register