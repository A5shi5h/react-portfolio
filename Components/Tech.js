import React from 'react'

const Tech = () => {
  return (
    <>
     <div id='techs' className='block w-full pt-8 bg-black'>
       <h1 className='font-semibold text-4xl flex w-full pt-6
      text-white pl-10'>Tech Stack</h1>
       <div className='grid lg:grid-cols-3 md:grid-cols-2
       sm:grid-cols-2 grid-cols-2 pt-10 gap-8 p-6'>
         <div className='h-48 bg-slate-800 rounded-md hover:bg-transparent
         hover:border-2'>
            <img className='h-48 w-full object-contain' 
            src='./images/html.png' alt=''/>
            <div className='h-2 mt-1 w-[80%] bg-green-600'>

            </div>
         </div>
         <div className='h-48 bg-slate-800 rounded-md hover:bg-transparent
         hover:border-2'>
           <img className='h-48 w-full object-contain'
           src='./images/css.png' alt=''/>
           <div className='h-2 mt-1 w-[60%] bg-green-600'>

            </div>
         </div>
         <div className='h-48 bg-slate-800 rounded-md hover:bg-transparent
         hover:border-2'>
           <img className='h-48 w-full object-contain'
           src='./images/js.png' alt=''/>
           <div className='h-2 mt-1 w-[50%] bg-green-600'>

            </div>
         </div>
         <div className='h-48 bg-slate-800 rounded-md hover:bg-transparent
         hover:border-2'>
           <img className='h-48 w-full object-contain'
           src='./images/react.png' alt=''/>
           <div className='h-2 mt-1 w-[40%] bg-green-600'>

            </div>
         </div>
         <div className='h-48 bg-slate-800 rounded-md hover:bg-transparent
         hover:border-2'>
           <img className='h-48 w-full object-contain'
           src='./images/tailwind.png' alt=''/>
           <div className='h-2 mt-1 w-[60%] bg-green-600'>

            </div>
         </div>
       </div>
    </div>
    </>
  )
}

export default Tech
