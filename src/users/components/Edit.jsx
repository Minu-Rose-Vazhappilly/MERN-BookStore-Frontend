import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import SEVERURL from '../../services/serverURL'
import { ToastContainer,toast } from 'react-toastify'
import { updateUserProfileAPI } from '../../services/allAPI'

function Edit() {
    const [offCanvasStatus,setOffCanvasStatus] = useState(false)
    const [userDetails,setUserDetails] = useState({username:"",password:"",cpassword:"",bio:"",profile:"",role:""})
    const [token,setToken] = useState("")
    const [existingProfile,setExistingProfile] = useState("")
    const [preview,setPreview] = useState("")

    console.log(userDetails);
    

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            const userToken = sessionStorage.getItem("token")
            setToken(userToken)
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
            setExistingProfile(user.profile)
        }
    },[])

    const handlePictureUpload = (e)=>{
        setUserDetails({...userDetails,profile:e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleReset = ()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
        setExistingProfile(user.profile)
        setPreview("")
    }

    const handleUpdate = async()=>{
        const {username,password,bio,role,cpassword,profile} = userDetails
        if(!username || !password || !cpassword || !bio){
            toast.info("Please fill the form completely")
        }else{ 
            if(password != cpassword){
            toast.warning("Password and confirm password must be same")
        }else{
            const reqHeader = {
            "Authorization":`Bearer ${token}`
          }
          const reqBody = new FormData()
          if(preview){
            for(let key in userDetails){
                reqBody.append(key,userDetails[key])
            }
            const result = await updateUserProfileAPI(reqBody,reqHeader)
            if(result.status == 200){
                toast.success("Profile updated successfully")
                sessionStorage.setItem("user",JSON.stringify(result.data))
                handleReset()
                setOffCanvasStatus(false)
            }else{
                toast.error("Something went wrong")
                console.log(result);
                
            }
          }else{
            const result = await updateUserProfileAPI({username,password,bio,role,profile:existingProfile,
            },reqHeader)
            if(result.status == 200){
                toast.success("Profile updated successfully")
                sessionStorage.setItem("user",JSON.stringify(result.data))
                handleReset()
                setOffCanvasStatus(false)
            }else{
                toast.error("Something went wrong")
                console.log(result);
                
            }
          }

        }
    }
    }

  return (
    <div>
        <button onClick ={()=>setOffCanvasStatus(true)} className='text-blue-600 border-blue rounded p-3 hover:text-white'><FontAwesomeIcon icon={faPen}/>Edit</button>
        {/* offcanvas */}
        { offCanvasStatus &&
            <div>
            <div className='fixed inset-0 bg-gray-500/75
            w-full h-full transition-opacity'></div>
            <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
                <div className="bg-gray-900 px-3 py-3 flex justify-between text-white text-2xl">
                    <h1>Edit User Profile</h1>
                    <FontAwesomeIcon onClick ={()=>setOffCanvasStatus(false)} icon={faXmark}/>
                </div>
                <div className="flex justify-center items-center flex-col my-5">
                    <label htmlFor="profilePic">
                        <input onChange={e=>handlePictureUpload(e)} type="file" id='profilePic' style={{display:'none'}} />
                        {
                            existingProfile==""?
                            <img className='z-52' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview? preview:"https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" } alt="profile" />
                            : existingProfile.startsWith("https://lh3.googleusercontent.com/")?
                            <img className='z-52' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview?preview:existingProfile} alt="profile" />
                            :
                            <img className='z-52' style={{width:"150px",height:'150px',borderRadius:'50%'}} src={preview?preview:`${SEVERURL}/uploads/${existingProfile}`} alt="profile" />

                        }
                        <button className="bg-yellow-300 z-53 fixed text-white py-3 px-4 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FontAwesomeIcon icon={faPen}/></button>
                    </label>
                    <div className="mt-10 mb-3 w-full px-5">
                        <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" className='w-full border border-gray-300 placeholder-gray-300 p-2 rounded ' placeholder='Username'/>
                    </div>
                    <div className="mb-3 w-full px-5">
                        <input  value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="text" className='w-full border border-gray-300 placeholder-gray-300 p-2 rounded ' placeholder='Password'/>
                    </div>
                    <div className="mb-3 w-full px-5">
                        <input  value={userDetails.cpassword} onChange={e=>setUserDetails({...userDetails,cpassword:e.target.value})} type="text" className='w-full border border-gray-300 placeholder-gray-300 p-2 rounded ' placeholder='Confirm Password'/>
                    </div>
                    <div className="mb-3 w-full px-5">
                        <textarea  value={userDetails.bio}
                        onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} name="" id="" className='w-full border border-gray-300 placeholder-gray-300 p-2 rounded ' placeholder='Bio'></textarea>
                    </div>
                    <div className="flex justify-end w-full px-5">
                        <button onClick={handleReset} className='bg-amber-600 text-white rounded  border py-3 px-4 hover:text-amber-600 hover:border-amber-600 hover:bg-white me-3'>Reset</button>
                         <button onClick={handleUpdate} className='bg-green-600 text-white rounded  border py-3 px-4 hover:text-green-600 hover:border-green-600 hover:bg-white'>Update</button>
                    </div>
                </div>
            </div>
        </div>}
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

export default Edit