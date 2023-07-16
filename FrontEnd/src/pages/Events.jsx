import React from 'react'

const Events = (props) => {
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
    </div>
  )
}

export default Events