import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img width={"400px"} height={"700px"} src="./pnf.gif" alt="" />
      <p className='text-sm'>Oh No!</p>
      <h1 className='text-3xl'>Look Like You're Lost</h1>
      <p  className='text-sm'>The page you are looking for is not available</p>
      <Link to='/' className='bg-blue-500 mt-3 w-40 p-3 text-center text-white rounded-l'>Back Home</Link>
      </div>
  )
}

export default Pnf