import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'



function AdminSideBar() {
  const [listStatus,setListstatus] = useState(false)
  return (
    <div className='bg-sky-100 flex justify-center items-center flex-col px-23 py-30 '>
     <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{width:"70px",height:"70px"}}>
      <FontAwesomeIcon icon={faUser} />
     </div>
     <p className='mt-2 text-xl'>Username</p>
     <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden '><FontAwesomeIcon icon={faBars} style={{color:"blue"}}/></button>
     <div className={listStatus?'block mt-2':'md:block hidden mt-2'}>
       <ul className=''  style={{ listStyleType: "circle" }}>
          <li><FontAwesomeIcon icon={faBook} />Home</li>
          <li><FontAwesomeIcon icon={faBook} />AllBooks</li>
          <li><FontAwesomeIcon icon={faBagShopping} />Careers</li>
          <li><FontAwesomeIcon icon={faScrewdriverWrench} />Settings</li>
        </ul>
     </div>
    </div>
  )
}

export default AdminSideBar