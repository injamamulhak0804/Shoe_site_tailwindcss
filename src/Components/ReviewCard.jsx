import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={imgURL}
                className='rounded-full w-[120px] h-[120px]'
                alt="" />
            <p className='text-center mt-6  max-w-sm info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2 text-slate-grey'>
                <img src={star} className='w-[1rem]' alt="" />
                <p>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard