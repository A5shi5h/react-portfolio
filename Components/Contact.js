import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import '../app/globals.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='bg-black pt-10'>
      <h1 className='text-3xl text-white
      font-bold text-center'>Contact On</h1>
      <h2 className='text-white text-center'>You can check out my socials below</h2>
       <div className='flex w-full justify-center 
        pt-4 pb-4'>
            <Link href='https://github.com/A5shi5h'>
                <FontAwesomeIcon icon={faGithub}
                className='h-10 text-white pr-2 
                hover:text-red-700'/>
            </Link>
            <Link href='https://www.linkedin.com/in/
            ashish-lamichaney-63b642234/'>
                <FontAwesomeIcon icon={faLinkedin}
                className='h-10 text-white rounded pr-2 
                hover:text-red-700'/>
            </Link>
            <Link href='https://www.gmail.com'>
                <FontAwesomeIcon icon={faGoogle}
                className='h-10 text-white pr-2 hover:text-red-700'/>
            </Link>
            <Link href='https://www.instagram.com/coders_dungeon?igshid=0GQ5ZDc20Dk2ZA=='>
                <FontAwesomeIcon icon={faInstagram}
                className='h-10 text-white hover:text-red-700'/>
            </Link>
       </div>
    </div>
  )
}

export default Contact
