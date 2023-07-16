import { NavLink } from "react-router-dom"
export default function Linker(props){
    return(
        <div>
            <NavLink to={props.page} className={props.currClass}>
                <button className='p-2'> {props.name}</button>
            </NavLink>
        </div>
    )
}
