import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = () => {
  return (
    <div className='flex h-10 px-5 mt-6'>
      <input type="search" placeholder="Search" className=' border-2 border-gray-500 bg-white h-10 px-5 w-80 rounded-lg text-sm focus:outline-none' />
      <AiOutlineSearch size={30} className='ml-1 mt-1'/>
    </div>
  )
}

export default SearchBar