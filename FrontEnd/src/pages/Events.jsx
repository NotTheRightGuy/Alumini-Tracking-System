import React from 'react'
import { useNavigate } from 'react-router-dom'

const Events = (props) => {
    const navigate = useNavigate()
    const createEvent = () => {
        console.log(props)
        navigate('/collegeHome/createEvent')
    }


    const btn="hover:bg-[#286dc0] px-5 py-2 duration-300 rounded hover:text-white  text-2xl hover:cursor-pointer"
  return (
    <div className='flex justify-center m-auto'>
      <div className='p-5'>
        <h1> Date: {props.date}</h1>
      </div>
      <div>
        <h1> Title: {props.title}</h1>
        <h1> Description: {props.description}</h1>
        <h1> Time: {props.time}</h1>
      </div>
      <button className={btn} onClick={createEvent}>
        CreateEvent
      </button>
    </div>
  )
}

export default Events