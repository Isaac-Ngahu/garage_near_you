import React from 'react'
import { useState } from 'react';
import './Appointment.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Appointment() {
    const [formData,setFormData] = useState({
        issue:'',
        vehicleMake:'',
        additionalNotes:'',
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
            <label htmlFor='customer-issue'>Enter the service type you would like sorted:</label>
            <textarea type='text' id='issue' required value={formData.issue} onChange={handleFormChange}></textarea>
            <label htmlFor="vehicle-type">Enter the make of the vehicle:</label>
            <input type='text' id='vehicleMake' required value={formData.vehicleMake} onChange={handleFormChange} />
            <label htmlFor="notes">Enter any additional notes or special services:</label>
            <input type='text' id='additionalNotes' value={formData.additionalNotes} onChange={handleFormChange} />
            <div className='specific-time'><label htmlFor="date">Please select a date:</label>
            <div className='date-available'>Appointments are only available after <span>this date</span> moving forward </div>
            <input type="date" id="datePicker" name="selectedDate" required value={formData.datePicker} onChange={handleFormChange}/>
            <input type="time" id="timePicker" name="selectedTime" required value={formData.timePicker} onChange={handleFormChange}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Appointment