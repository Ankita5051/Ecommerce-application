import React, { useContext, useEffect,useState } from 'react'
import Hero from './Hero'
import { ShopContext } from '../context/ShopContext'
import Tiltle from './Tiltle';
import Productitem from './Productitem';

const LatestCollection = () => {
    const {products}= useContext(ShopContext);
    const [latestProducts, setlatestProducts]= useState([]);

    useEffect(()=>{
        setlatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'> 
        <div className='text-center py-8 text-3xl'>
            <Tiltle text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Poppins is a popular and versatile typeface that supports both Latin and Devanagari scripts. It has a range of weights and italics, and was designed by Indian Type Foundry and Jonny Pinhorn.
            </p>
        </div>

        {/* Render Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 lg:grid-cols-5 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                   
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection