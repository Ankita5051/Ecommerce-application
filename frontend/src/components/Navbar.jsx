import {React, useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible]=useState(false);
    const {setShowSearch,getCartCount} = useContext(ShopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5x] bg-gray-700' />
            </NavLink>

            <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5x] bg-gray-700' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5x] bg-gray-700' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5x] bg-gray-700' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <Link to='/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt=''/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
           
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px] flex items-center justify-center'>
                    {getCartCount()}
                </p>
            </Link>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/>
        </div>

        {/* Sidebar menu for small screen */}

        <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gao-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180 pl-3' src={assets.dropdown_icon} alt='' />
                    <p>Back</p>
                </div>

                <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border-top'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/collections' className='py-2 pl-6 border-top'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border-top'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border-top'>CONTACT</NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar