import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
    <div className='max-container'>
      <h3 className='font-palanquin text-center text-4xl max-sm:text-[3rem] font-bold '>
        What Our
        <span className='text-coral-red'> Customers </span>
        Says?
      </h3>
      <p className='info-text m-auto max-w-lg text-center  mt-4'>Hear genuine stories from our customer about their exceptional experiences with us.</p>
      <div className="mt-24 flex 
      flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CustomerReviews