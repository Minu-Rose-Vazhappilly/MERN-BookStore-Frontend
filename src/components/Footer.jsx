import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <div className=' text-white'>
      <div className='grid grid-cols-1 gap-10 p-3 md:flex justify-between items-center bg-cyan-900 '>
        <div>
          <h1 className='font-bold text-xl justify-align'>ABOUT US</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur  <br />  adipisicing elit.Sit fuga illum doloribus <br /> libero nihil ad non  doloremque tenetur!  Velit <br /> quasi quia  quo  officiis  in,  cumque  facere <br /> corporis esse! Tenetur, nobis?</p>
        </div>
        <div>
          <h1 className='font-bold text-xl'>NEW LETTER</h1>
          <p className='mb-3'>Stay updated with our latest trends</p>
          <div className='bg-white' style={{width:"250px",height:"30px"}}>

          </div>
        </div>
        <div className='mb-10'>
          <h1 className='font-bold text-xl'>FOLLOW US</h1>
          <p className='mb-3'>Let us be social</p>
            <div className='flex '>
              <FontAwesomeIcon  icon={faInstagram} />
                      <FontAwesomeIcon className='ms-3' icon={faTwitter} />
                      <FontAwesomeIcon className='ms-3' icon={faFacebook} />
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