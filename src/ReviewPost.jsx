import React from 'react'
import './ReviewPost.css'
import { useState } from 'react'

function ReviewPost() {
 const [newReview,setNewReview] = useState("")
const id = sessionStorage.getItem("user_id") 
const booking_id = sessionStorage.getItem("booking_id")
 function handleReviewSubmit(e){
    e.preventDefault()
    console.log(newReview)
    const userReview = {
      user_id:id,
      review:newReview,
      booking_id:booking_id}
    fetch("http://localhost:9292/reviews",{
      method:"POST",
      headers :{
        "Content-type":"application/json"
      },
      body:JSON.stringify(userReview)
    })
    .then(response => response.json())
    .then(data => console.log(userReview))
    .catch(error => console.log(error))
    setNewReview("")
 }
 function handleChange(e){
    setNewReview(()=>e.target.value)
 }
  return (
    <div className='post-review'>
        <form onSubmit={handleReviewSubmit}>
            <label htmlFor="customer_review">Enter your review here:</label>
            <input type="text" id='newReview' value={newReview} onChange={handleChange} />
            <button type='submit'>submit review</button>
        </form>
    </div>
  )
}

export default ReviewPost