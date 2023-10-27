import React from 'react'
import {services} from '../constants/index'
import ServiceCard from '../Components/ServiceCard'
const Service = () => {
  return (
    <section>
      <div className="w-full flex flex-1 
      justify-center items-center p-10
      gap-20 flex-wrap min-h-[20rem] bg-slate-100">
        {
          services.map((item, index) => (
            
            <ServiceCard key={index} 
            {...item}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Service