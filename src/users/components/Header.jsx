
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import SEVERURL from '../../services/serverURL'




function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken] = useState("")
  const [userDp,setUserDp] = useState("")
  const [dropDownStatus,setDropDownStatus] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }
  },[token])

  const logout = ()=>{
    sessionStorage.clear()
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate('/')
    
  }
  console.log(userDp);
  

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
          <div className='relative inline-block text-left'>
           <div>
              <button onClick={()=>setDropDownStatus(!dropDownStatus)} className='inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-300'>
                <img style={{borderRadius:"50%"}} className='mx-2' src={userDp==""?"https://www.pngmart.com/files/23/Profile-PNG-Photo.png":userDp.startsWith("https://lh3.googleusercontent.com/")?userDp:`${SEVERURL}/uploads/${userDp}`} alt="user" width={'40px'} height={'40px'} />
              </button>
              {
                dropDownStatus &&
                <div className='absolute right-0 z-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden'>
                <div className="py-1">
                  <Link className='block px-4 py-2 text-sm text-gray-700' to={'/profile'}><FontAwesomeIcon className='me-3' icon={faAddressCard} />Profile</Link>
                  <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</button>
                </div>
              </div>
              }
           </div>
          </div>
        }
        
        
        </div>
      </nav>
      <nav className='bg-gray-800'>
        <div className='md:hidden flex items-center justify-between p-3 text-white'>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
          {
          !token ?
          <Link to='/login'><FontAwesomeIcon className='ms-3' icon={faCircleUser} style={{height:"25px",width:"25px"}} /></Link>
          :
          <div className='relative inline-block text-left'>
           <div>
              <button onClick={()=>setDropDownStatus(!dropDownStatus)} className='inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-300'>
                <img style={{borderRadius:"50%"}} className='mx-2' src={userDp==""?"https://www.pngmart.com/files/23/Profile-PNG-Photo.png":userDp.startsWith("https://lh3.googleusercontent.com/")?userDp:`${SEVERURL}/uploads/${userDp}`} alt="user" width={'40px'} height={'40px'} />
              </button>
              {
                dropDownStatus &&
                <div className='absolute right-0 z-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden'>
                <div className="py-1">
                  <Link className='block px-4 py-2 text-sm text-gray-700' to={'/profile'}><FontAwesomeIcon className='me-3' icon={faAddressCard} />Profile</Link>
                  <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700'><FontAwesomeIcon className='me-2' icon={faPowerOff} />Logout</button>
                </div>
              </div>
              }
           </div>
          </div>
        }
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