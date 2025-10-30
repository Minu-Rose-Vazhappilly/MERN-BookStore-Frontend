import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import { Link } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import JobAdd from '../components/JobAdd'
import { getAllJobAPI, removeJobAPI } from '../../services/allAPI'
import { useEffect } from 'react'


function CareerAdmin() {
  const [canvas,setCanvas] =  useState(false)
  const [jobListStatus,setJobListStatus] = useState(true)
  const [listApplicationStatus,setApplicationStatus] = useState(false)
  const [allJobs,setAllJobs] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const [deleteJobResponse,setDeleteJobResponse] = useState({})

  console.log(allJobs);
  

  useEffect(()=>{
    if(jobListStatus == true){
      getAllJobs()
    }
  },[searchKey,deleteJobResponse])

  const getAllJobs  = async ()=>{
    try{
      const result = await getAllJobAPI(searchKey)
      if(result.status == 200){
        setAllJobs(result.data)
      }

    }catch(err){

    }
  }

  const removeJob = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
                "Authorization":`Bearer ${token}`
              }

          try{
              const result = await removeJobAPI(id,reqHeader)
              if(result.status == 200){
                setDeleteJobResponse(result.data)
              }else{
                console.log(result);
                
              }
          }
          catch(err){
            console.log(err);
            

          }
    }
  }
  return (

     <div>
      <AdminHeader />
      <div className='md:grid grid-cols-4'>
        <div className='col-span-1'><AdminSideBar /></div>

        <div className='col-span-3 p-8 '>
        <div>
      

      <div className="col-span-3  ">
        <div className="p-10">
          <h1 className="text-3xl text-center font-bold">Careers</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center border-b">
          <p
            onClick={() => {
              setJobListStatus(true);
              setApplicationStatus(false);
            }}
            className={`p-4 cursor-pointer ${
              jobListStatus
                ? "text-blue-500 border-t border-l border-r border-gray-200"
                : "text-gray-600"
            }`}
          >
            Job Post
          </p>

          <p
            onClick={() => {
              setJobListStatus(false);
              setApplicationStatus(true);
            }}
            className={`p-4 cursor-pointer ${
              listApplicationStatus
                ? "text-blue-500 border-t border-l border-r border-gray-200"
                : "text-gray-600"
            }`}
          >
            View Applicant
          </p>
        </div>

        {/* Content */}
        <div >
          {
          jobListStatus && 
          <div>
            <div className='md:flex justify-between items-center my-5'>
            
              <div className='flex'>
                <input onChange={e=>setSearchKey(e.target.value)} type="text" className='round-l border border-gray-300 p-2 focus-outline:none' placeholder='Job title' />
              <button className='bg-green-500 p-2 round-r'>Search</button>
              </div>
           
            
              <div>
              <JobAdd />
            </div>
            </div>
            <div>
               {
                allJobs?.length>0?
                allJobs.map(job=>(
                <div key={job?._id} className="w-full md:max-w-[800px]  shadow p-4 mt-4">
                          <div className='flex justify-between'><h1>  {job?.title}</h1>
                            <button onClick={() => removeJob(job?._id)} className='bg-red-500 rounded px-3 py-2 text-white'>Delete <FontAwesomeIcon icon={faTrash} /></button>
                          </div>
                          <div><hr className='border border-gray-300' /></div>
                          <h1><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC", }} /> {job?.location}</h1>
                          <h1>Job Type:{job?.jobType}</h1>
                          <h1>Qualification:{job?.qualification}</h1>
                          <h1>Salary:{job?.salary}</h1>
                          <h1>Experience:{job?.experience}</h1>
                          <h1>Description: {job?.description}</h1>
                        </div>))
                        :
                        <p>No Job Openings...</p>
                
                }
            </div>
          </div>
            }
          {listApplicationStatus && <div className='p-10 overflow-x-hidden'>
            <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SLNO</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E-mail</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Front end DEveleper</td>
                    <td className='border border-gray-500 p-3 text-center'>Max Miller</td>
                    <td className='border border-gray-500 p-3 text-center'>BCA</td>
                    <td className='border border-gray-500 p-3 text-center'>max@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>6282693587</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, asperiores culpa amet laudantium sint nulla aut suscipit voluptatem, ipsa itaque vitae enim officiis maxime minima repellat, aliquam nobis consequuntur ullam?</td>
                    <td className='border border-gray-500 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                  </tr>
                </tbody>
            </table>
            </div>}
        </div>
      </div>
    </div>

          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareerAdmin