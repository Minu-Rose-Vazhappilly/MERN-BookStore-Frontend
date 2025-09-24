import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons'



function Careers() {
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
            <button className='bg-blue-500 rounded px-3 py-2 text-white'>APPLY <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
            <div><hr className='border border-gray-300'/></div>  
            <h1><FontAwesomeIcon icon={faLocationDot} style={{color: "#74C0FC",}} /> Location</h1>
            <h1>Job Type:Senior Level</h1>
            <h1>Qualification:Mtech/Btech/BCA/MCA</h1>
            <h1>Experience:5-7</h1>
            <h1>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus reprehenderit ipsam corrupti iure, fugiat molestias doloremque magnam architecto placeat atque vero asperiores sapiente perspiciatis incidunt, nemo pariatur nam fugit?</h1>
          </div> 
        </div>
        
        
         </div>
        
      

      <Footer />
    </>
  )
}

export default Careers