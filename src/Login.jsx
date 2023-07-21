import React from 'react'
import { Link } from 'react-router-dom'
// import Register from './Register'
import './Login.css'
function Login() {
  return (
    <div className='login-page'>
        <h1>Welome to Garage near you <span>Turning car troubles into distant memories!</span></h1>
        <div className="login-container">
        <div id='no-account'>Don't have an account? <Link to='/register'>Register Here</Link></div>
            <h2>please Login to start</h2>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
                
                <button type="submit">Log In</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login