import { Link,NavLink } from 'react-router-dom'

export default function Navbar(props){

    const btn="hover:bg-[#286dc0] px-5 py-2 duration-300 rounded"
    return(
        <>
        <div className='px-48 '>

            <div className='flex justify-between h-44 items-center '  >
                <div className='place-items-start'>
                    {(props.alumni)&& <NavLink to={props.alumni} className='text-6xl text-[#00356B]'>
                        <button >alumni</button>
                    </NavLink>}
                </div> 
                <div>
                    search
                </div>
                <div className='flex justify-end text-2xl text-[#00356B]'>

                    {(props.login)&& <NavLink to={props.login} className={btn}>
                        <button >login</button>
                    </NavLink>}
                    {(props.events) && <NavLink to={props.events} className={btn}>
                        <button>events</button>
                    </NavLink>}
                    {(props.about) && <NavLink to={props.about} className={btn}>
                        <button>about</button>
                    </NavLink>}
                    {(props.home) && <NavLink to={props.home} className={btn}>
                        <button>news</button>
                    </NavLink>}
                </div>
                
            </div>
        </div>
        </>
    )
}