import React from 'react'
import './EditProfile.css'
import { useState } from 'react'
function EditProfile() {
    const [newValue,setNewvalue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        const selectContainer = document.getElementById("user-options")
        const selected = selectContainer.value
        const changingDetails = {
            update:selected,
            value:newValue
        }
        console.log(changingDetails)
        setNewvalue("")
    }
    function handleChange(e){
        setNewvalue(()=>e.target.value)
    }
  return (
    <div className='edit-profile'>
        <h2>Select an Option:</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="user-options">Choose an option:</label>
    <select id="user-options" name="options">
      <option value="user_name">user_name</option>
      <option value="email">Email</option>
      <option value="password">password</option>
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