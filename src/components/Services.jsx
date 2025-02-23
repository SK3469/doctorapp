import React from 'react'
import Navbar from './Navbar'

const Service = () => {
  return (<>
    <Navbar/>
    <div className='bg-gray-50 min-h-screen max-w-full'>
    <div className='grid grid-cols-3 gap-10 p-10 max-w-7xl mx-auto'>
      {
        [1, 2, 3, 4, 5, 6].map((_, index) => (
          < div key={index} className='col-span-1 h-60 w-96 bg-gray-200 rounded-lg shadow-lg'>
            <h1 className='text-center my-[25%]'> Regular HealthCare Package</h1>
          </div>
        ))
      }
    </div>
  </div>
  </>
  )
}

export default Service