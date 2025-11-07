import React, { useContext, useState } from 'react'
import Tiltle from '../components/Tiltle'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('strip');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 miin-h-[80vh] border-t'>
        {/* ------------Left side--- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
                      <Tiltle text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>

          <div className='flex gap-3'>
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />
          </div>
          <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' type="text" />
          <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />

          <div className='flex gap-3'>
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
          </div>

          <div className='flex gap-3'>
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' type="text" />
              <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
          </div>
          <input  className='border border-gray-500 rounded py-1.5 px-3.5 w-full' placeholder='Phone Number' type="number" />
        </div>


        {/* ---Right Side-------- */}
        <div className='mt-8'>
              <div className='mt-8 min-w-80'>
                  <CartTotal/>
              </div>

              <div  className='mt-12'>
                 <Tiltle text1={'PAYMENT'}  text2={'METHOD'} />

                 {/* ---Payment method selection---- */}
                 <div className='flex gap-3 flex-col lg:flex-row'>
                      <div className='flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer'>
                         <p onClick={()=>setMethod('stript')} className={`min-w-3.5  h-3.5 border rounded-full ${method==='strip'?'bg-green-400':''}`}></p>
                         <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                      </div>

                      <div className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer'>
                         <p  onClick={()=>setMethod('razorpay')} className={`min-w-3.5  h-3.5 border rounded-full  ${method==='razorpay'?'bg-green-400':''}`}></p>
                         <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                      </div>

                      <div className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer'>
                         <p onClick={()=>setMethod('cod')} className={`min-w-3.5  h-3.5 border rounded-full  ${method==='cod'?'bg-green-400':''}`}></p>
                         <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                      </div>
                 </div>

                  <div className='w-full text-end mt-8'>
                      <button onClick={()=>navigate('/orders')} className='bg-black text-white px-8 py-3'>PLACE ORDER</button>
                  </div>

              </div>
        </div>
    </div>
  )
}

export default PlaceOrder