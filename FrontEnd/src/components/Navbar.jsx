import { Link,NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchBar from './Searchbar'
import Linker from './Linker'
export default function Navbar(props){

    const [groupChats,setGroupChats]=useState(false)
    const [connect,setConnect]=useState(false)
    console.log(connect)
    const btn="hover:bg-[#286dc0] px-5 py-2 duration-300 rounded hover:text-white  text-2xl"
    const changeNavbar=()=>{
       setConnect(!connect)
       setGroupChats(!groupChats)
       console.log(connect)

    }

    return(
        <>
        <div className='px-20 '>

            <div className='flex justify-between h-44 items-center '  >
                <div>
                    {(props.alumni)&& <Linker page={props.alumni} name="alumni" currClass="text-6xl text-[#00356B]"/>}
                </div> 
                <SearchBar/>
                <div className='flex justify-end  text-[#00356B]'>

                    {(props.login)&&(!connect)&& <Linker page={props.login} name="login" currClass={btn}/>}
                    {(connect)&& <Linker page="/collegeHome/connect" name="connect" currClass={btn}/>}
                    {(props.events) && <Linker page={props.events} name="events" currClass={btn}/>}
                    {(props.about) && <Linker page={props.about} name="about" currClass={btn}/>}
                    {(props.home) && <Linker page={props.home} name="home" currClass={btn}/>}
                    {(props.registration) && (!connect)&& <Linker page={props.registration} name="registration" currClass={btn}/>}
                    {(groupChats) && <Linker page="/collegeHome/connect" name="groupChats" currClass={btn}/>}
                    {/* {(props.collegeHome) && <Linker page={props.collegeHome} name="collegeHome" currClass={btn} />} */}
                    <NavLink to={props.collegeHome} className={btn}>
                        <button className='2' onClick={changeNavbar}> College Home</button>
                    </NavLink>
                </div>
                
            </div>
        </div>
        </>
    )
}