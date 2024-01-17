import React from 'react'
import Navbar from '@/Components/Navbar'
import Intro from '@/Components/Intro'
import About from '@/Components/About'
import Projects from '@/Components/Projects'
import Tech from '@/Components/Tech'
import Contact from '@/Components/Contact'

const page = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Intro/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Tech/>
      </div>
      <div>
        <Contact/>
      </div>
    </>
  )
}

export default page
