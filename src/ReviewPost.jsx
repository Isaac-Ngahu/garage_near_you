import React from 'react'
import './ReviewPost.css'
import { useState } from 'react'

function ReviewPost() {
 const [newReview,setNewReview] = useState("")
 function handleReviewSubmit(e){
    e.preventDefault()
    console.log(newReview)
    const userReview = {
      userId:,
      review:newReview,
      bookingId:
    }
    fetch("http://localhost:9292/reviews",{
      method:"POST",
      headers :{
        "Content-type":"application/json"
      },
      body:JSON.stringify(userReview)
    })
    .then(response => response.json())
    .then(data => console.log(data))
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