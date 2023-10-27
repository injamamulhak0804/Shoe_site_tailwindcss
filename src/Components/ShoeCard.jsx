import React from 'react'

const ShoeCard = ({ imgURL, changeBigImage, bigShoeImage }) => {

  const handleclick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigImage(imgURL.bigShoe)
    }
  }

  return (
    <div className={`border-4 rounded-xl  transition duration-300
    ${bigShoeImage === imgURL.bigShoe
        ? 'border-coral-red'
        : 'boder-transparent' 
      } 
    'border-coral-red' cursor-pointer max-sm:flex-1  
    `}
      onClick={handleclick}
    >
      <div className='flex justify-center 
         items-center rounded-xl max-sm:p-4
          bg-card bg-center 
          bg-cover sm:w-40 
          sm:h-40 '>
        <img src={imgURL.thumbnail} width={130} height={103} className='object-contain transition duration-700 ease-in-out hover:transition hover:duration-700 hover:ease-in-out' alt="" />
      </div>
    </div>
  )
}

export default ShoeCard