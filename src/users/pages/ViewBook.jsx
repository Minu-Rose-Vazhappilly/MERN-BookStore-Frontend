import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function ViewBook() {
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
                  <button className='text-gray-400'><FontAwesomeIcon icon={faEye}/></button>
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
                      <button className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</button>
                      <button className='bg-green-900 text-white ms-5 p-2 rounded'>Buy $123</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ViewBook