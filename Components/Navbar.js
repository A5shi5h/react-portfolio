"use client"
import {Link} from 'react-scroll';
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
        <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}  className='hover:text-red-700'>
            <h1 className='mb-3 px-5'>
            <img 
            className='h-20 w-20 rounded-full cursor-pointer' 
            src="./images/profile.jpg" alt="profile-pic"/>
            </h1></Link>
          <div className='hidden md:flex gap-10 pr-20
          text-white cursor-pointer'>
             <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className='hover:text-red-700'>About</Link>
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500}  className='hover:text-red-700'>Projects</Link>
              <Link 
                to="techs" 
                spy={true} 
                smooth={true} 
                offset={-154} 
                duration={500}  className='hover:text-red-700'>Tech</Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className='hover:text-red-700'>Contact</Link>
              <Link 
                to="demo" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}  className='hover:text-red-700'>Demo</Link>
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
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-250} 
                duration={500}  className='hover:text-red-700'>About</Link>
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-330} 
                duration={500}  className='hover:text-red-700'>Projects</Link>
              <Link 
                to="techs" 
                spy={true} 
                smooth={true} 
                offset={-280} 
                duration={500}  className='hover:text-red-700'>Tech</Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-250} 
                duration={500}  className='hover:text-red-700'>Contact</Link>
              <Link 
                to="demo" 
                spy={true} 
                smooth={true} 
                offset={-300} 
                duration={500}  className='hover:text-red-700'>Demo</Link>
          </div>
      )}

      </nav>
    </>
  )
}

export default Navbar
