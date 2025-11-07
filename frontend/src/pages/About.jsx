import React from 'react'
import Tiltle from '../components/Tiltle'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
          <Tiltle text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with StripeCreate Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
              <p>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with StripeCreate Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
                <b className='text-gray-800'>Our Mission</b>
              <p>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with StripeCreate Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
              <p>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with StripeCreate Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
                
          </div>
      </div>

      <div className='text-xl py-4'>
        <Tiltle text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional customer service:</b>
                <p className='text-gray-600'>Create Full Stack E-commerce Website Using React JS | MERN Stack eCommerce Project with Stripe</p>
            </div>
      </div>

    </div>
  )
}

export default about