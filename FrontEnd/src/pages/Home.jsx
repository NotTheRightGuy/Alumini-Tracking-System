import React from "react";
import alumni_2 from '../images/alumni_2.jpeg'
import About from "./About";
import Hero from "./Hero";
const Home = () => {
  return(
    <div>
      <div className="flex justify-center w-full">
        <img  className="w-full px-20" src={alumni_2}/>
      </div>
      <div className="bg-[#00356B] w-1/2 p-5 px-20 m-auto translate-y-[-18rem]">
        <About/>
      </div>
      <div className=" p-5 translate-y-[-14rem]">
        <Hero/>
      </div>
    </div>
    
  )
}
export default Home