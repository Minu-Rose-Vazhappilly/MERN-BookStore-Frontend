import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faScrewdriverWrench, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SEVERURL from '../../services/serverURL'



function AdminSideBar() {
  const {adminEditResponse,setAdminEditResponse} = useContext(adminUpdateContext)
  const [listStatus,setListstatus] = useState(false)
  const [dp,setDp] = useState("")
  const [adminName,setAdminName] = useState("")


  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.profile)
      setAdminName(user.username)
    }
  },[adminEditResponse])

  return (
    <div className='bg-sky-100 flex justify-center items-center flex-col px-25 py-30 md:min-h-screen '>
     <div className='bg-gray-400 rounded-full text-white flex justify-center items-center text-3xl' style={{width:"70px",height:"70px"}}>
      {/* <FontAwesomeIcon icon={faUser} /> */}
      <img style={{width:"70px",height:'70px',borderRadius:'50%'}} src={dp==""?"https://www.pngmart.com/files/23/Profile-PNG-Photo.png":`${SEVERURL}/uploads/${dp}`} alt="" />
     </div>
     <p className='mt-2 text-xl'>{adminName}</p>
     <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden '><FontAwesomeIcon icon={faBars} style={{color:"blue"}}/></button>
     <div className={listStatus ? 'block mt-2' : 'md:block hidden mt-2'}>
        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-dashboard'}>
              <FontAwesomeIcon icon={faBook} />
              Home
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-resources'}>
              <FontAwesomeIcon icon={faBook} />
              AllBooks
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-careers'}>
              <FontAwesomeIcon icon={faBagShopping} />
              Careers
            </Link>
        </div>

        <div className="mt-3 flex items-center gap-x-2">
          <Link to={'/admin-settings'}>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Settings
            </Link>
        </div>

      </div>
    </div>
  )
}

export default AdminSideBar