import React from 'react'
import { star } from '../assets/icons'
const PopularProductCard = ({ name, imgURL, price }) => {
  const randomNumber = Math.ceil(Math.random() * 5)
  const rating = randomNumber.toFixed(1)

  return (
    <div className='flex cursor-pointer flex-col  
    hover:-translate-y-3 p-10 duration-800 max-sm:hover:translate-y-0 
    transition ease-out border-2  border-black border-opacity-5 
    shadow-2xl rounded-xl max-sm:mb-20'>
      <img src={imgURL} alt="" width={280} height={280} />
      <div className='mt-8 gap-2 flex items-center justify-start'>
        <img src={star} alt="" width={15} height={15} />
        <p className='text-md font-montserrat mt-2'>{rating}</p>
      </div>
      <div>
        <p className='text-xl font-bold leading-9'>{name}</p>
        <p>price: {price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard