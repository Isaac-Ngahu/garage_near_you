import React from 'react'
import { useState } from 'react';
import './Appointment.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Appointment() {
    const id = sessionStorage.getItem("user_id")
    const [formData,setFormData] = useState({
        user_id:id,
        service_type:'',
        vehicle_make:'',
        additional_notes:'',
        booking_date:'',
        booking_time:''
    })
    function handleFormChange(e){
        setFormData(()=>({
            ...formData,
            [e.target.id]:e.target.value
        }))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/booking",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data =>{
            if(data.error){
                alert(data.error)
            }else{
                sessionStorage.setItem("booking_id" , data.booking_id)
                const ul = document.getElementById("success-message")
                const li = document.createElement('li')
                li.textContent = "Booking created succesfully"
                ul.appendChild(li)
            }
        })
        // console.log(data))
        // .catch(error => console.log(error))
        // console.log(formData)
    }
  return (
    <div className='appointments'>
        <h1>Book an appointment with us today <i class="fa-solid fa-face-grin-wide"></i></h1>
        <ul id='success-message'></ul>
        <form className='booking-form' onSubmit={handleFormSubmit}>
            <label htmlFor='customer-issue'>Enter the service type you would like sorted:</label>
            <textarea type='text' id='service_type' required value={formData.service_type} onChange={handleFormChange}></textarea>
            <label htmlFor="vehicle-type">Enter the make of the vehicle:</label>
            <input type='text' id='vehicle_make' required value={formData.vehicle_make} onChange={handleFormChange} />
            <label htmlFor="notes">Enter any additional notes or special services:</label>
            <input type='text' id='additional_notes' value={formData.additional_notes} onChange={handleFormChange} />
            <div className='specific-time'><label htmlFor="date">Please select a date:</label>
            <div className='date-available'>Appointments are only available after <span>this date</span> moving forward </div>
            <input type="date" id="booking_date" name="selectedDate" required value={formData.booking_date} onChange={handleFormChange}/>
            <input type="time" id="booking_time" name="selectedTime" required value={formData.booking_time} onChange={handleFormChange}/>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Appointment