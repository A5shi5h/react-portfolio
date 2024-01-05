"use client"
import React, { useState } from 'react'


const Navbar = () => {
  const[isMenuOpen , setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    console.log("hamburger clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className='flex h-13 bg-black
      items-center justify-between p-10 font-medium 
      flex-wrap'>
          <h1 className='mb-3 px-5'>
              <img 
              className='h-20 w-20 rounded-full' 
              src="./images/profile.jpg" alt="profile-pic"/>
          </h1>
          <div className='hidden md:flex gap-10 
          text-white'>
              <a href="#about" className='hover:text-red-700'>About</a>
              <a href='#projects' className='hover:text-red-700'>Projects</a>
              <a href='#techs' className='hover:text-red-700'>Tech</a>
              <a href='#contact' className='hover:text-red-700'>Contact</a>
          </div>

      <div className="md:hidden">
        <button id="mobile-menu-button" className="text-white 
        focus:outline-none" onClick={toggleMenu}>
            <svg viewBox='0 0 10 8' width='40'>
              <path d='M1 1h8M1 4h 8M1 7h8' 
                    stroke='white' 
                    stroke-width='1' 
                    stroke-linecap='round'/>
            </svg>
        </button>
      </div>
      {isMenuOpen && (
          <div className='flex flex-col basis-full gap-2 
          items-center text-gray-300 font-semibold'>
              <a href="#about" className='hover:text-red-700'>About</a>
              <a href='#projects' className='hover:text-red-700'>Projects</a>
              <a href='#techs' className='hover:text-red-700'>Tech</a>
              <a href='#contact' className='hover:text-red-700'>Contact</a>
          </div>
      )}

      </nav>
    </>
  )
}

export default Navbar
