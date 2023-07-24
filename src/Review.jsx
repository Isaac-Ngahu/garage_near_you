import React from 'react'
import './Review.css'

function Review({review}) {
  return (
    <div className='review'>
      <p>{review[0]} says:</p>
      <p>{review[1]}</p>
    </div>
  )
}

export default Review