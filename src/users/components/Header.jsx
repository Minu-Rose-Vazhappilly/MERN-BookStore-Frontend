
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'




function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken] = useState("")
  const [userDp,setUserDp] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }
  },[])

  return (
    <div>

      <nav className='flex items-center  md:justify-between p-4'>
        <div>
          <img src="./logo.png" alt="" width={"40px"} />
        </div>
        <div className='text-2xl font-bold ms-3'>BookStore</div>
        <div className='hidden md:flex items-center justify-center '>
          <FontAwesomeIcon  icon={faInstagram} />
        <FontAwesomeIcon className='ms-3' icon={faTwitter} />
        <FontAwesomeIcon className='ms-3' icon={faFacebook} />
        {/* login */}
        {
          !token ?
          <Link to='/login'><FontAwesomeIcon className='ms-3' icon={faCircleUser} style={{height:"25px",width:"25px"}} /></Link>
          :
          <div>
            <button>
              <img src={userDp==""?"https://www.pngmart.com/files/23/Profile-PNG-Photo.png":""} alt="" width={'40px'} height={'40px'} />
            </button>
          </div>
        }
        
        
        </div>
      </nav>
      <nav className='bg-gray-800'>
        <div className='md:hidden flex items-center justify-between p-3 text-white'>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
          <Link to='/login'><FontAwesomeIcon className='ms-3' icon={faCircleUser} style={{height:"25px",width:"25px"}} /></Link>
        </div>
        {isOpen && (
          <div className='flex flex-col  justify-center bg-gray-800 text-white md:hidden p-3'>
            <Link className='mb-2' to={'/'}>Home</Link>
            <Link className='mb-2' to={'/allbooks'}>Books</Link>
            <Link className='mb-2' to={'/careers'}>Careers</Link>
            <Link className='mb-2' to={'/contact'}>Contact</Link>
          </div>
        )}
        <nav className='hidden md:flex items-center justify-center  p-3 text-white'>
            <Link  to={'/'}>Home</Link>
            <Link className='ms-4 ' to={'/allbooks'}>Books</Link>
            <Link className='ms-4 ' to={'/careers'}>Careers</Link>
            <Link className='ms-4' to={'/contact'}>Contact</Link>
        </nav>
      </nav>
      
    </div>
  )
}

export default Header