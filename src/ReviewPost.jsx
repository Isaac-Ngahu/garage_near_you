import React from 'react'
import './ReviewPost.css'
import { useState } from 'react'

function ReviewPost() {
 const [newReview,setNewReview] = useState("")
 function handleReviewSubmit(e){
    e.preventDefault()
    console.log(newReview)
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