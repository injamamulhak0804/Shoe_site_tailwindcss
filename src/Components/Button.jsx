import React from 'react'

const Button = ({ iconURL, label, props }) => {
  return (
    <>
      <span>
        <button className='mt-3 flex justify-center 
    items-center gap-2 bg-coral-red p-3 rounded-full border-2 border-red text-white font-montserrat '>
          {label}
          <img src={iconURL} />
        </button>
      </span>
    </>
  )
}

export default Button