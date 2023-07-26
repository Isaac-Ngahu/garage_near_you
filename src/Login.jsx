import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Register from './Register'
import './Login.css'
function Login() {
    const navigate = useNavigate()
    const [data,setData] = useState({
        user_name:'',
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
        sessionStorage.setItem('username',data.user_name)
        fetch("http://localhost:9292/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert(`error ${data.error}`);
    } else {
      console.log(data)
      sessionStorage.setItem('user_id',data.user_id)
      setData(()=>({
        user_name:"",
        password:""
    }))
    navigate("/home")
    }
  })
  
           
    }
  return (
    <div className='login-page'>
        <h1>Welome to Garage near you <span>Turning car troubles into distant memories!</span></h1>
        <div className="login-container">
        <div id='no-account'>Don't have an account? <Link to='/register'>Register Here</Link></div>
            <h2>please Login to start</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="user_name" name="user_name" value={data.user_name} onChange={handleChange} required/>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={data.password} onChange={handleChange} required/>
                
                <button type="submit">Log In</button>  
            </form>
        </div>
    </div>
  )
}

export default Login