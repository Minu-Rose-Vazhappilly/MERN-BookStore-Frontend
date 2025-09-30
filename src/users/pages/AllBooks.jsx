import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function AllBooks() {
  const [listStatus,setListstatus] = useState(false)
  return (
    <div>
      <Header/>
     
     <div className="flex justify-center md:items-center flex-col my-5 p-3">
          <h1 className='text-3xl'>Collections</h1>
          <div className="flex">
            <input type="text" className="p-2 text-black rounded border border-gray-200 w-100 placeholder-gray-600" placeholder='Search by Title' />
            <button className='bg-blue-500 w-20'>Search</button>
          </div>
     </div>
     <div className="md:grid grid-cols-4 p-5 md:px-20 mb-10">

      <div className="col-span-1">
       <div className='flex justify-between '>  
          <h1 className='text-xl font-semibold'>Filter</h1>
          <button onClick={()=>setListstatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
       </div>
        <div className={listStatus?'block':'md:block hidden'}>
          <div className='mt-3'>
            <input type="radio" id='Literature' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Literature Fiction</label>
          </div>
          <div>
            <input type="radio" id='philosphy' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Philosophy</label>
          </div>
          <div>
            <input type="radio" id='romanace' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Romance</label>
          </div>
          <div>
            <input type="radio" id='mystery' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Mystery/Thriller</label>
          </div>
          <div>
            <input type="radio" id='horror' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Horror</label>
          </div>
          <div>
            <input type="radio" id='autobio' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Auto/Biography</label>
          </div>
          <div>
            <input type="radio" id='self-help' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Self-Help</label>
          </div>
          <div>
            <input type="radio" id='Politics' name='filter'/>
            <label className='ms-3' htmlFor="Literature">Politics</label>
          </div>
          
        </div>
      </div>
      <div className="col-span-3">
        <div className="md:grid grid-cols-4">
          <div className="shadow rounded p-3 mx-4">
            <img  width={"100%"} height={"300px"} src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" />
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center '>Author</h1>
            <h1 className='text-2xl'>Title</h1>
            <Link to={'/books/:id/view'} className='bg-blue-500 rounded px-4 py-1'>View Book</Link>
            </div>
          </div>
          <div className="shadow rounded p-3 mx-4">
            <img  width={"100%"} height={"300px"} src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" />
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center '>Author</h1>
            <h1 className='text-2xl'>Title</h1>
            <Link to={'/books/:id/view'} className='bg-blue-500 rounded px-4 py-1'>View Book</Link>
            </div>
          </div>
          <div className="shadow rounded p-3 mx-4">
            <img  width={"100%"} height={"300px"} src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" />
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center '>Author</h1>
            <h1 className='text-2xl'>Title</h1>
            <Link to={'/books/:id/view'} className='bg-blue-500 rounded px-4 py-1'>View Book</Link>
            </div>
          </div>
          <div className="shadow rounded p-3 mx-4">
            <img  width={"100%"} height={"300px"} src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" />
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center '>Author</h1>
            <h1 className='text-2xl'>Title</h1>
            <Link to={'/books/:id/view'} className='bg-blue-500 rounded px-4 py-1'>View Book</Link>
            </div>
          </div>
        </div>
      </div>
     </div>
     
     
      <Footer/>
      </div>
  )
}

export default AllBooks