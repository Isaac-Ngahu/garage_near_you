import React from 'react'

function ReviewPost() {
  return (
    <div className='post-review'>
        <form>
            <label htmlFor="customer_review">Enter your review here:</label>
            <input type="text" id='newReview' />
            <button type='submit'>submit review</button>
        </form>
    </div>
  )
}

export default ReviewPost