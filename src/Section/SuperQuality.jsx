import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <>
      <section className='flex justify-center items-center gap-10 w-full max-container max-lg:flex-col '>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-4xl mt-10 xl:left-20 font-palanquin capitalize lg:max-w-lg max-sm:text-[52px] max-sm:leading-[52px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative  z-10 pr-10'>
              We Provide You
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>
              Super Quality
            </span> Shoes
          </h2>
          <p className='mt-7 lg:max-w-lg info-text'>
            Ensuring premium comfort and style, our meticulously crafted footware is designed
            to elevate your experience, providing you with unmatched quality, innnovation, and a touch of elegance.
          </p>
          <p className='mt-4 info-text lg:max-w-lg'>
            our dedication to detail and excellence ensures your satisfaction.
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="" />
        </div>
      </section>
    </>
  )
}

export default SuperQuality