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
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    </select>
    <label htmlFor='new-value'>Enter the new value:</label>
    <input type="text" value={newValue} id='newValue' onChange={handleChange} />
    <button type="submit">Change</button>
  </form>
    </div>
  )
}

export default EditProfile