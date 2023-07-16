import {useState} from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar(props){

    const style="hover:bg-[#00356b] p-3 duration-500"
    return(
        <div className="flex gap-10">
            <img className='h-10' src="https://i.ibb.co/GTx4WG5/Screenshot-2023-07-08-170218.png" alt="Screenshot-2023-07-08-170218" border="0"></img>
            
            
            <NavLink to='/login' className='link'>
                <button className={style} >
                    login
                </button>
            </NavLink>
            <NavLink to='/About' className='link'>
                <button className={style} >
                    College
                </button>
            </NavLink>
            <NavLink to='/' className='link'>
                <button className={style} >
                    Home
                </button>
            </NavLink>
        </div>
    )
}