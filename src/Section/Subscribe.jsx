import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-xl max-sm:text-[3rem] font-bold font-palanquin'>
        Sign up from 
        <span className='text-coral-red'>
          &nbsp;Updates
        </span> & NewLetters
      </h3>
      <div className='lg:max-w-[40%] w-full flex 
      items-center max-sm:flex-col justify-center
      gap-5 p-2.5 sm:border sm:bg-slate-grey rounded-full'>
        <input type="text"
          placeholder='Subscribe to nike.@gmail.com'
          className='input '
        />
        <div className='flex max-sm:justify-center items-center max-sm:w-full '>
          <Button
            label="Sign Up"
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe