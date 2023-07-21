import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Register from './Register'
import './Login.css'
function Login() {
    const [data,setData] = useState({
        username:'',
        password:''
    })
    function handleChange(e){
        setData(()=>({
            ...data,
            [e.target.id]:e.target.value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        sessionStorage.setItem('username':data.username)
    }
  return (
    <div className='login-page'>
        <h1>Welome to Garage near you <span>Turning car troubles into distant memories!</span></h1>
        <div className="login-container">
        <div id='no-account'>Don't have an account? <Link to='/register'>Register Here</Link></div>
            <h2>please Login to start</h2>
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={data.username} onChange={handleChange} required/>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={data.password} onChange={handleChange} required/>
                
                <button type="submit">Log In</button>  
            </form>
        </div>
    </div>
  )
}

export default Login