import React from 'react'
import hero from '../images/hero.webp'
const Hero = () => {
  return (
    <div className='flex'>
      <img src={hero} />
      <h1 className='pt-10 pl-7'>At Alumni Tracking Systems, our mission is to facilitate seamless communication and engagement between colleges or universities and their alumni. We provide a comprehensive platform that enables alumni to easily update their personal information, stay informed about events and news, and connect with their alma mater and fellow graduates. By offering a user-friendly interface and a centralized hub for information exchange, we aim to foster a strong and lasting relationship between educational institutions and their alumni, promoting networking opportunities, mentorship, and mutual growth.</h1>
    </div>
  )
}

export default Hero