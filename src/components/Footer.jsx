import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className=' text-white'>
      <div className=' p-3 md:grid grid-cols-3 md:gap-9 bg-gray-800 '>
        <div className='mb-6'>
          <h1 className='font-bold text-xl justify-align'>ABOUT US</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur    adipisicing elit.Sit fuga illum doloribus  libero nihil ad non  doloremque tenetur!  Velit  quasi quia  quo  officiis  in,  cumque  facere  corporis esse! Tenetur, nobis?</p>
        </div>
        <div className='mb-6'>
          <h1 className='font-bold text-xl'>NEW LETTER</h1>
          <p className='mb-3'>Stay updated with our latest trends</p>
          <div className="flex bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-black rounded-l"
            />
            <button className="bg-yellow-400 px-4 rounded-r">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div >
        <div className='mb-10'>
          <h1 className='font-bold text-xl'>FOLLOW US</h1>
          <p className='mb-3'>Let us be social</p>
            <div className='flex '>
              <FontAwesomeIcon  icon={faInstagram} />
                      <FontAwesomeIcon className='ms-3' icon={faTwitter} />
                      <FontAwesomeIcon className='ms-3' icon={faFacebook} />
                      <FontAwesomeIcon className='ms-3' icon={faLinkedin} />
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-black p-2'>
        <p>Copyright © 2023 All rights reserved | This website is made with 💖 by Minu Rose Vazhappilly</p>
      </div>
    </div>
  )
}

export default Footer