import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-left'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt=''/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Poppins is a popular and versatile typeface that supports both Latin and Devanagari scripts. It has a range of weights and italics, and was designed by Indian Type Foundry and Jonny Pinhorn.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='Flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7878</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com- All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer