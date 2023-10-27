import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../Components/Button'
const SpecialOffers = () => {
  return (
    <section className='flex max-lg:flex-col  justify-center gap-10 items-center'>
      <div className='flex-1'>
        <img src={offer} className='object-contain w-full' width={773} alt="" />
      </div>
      <div className="special-content xl:max-w-4xl">
        <h2 className='text-4xl mt-10 mb-10 xl:left-20 font-palanquin max-sm:text-[62px]  max-sm:leading-[82px] font-bold'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='text-xl  font-montserrat max-sm:text-[1.2rem] break-words text-slate-gray leading-8 sm:max-w-6xl'>Embark on a shopping journey that redifnes your experience with unbeatables
          deals. From premier selection to incredible savings.we offer unparalleled value that set us apart
        </p> <br />
        <p className='text-xl  font-montserrat max-sm:text-[1.2rem] break-words text-slate-gray leading-8 sm:max-w-6xl'>
          Navigate a relam of possiblites designed to fullfil your desires to, surpassing the loftiest expectations.
          your journey with usis nothign short of exceptional.
        </p>
        <div className="btn flex gap-5 mt-5">
          <Button label='Shop Now' iconURL={arrowRight} />
          <button className='bg-coral-white p-3 px-7 mt-3 rounded-full border-2 border-coral-red text-coral-red font-montserrat'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers 