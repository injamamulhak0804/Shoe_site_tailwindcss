import React, { useState } from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'
const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <>
      <section id='home' className='w-full  flex xl:flex-row flex-col min-h-screen gap-30'>
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
          <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
          <h1 className='text-8xl mt-10 xl:left-20 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative  z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>
              Nike
            </span> Shoes
          </h1>
          <p className='mt-6 mb-14 sm:max-w-sm font-montserrat text-slate-gray text-lg leading-8 '>Discover stylish Nike arrivals, quality comfort and innnovation for you active life.</p>
          <Button label="Shop Now" iconURL={arrowRight} />
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='relative
         flex-1 flex 
         justify-center 
         items-center xl:min-h-screen min-h-[40rem] bg-cover  bg-hero bg-center'>
          <img src={bigShoeImg}
            width={610}
            height={500}
            className='object-contain relative z-10'
            alt="" />
          <div className='flex absolute sm:gap-6 max-sm:hidden sm:left-[10%] max-sm:px-6 -bottom-[10%]'>
            {
              shoes.map((shoe, index) => (
                <div key={index}>
                  <ShoeCard
                    imgURL={shoe}
                    changeBigImage={(shoe) => { setbigShoeImg(shoe) }}
                    bigShoeImage={bigShoeImg}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero


















