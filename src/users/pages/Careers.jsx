import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'



function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='p-5'>
        <div className='flex justify-center  flex-col  py-5'>
          <h1 className='text-xl text-center '>Careers</h1>
          <p className='md:text-center md:mx-40 text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto odio nesciunt commodi soluta ipsum, asperiores doloremque excepturi quasi delectus! Harum repudiandae assumenda provident, placeat unde nemo ad rerum quidem dolor.
          </p>
          <p className='md:mx-25 mt-5'>Current Opennings</p>

        </div>

        <div className='flex justify-center md:items-center flex-col '>
          <div className='flex '>
            <input type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
            <button className='bg-green-500 p-2 round-r'>Search</button>
          </div>
          <div className="w-full md:max-w-[800px] md:mx-40 shadow p-4 mt-4">
            <div className='flex justify-between'><h1>  Job Title</h1>
              <button onClick={() => setModalStatus(true)} className='bg-blue-500 rounded px-3 py-2 text-white'>APPLY <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
            <div><hr className='border border-gray-300' /></div>
            <h1><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC", }} /> Location</h1>
            <h1>Job Type:Senior Level</h1>
            <h1>Qualification:Mtech/Btech/BCA/MCA</h1>
            <h1>Experience:5-7</h1>
            <h1>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus reprehenderit ipsam corrupti iure, fugiat molestias doloremque magnam architecto placeat atque vero asperiores sapiente perspiciatis incidunt, nemo pariatur nam fugit?</h1>
          </div>
        </div>


      </div>
      {
        modalStatus &&
        <div className='relative z-10 ' >
          <div className='bg-gray-500/75 fixed inset-0 transition-opacity'>
            <div className="flex justify-center items-center min-h-screen">
              <div className='bg-white rounded md:w-150 w-100'>
                {/* modal header */}
                <div className='bg-black text-white flex justify-between items-center rounded'>
                  <h3>Application form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                </div>
                {/* modal body */}
                <div className="relative p-5">
                  <div className="md:grid grid-cols-2 gap-3 ">
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Qualification"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Email Id"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full p-2 border rounded placeholder-gray-600 text-black"
                      />
                    </div>
                    <div className='mb-3 col-span-2 '><textarea placeholder='coverLetter' name="" className=' w-full p-2 border rounded placeholder-gray-600 text-black' id=""></textarea>
                    </div>
                    <div className='mb-3 col-span-2 flex flex-col text-gray-600'>
                      <label htmlFor="">Resume</label>
                      <input
                        type="file"
                        
                        className="w-full  border rounded file:bg-gray-400 file:p-2 file:text-white "
                      />
                    </div>
                  </div>
                  
                </div>
                {/* modal footer */}
                <div className='bg-gray-250 p-2 w-full flex justify-end'>
                      <button className='py-2 px-3 rounded bg-black text-white'>Reset</button>
                      <button className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      }


      <Footer />
    </>
  )
}

export default Careers