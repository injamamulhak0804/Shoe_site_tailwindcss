import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
    console.log(imgURL);
    return (
        <div className='min-h-[18rem] flex
        flex-col p-8  leading-10 justify-center shadow-3xl
        items-start w-[18rem] rounded-lg bg-white'>
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} width={24} height={24} alt="" />
            </div>
            <p className='font-bold font-palanquin mt-5 text-2xl'>{label}</p>
            <p className='font-palanquin text-slate-gray break-words text-md leading-normal mt-4'>{subtext}</p>
        </div>
    )
}

export default ServiceCard