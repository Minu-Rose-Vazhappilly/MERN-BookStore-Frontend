import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'


function Auth({register}) {
  const [viewPasswordStatus,setViewPasswordStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({username:"",email:"",password:""})
  // console.log(userDetails);

  const handleRegister = ()=>{
    console.log("Inside handleRegister");
    const {username,email,password} = userDetails
    if(!username || !email || !password){
        toast.info("Please fill the form completely")
    }else{
      toast.success("Proceed to API CALL")
    } 
    
  }
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("https://wallpapers.com/images/hd/flower-design-background-tvmxzdq2133d4on2.jpg")] bg-cover bg-center '>
          <div className='p-10'>
            <h1 className='text-3xl font-bold'>BOOK STORE</h1>
          </div>
          <div style={{width:"500px"}} className='bg-black text-white p-5  my-5 flex justify-center items-center flex-col'>
            <div style={{width:"100px",height:'100px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>
            <h1 className='text-2xl'>{register?"Register":"Login"}</h1>
            {
              register && 
               <form className='my-3 w-full'>
                <input type="text" value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} placeholder='User Name' className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
             </form>
            }
            <form className='my-3 w-full'>
                <input type="text" placeholder='Email ID' value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} className='w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
            </form>
            <form className='my-3 w-full flex items-center'>
                <input type={viewPasswordStatus?"text":"password"} placeholder='Password' value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}  className=' w-full bg-white p-2 placeholder-gray-500 rounded text-black' />
                { !viewPasswordStatus ?
                    <FontAwesomeIcon style={{marginLeft:"-30px"}} icon={faEye} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-500 cursor-pointer'/>
                    :
                <FontAwesomeIcon style={{marginLeft:"-30px"}} icon={faEyeSlash} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-500 cursor-pointer'/>
                }
                
            </form>
            <div className='flex justify-between p-4 w-full'>
                  <p className='text-sm text-orange-300'>Never share your password with others</p>
                  <button className='text-sm underline'> Forget Password</button>
            </div>
            <div className='text-center w-full'>
              {
                register ?
                  <button type='button' className='bg-green-700 p-2 w-full rounded' onClick={handleRegister}>Register</button>
                  :
                  <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            <div>
              {
              register?
              <p className='text-blue-600'>Are You a Alraedy a User?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
              :
              <p className='text-blue-600'>Are you a  New User? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
            }
            </div>
          </div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default Auth