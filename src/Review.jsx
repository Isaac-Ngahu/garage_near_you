import React from 'react'
import './Review.css'

function Review({review}) {
  return (
    <div className='review'>
      <p>User: {review[0]} says:</p>
      <p>Review: {review[1]}</p>
    </div>
  )
}

export default Review