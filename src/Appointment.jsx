import React from 'react'
import './Appointment.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Appointment() {
  return (
    <div className='appointments'>
        <h1>Book an appointment with us today <i class="fa-solid fa-face-grin-wide"></i></h1>
        <form className='booking-form'>
            <label htmlFor="phoneNumber">Please Enter your phone Number:</label>
            <input type='phone' />
            <label htmlFor='customer-issue'>Enter the issue you would like us to sort:</label>
            <textarea type='text'></textarea>
            <label htmlFor="date">Please select a date:</label>
            <div className='date-available'>Appointments are only available after <span>this date</span> moving forward </div>
            <input type="date" id="datePicker" name="selectedDate"></input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Appointment