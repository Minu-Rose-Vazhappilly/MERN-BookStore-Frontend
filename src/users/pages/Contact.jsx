import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'



function Contact() {
  return (
    <div>
      <Header />
      <div className='p-10'>
        <div className='flex justify-center items-center flex-col p-5 md:mx-35  '>
          <h1 className='text-2xl '>Contact</h1>
          <p className='md:text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ipsa minima ipsum maxime eos beatae? Rerum perferendis culpa, maiores, temporibus soluta ad id nihil molestiae ab eius magni magnam voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione porro aliquam doloribus perspiciatis iure itaque eligendi, dolorem ipsam, corporis distinctio quisquam modi possimus! Sed incidunt aperiam minus cum accusamus.</p>
        </div>
        <div className='md:grid grid-cols-3 gap-10 md:mx-20 '>
          <div className='my-10 flex justify-center items-center'>
            <div style={{ height: "35px", width: "35px" }} className=' bg-gray-300 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h1 className='md:ms-1'>123,Main Street,Apt 4B,
              Anytown CA 91234
            </h1>
          </div>
          <div className='my-10 flex  items-center'>
            <div style={{ height: "35px", width: "35px" }} className=' bg-gray-300 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h1 className=' md:text-center md:ms-2'>+91 6282693587</h1>
          </div>
          <div className='my-10 flex  items-center'>
            <div style={{ height: "35px", width: "35px" }} className=' bg-gray-300 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h1 className=' md:text-center md:ms-2'>bookstore@gmail.com</h1>
          </div>

        </div>
        <div className='md:mx-25'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  flex items-center ">
            <div className="bg-gray-300 rounded-lg flex flex-col justify-center items-center py-5  w-full max-w-[350px] aspect-[5/4] mx-auto " >
              <h1 className='text-center mb-8 mt-3'>Send me message</h1>
              <form action="" className="w-full px-5  ">
                <input
                  type="text"
                  className="w-full bg-white p-1  rounded"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full bg-white p-1 mt-1 rounded"
                  placeholder="Email ID"
                />
                <textarea
                  type="text"
                  rows={"3"}
                  className="w-full bg-white p-1 mt-1 rounded"
                  placeholder="Message"
                />
              </form>
              <Link className="bg-black text-white md:w-80 w-64 text-center mb-3 p-1 mt-3 rounded-lg">Send</Link>
            </div>
            <div className='w-full max-w-[350px] aspect-[5/4] md:mx-auto '><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.54195915393!2d76.30948081921879!3d10.008897991762499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758719082801!5m2!1sen!2sin" className='w-full h-full rounded-lg' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact