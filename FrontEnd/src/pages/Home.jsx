import React from "react";
import alumni_2 from '../images/alumni_2.jpeg'
import About from "./About";
const Home = () => {
  return(
    <div>
      <div className="flex justify-center w-full h-1/4 ">
        <img  className="w-full px-20" src={alumni_2}/>
      </div>
      <div className="bg-[#00356B] w-1/2 p-5 px-20 m-auto translate-y-[-18rem]">
        <About/>
      </div>
    </div>
    
  )
}
export default Home