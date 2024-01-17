"use client"
import React from 'react'
import VideoCarousel from './VideoCarousel';

const About = () => {

  return (
   <>
      <div id="about" className='block w-full sm:flex 
      bg-black border-2 border-black h-auto sm:h-auto'>
        <div className='h-54 w-full sm:w-6/12 sm:pt-24 pt-6 cursor-pointer
        md:pl-8'>
        <VideoCarousel/>
        </div>
       
         <div className='h-15 w-full flex flex-col pt-2
         sm:w-6/12  my-16  mr-10 bg-transparent'>
            <h1 className='flex justify-start pl-10 w-full
            pt-4 text-white text-3xl font-bold'>About Me</h1>   
            <p className='p-10 leading-7 justify-normal
            tracking-tight text-white text-xl'>Hello! I'm Ashish, a passionate 
              and creative web developer based in 
              Sikkim. With a strong background 
              in designing and developing user-centric 
              websites, I love bringing ideas to life on 
              the web.I believe in the power of simplicity 
              and efficiency. My goal is to create web experiences 
              that not only look great but also deliver exceptional 
              performance. Clean code, scalability, and a focus on 
              user experience are at the core of my development 
              philosophy.</p>
          </div>

      </div>
   </>
  );
}

export default About
