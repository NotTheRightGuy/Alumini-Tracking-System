import React from 'react'

const Events = (props) => {
  return (
    <div className='flex flex-col'>
      <div className=' flex justify-around m-auto border-solid border-gray-500 border-2 w-fit rounded-lg p-5 mb-10'>
        <div className=' flex '>
          <h1 className='flex-cols font-bold mr-5 text-xl text-[#00356B]'>
            <h1>Jul</h1>
            <h1>16</h1>
          </h1>
        </div>
        <div>
          <h1 className='text-[#3E77B6] text-sm hover:underline hover:cursor-pointer'> LECTURE/READING/TALK</h1>
          <h1 className='text-[#00356B] text-xl hover:underline hover:cursor-pointer'> Harvard Around Town: Barry Scott Myers '00 aka Miles Scott performing July 16</h1>
          <h1 className='text-[#3E77B6] hover:underline hover:cursor-pointer'> Harvard Club of Cincinnati</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Events