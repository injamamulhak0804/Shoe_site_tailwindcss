import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between 
      items-start gap-20
      flex-wrap max-lg:flex-col  
      '>

        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo}
              width={150}
              height={46}
              alt="" />
          </a>
          <p className='text-white-400 sm:max-w-sm mt-6 
          textbase font-montserrat'>Get Shies ready for the new term at
            your nearest Nike store. Find your perfect size in store Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <div key={index} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between flex-wrap lg:gap-10 gap-20'>
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className='text-white font-montserrat text-2xl 
                    leading-normal font-medium mb-6'>{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link} className='mt-3 text-white-400 
                      leading-normal cursor-pointer font-palanquin
                       hover:text-slate-gray' ><a>{link.name}</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex justify-between 
      text-white-400 mt-24 max-sm:flex-col 
      max-sm:items-center'>
        <div className='flex flex-1 font-montserrat cursor-pointer justify-start items-center gap-2'>
          <img src={copyrightSign} width={20} height={20} alt="" />
          <p>copyright. All rights reserved.</p>
        </div>
        <p className='cursor-pointer '>Terms & condition</p>
      </div>
    </footer>
  )
}

export default Footer