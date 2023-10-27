import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../Components/PopularProductCard'
const PopularProducts = () => {
  return (
    <>
      <div className=' min-w-screen min-h-screen '>
        <div className="poplular-text">
          <h1 className='text-8xl mt-10 xl:left-20 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span>Our </span>
            <span className='text-coral-red'> Popular </span>Products
          </h1>
          <p className='mt-10 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-[41rem] max-sm:w-[]'>
            Experience top notch quality and style with out sought-after selections.
            Discover a world of comfort, design and value.
          </p>
        </div>
        <div className='flex gap-10 flex-wrap min-h-[40rem] mt-20 justify-center items-center'>
          {
            products.map((product, index) =>(
              <PopularProductCard
                key={index}
                {...product}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PopularProducts