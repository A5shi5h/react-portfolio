import React from 'react'

const Projects = () => {
  return (
    <>
     <div id="projects" className='w-full
     block bg-black h-auto'> 
      <div className='flex w-full pl-10 text-4xl 
      font-semibold sm:pt-6 text-white'>
        <h1>Projects</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 gap-8 p-8 pt-8'> 
        <div className='shadow-md shadow-black rounded-md bg-black'>
          <div>
            <img src='./images/s1.png'
            className='h-[150px] w-full'/>
          </div>
            <h1 className='pt-4 text-xl text-white
            bg-black font-bold'>Student Management System</h1>
                <div className='text-left pt-2 text-white
                bg-black font-semibold pb-2'>
                    <p>HTMl , CSS , Springboot , PostGresQL , JavaScript</p>
                </div>
        </div>
        <div className='shadow-md shadow-black rounded-md bg-black'>
          <div>
            <img src='./images/s2.png'
            className='h-[150px] w-full'/>
          </div>
            <h1 className='pt-4 text-xl text-white
            bg-black font-bold'>Nike Clone</h1>
                <div className='text-left pt-2 text-white
                bg-black font-semibold pb-2'>
                    <p>HTMl , CSS , TailwindCSS</p>
                </div>
        </div>
        <div className='shadow-md shadow-black rounded-md bg-black'>
          <div>
            <img src='./images/s3.png'
            className='h-[150px] w-full'/>
          </div>
            <h1 className='pt-4 text-xl text-white
            bg-black font-bold'>Timber Valley Campsite</h1>
                <div className='text-left pt-2 text-white
                bg-black font-semibold pb-2'>
                        <p>HTMl , CSS , JavaScript</p>
                </div>
        </div>
        <div className='shadow-md shadow-black rounded-md bg-black'>
          <div>
            <img src='./images/s4.png'
            className='h-[150px] w-full'/>
          </div>
            <h1 className='pt-4 text-xl text-white
            bg-black font-bold'>Euphoria Singtam Website</h1>
                <div className='text-left pt-2 text-white
                bg-black font-semibold pb-2'>
                            <p>HTMl , CSS </p>
                </div>
        </div>         
      </div>
    </div>
    </>
  )
}

export default Projects
