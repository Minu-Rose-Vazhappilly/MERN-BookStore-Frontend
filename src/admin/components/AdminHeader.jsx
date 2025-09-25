import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function AdminHeader() {
  return (
    <>
      <div className='flex justify-between p-3'>
        <div className='flex justify-center items-center '>
          <img width={"50px"} height={"50px"} src="./logo.png" alt="" />
          <h1 className='ms-2'>BOOKSTORE</h1>
        </div>
        <button className='flex items-center justify-center border border-black px-1 py-2 rounded'>
          
               <FontAwesomeIcon icon={faPowerOff} /> LOGOUT 
          
        </button>
      </div>
      <div className='bg-black flex md:items-center justify-center'>
            <p className='text-white'>Welcome,  Admin!    You're all set to manage and monitor the system. Let’s get to work!</p>
      </div>
    </>
  )
}

export default AdminHeader