import React from 'react'
import './EditProfile.css'
import { useState } from 'react'
function EditProfile() {
    const [newValue,setNewvalue] = useState("")
    const id = sessionStorage.getItem("user_id")
    function handleSubmit(e){
        e.preventDefault()
        const selectContainer = document.getElementById("user-options")
        const selected = selectContainer.value
        const changingDetails = {
            update:selected,
            value:newValue
        }
        fetch(`http://localhost:9292/update/user/${id}`,{
          method:"PUT",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(changingDetails)
        })
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          const ul = document.getElementById("success-message")
          const li = document.createElement('li')
          li.textContent = "details updated successfully"
          ul.appendChild(li)
        })
        .catch(error => console.log(error))
        console.log(changingDetails)
        setNewvalue("")
    }
    function handleChange(e){
        setNewvalue(()=>e.target.value)
    }
  return (
    <div className='edit-profile'>
        <h2>Select an Option:</h2>
        <ul id='success-message'></ul>
  <form onSubmit={handleSubmit}>
    <label htmlFor="user-options">Choose the part of your profile you want changed:</label>
    <select id="user-options" name="options">
      <option value="user_name">User Name</option>
      <option value="email">Email</option>
      <option value="password">Password</option>
      <option value="phone-number">Phone-number</option>
    </select>
    <label htmlFor='new-value'>Enter the new value:</label>
    <input type="text" value={newValue} id='newValue' onChange={handleChange} />
    <button type="submit">Change</button>
  </form>
    </div>
  )
}

export default EditProfile