import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
function Register() {
 const navigate = useNavigate("/home")
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
 function handleFormSubmit(e){
    e.preventDefault()
    sessionStorage.setItem('username',formData.username)
    let response = validateDetails(formData)
    if (response !== "proceed"){
        alert(response)
    }else{
    const messageContainer = document.querySelector(".append-message")
    const li = document.createElement("li")
    li.className = "message"
    li.innerHTML = `Your profile has been created successfully <span>${formData.username}</span>`
    messageContainer.appendChild(li)
    setFormData(()=>({
        username:"",
        phoneNumber:"",
        email:"",
        password:"",
        confirmPassword:""
    }))
    navigate("/home")
    }
    

 }
 function validateDetails(data){
    const {username,phoneNumber,email,password,confirmPassword} = data
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const phoneNumberPattern = /^(?:\+254|254|0)?(7\d{8})$/
    if (!phoneNumberPattern.test(phoneNumber)){
        return "please enter valid phone number"
    }else if (!emailPattern.test(email)){
        return "please enter valid email"
    }else if (password !== confirmPassword ){
        return "passwords must match"
    }else {
        return "proceed"
    }
 }
  return (
    <div className='register-container'>
        <h1 id='header'>Register with us <span>Your trusted pit crew for top-notch car fixes!</span></h1>
        <ul className='append-message'></ul>
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
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