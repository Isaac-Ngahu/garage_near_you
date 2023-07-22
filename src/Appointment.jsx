import React from 'react'
import { useState } from 'react';
import './Appointment.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Appointment() {
    const [formData,setFormData] = useState({
        issue:'',
        datePicker:'',
        timePicker:''
    })
    function handleFormChange(e){
        setFormData(()=>({
            ...formData,
            [e.target.id]:e.target.value
        }))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='appointments'>
        <h1>Book an appointment with us today <i class="fa-solid fa-face-grin-wide"></i></h1>
        <form className='booking-form' onSubmit={handleFormSubmit}>
            <label htmlFor="phoneNumber">Please Enter your phone Number:</label>
            <input type='phone' />
            <label htmlFor='customer-issue'>Enter the issue you would like us to sort:</label>
            <textarea type='text' id='issue' value={formData.issue} onChange={handleFormChange}></textarea>
            <div className='specific-time'><label htmlFor="date">Please select a date:</label>
            <div className='date-available'>Appointments are only available after <span>this date</span> moving forward </div>
            <input type="date" id="datePicker" name="selectedDate" value={formData.datePicker} onChange={handleFormChange}/>
            <input type="time" id="timePicker" name="selectedTime" value={formData.timePicker} onChange={handleFormChange}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Appointment