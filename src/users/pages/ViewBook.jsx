import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function ViewBook() {
  const [modalStatus,setModalStatus] = useState(false)
  return (
    <div>
      <Header/>
      <div className='md:m-10 m-5'>ViewBook
        <div className="border p-5 shadow border-gray-200">
          <div className='md:grid grid-cols-4 gap-x-10'>
            <div className="col-span-1">
              <img className='w-full' src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="book" />
            </div>
            <div className='col-span-3'>
                <div className='flex justify-between'>
                  <h1 className="text-xl font-bold r">Title</h1>
                  <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
                </div>
                <p className='my-3 text-blue-700'>Author</p>
                <div className='md:grid grid-cols-3 gap-5 my-10'>
                  <p className='font-bold'>Publisher:demo</p>
                  <p className='font-bold'>Language:demo</p>
                  <p className='font-bold'>No.og Pages</p>
                  <p className='font-bold'>Seller Mail:demo</p>
                  <p className='font-bold'>Real Price:demo</p>
                  <p className='font-bold'>ISBN:demo</p>
                </div>
                <div className="md:my-10 my-4">
                  <p className='font-bold text-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, atque sapiente! Harum, eos maxime tenetur officia dignissimos inventore nobis unde nam asperiores delectus ad quibusdam rem quam molestias! Cupiditate, praesentium.
                  </p>
                </div>
                <div className='flex justify-end'>
                      <Link to={'/allbooks'} className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</Link>
                      <button className='bg-green-900 text-white ms-5 p-2 rounded'>Buy $123</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      {
        modalStatus &&
        <div className='relative z-10 overflow-y-auto' onClick={()=>setModalStatus(false)}>
          <div className='bg-gray-500/75 fixed inset-0 transition-opacity'>
            <div className="flex justify-center items-center min-h-screen">
                <div className='bg-white rounded md:w-250 w-100 '>
                  <div className='bg-black text-white flex justify-between items-center rounded'>
                    <h3>Books Images</h3>
                    <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
                  </div>
                  <p className='text-blue-600 my-5 ml-5'>
                    <FontAwesomeIcon icon={faCamera} className='me-2'/>
                    Camera click of the book in the hand of seller
                  </p>
                  <div className='md:flex flex-wrap my-4 mx-1 '>
                      {/* duplicate images */}
                      <img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg"  alt="booka image" width={'250px'} height={'250px'} className='mx-1'/>
                      <img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg"  alt="booka image" width={'250px'} height={'250px'} className='mx-1'/>
                      <img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg"  alt="booka image" width={'250px'} height={'250px'} className='mx-1'/>
                      
                  </div>
                </div>
            </div>
          </div>
      </div>

      }
      
      <Footer/>
    </div>
  )
}

export default ViewBook