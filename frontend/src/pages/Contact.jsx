import React from 'react'
import Tiltle from '../components/Tiltle'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
         <div className='text-center text-2xl pt-10 border-1'>
            <Tiltle text1={'CONTACT'} text2={'US'} />
         </div>

         <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
             <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
             <div className='flex flex-col justify-center items-start gap-6'>
                  <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                  <p className='text-gray-500'>56789 varanasi ,<br /> lahartara uttar pradesh</p>
                  <p className='text-gray-500'>Tel: (445) 666-0909 <br />Email:service@gmail.com</p>
                  <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
                  <p className='text-gray-500'>Learn more about our teams and job openings</p>
                  <button className='border border-black text-black text-sm px-8 py-4  hover:bg-black hover:text-white cursor-pointer'>Explore Jobs</button>
             </div>
         </div>
    </div>
  )
}

export default Contact