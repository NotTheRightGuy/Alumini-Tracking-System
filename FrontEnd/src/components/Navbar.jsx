import { Link,NavLink } from 'react-router-dom'
import SearchBar from './Searchbar'
export default function Navbar(props){

    const btn="hover:bg-[#286dc0] px-5 py-2 duration-300 rounded hover:text-white "
    return(
        <>
        <div className='px-20 '>

            <div className='flex justify-between h-44 items-center '  >
                <div className='place-items-start'>
                    {(props.alumni)&& <NavLink to={props.alumni} className='text-6xl text-[#00356B]'>
                        <button className='font-bold' >Alumni</button>
                    </NavLink>}
                </div> 
                <SearchBar/>
                <div className='flex justify-end text-2xl text-[#00356B]'>

                    {(props.login)&& <NavLink to={props.login} className={btn}>
                        <button className='p-2'>Login</button>
                    </NavLink>}
                    {(props.events) && <NavLink to={props.events} className={btn}>
                        <button className='p-2'>Events</button>
                    </NavLink>}
                    {(props.about) && <NavLink to={props.about} className={btn}>
                        <button className='p-2'>About</button>
                    </NavLink>}
                    {(props.home) && <NavLink to={props.home} className={btn}>
                        <button className='p-2'>News</button>
                    </NavLink>}
                </div>
                
            </div>
        </div>
        </>
    )
}