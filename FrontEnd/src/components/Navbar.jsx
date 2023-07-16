import { Link,NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchBar from './Searchbar'
import Linker from './Linker'
export default function Navbar(props){

    const [groupChats,setGroupChats]=useState(false)
    const [connect,setConnect]=useState(false)
    console.log(connect)
    const btn="hover:bg-[#286dc0] px-5 py-2 duration-300 rounded hover:text-white  text-2xl hover:cursor-pointer"
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
                    {(props.alumni)&& <Linker page={props.alumni} name="Alumni" currClass="text-6xl text-[#00356B]" className="font-bold"/>}
                </div> 
                <SearchBar/>
                <div className='flex justify-end  text-[#00356B]'>

                    {(props.login)&&(!connect)&& <Linker page={props.login} name="Login" currClass={btn}/>}
                    {(connect)&& <Linker page="/collegeHome/connect" name="Connect" currClass={btn}/>}
                    {(props.events) && <Linker page={props.events} name="Events" currClass={btn}/>}
                    {(props.about) && <Linker page={props.about} name="About" currClass={btn}/>}
                    {(props.home) && <Linker page={props.home} name="Home" currClass={btn}/>}
                    {(props.registration) && (!connect)&& <Linker page={props.registration} name="Registration" currClass={btn}/>}
                    {(groupChats) && <Linker page="/collegeHome/connect" name="Group Chats" currClass={btn}/>}
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