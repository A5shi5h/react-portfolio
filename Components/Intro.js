
const Intro = () => {
 
  return (
    <>
      <div className='flex bg-black text-white
      h-64 w-full sm:h-[400px]'>
      <img src="./images/img3.jpg"
        className="object-cover w-full opacity-20"/>
        <h1 className='flex absolute text-2xl md:text-3xl 
      lg:text-4xl xl:text-5xl font-bold justify-center 
      w-full pt-24 font-sans'>My Portfolio</h1>
      <p className='flex absolute font-monserrate
      justify-center pt-40 w-full md:text-3xl 
      lg:text-4xl xl:text-5xl font-thin
      '>I am a Web Developer</p>
      </div>
    </>
  )
}

export default Intro
