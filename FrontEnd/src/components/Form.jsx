import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {FcGoogle} from 'react-icons/fc'
import {FaLinkedin} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
    
    const navigate=useNavigate()
    let schema=yup.object().shape({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        username:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().min(4).max(32).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required()
    })

    let {register,handleSubmit,formState:errors}=useForm({
        resolver:yupResolver(schema)
    })

    const checkLogin=(data)=>{
        console.log(data)
    }

    const input="w-full border-solid border-2 p-2 rounded hover:cursor-pointer hover:shadow-lg "
    const paragraph='text-gray-500 text-sm'
    const registration=()=>{
        navigate('/registration')
    }

    const inputData='flex flex-col gap-1 pt-2'
    return(
        <div className="flex flex-col justify-center items-center border-solid border-2 rounded-lg w-fit m-auto px-10 py-4 ">

            <div className={inputData}>
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10 '>
                    <FcGoogle size={30} className='text-white' />
                    <p>Signin With Google</p>
                </div>
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10'>
                    <FaLinkedin size={30} className='text-blue-900' />
                    <p>Signin With Google</p>
                </div>
            </div>
            <div className='py-3 flex w-full items-center gap-2'>
                <div  className='border-solid border-2 h-0 w-full'></div>
                <div>
                    or
                </div>
                <div className='border-solid border-2 h-0 w-full'></div>
            </div>

            <form onSubmit={handleSubmit(checkLogin)} className='grid-cols-2 gap-2 border-black border-solid' >

                {(props.firstName) && (<div className={inputData}>
                    <p className={paragraph}>firstName </p>
                    <input type="text" placeholder='firstName...' size={28} id="fname" {...register("firstName")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.firstName?.message}</p>
                </div>)}
                {(props.lastName) && (<div className={inputData}>
                    <p className={paragraph}>lastName </p>
                    <input type="text" placeholder='lastName...' size={28} id="lname" {...register("lastName")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.lastName?.message}</p>
                </div>)}
                {(props.username) && (<div className={inputData}>
                    <p className={paragraph}>Email or username </p>
                    <input type="text" placeholder='username...' size={28} id="uname" {...register("username")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.username?.message}</p>
                </div>)}
                {(props.email) && (<div className={inputData}>
                    <p className={paragraph}>email </p>
                    <input type="text" placeholder='email...' size={28} id="email" {...register("email")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.email?.message}</p>
                </div>)}
                {props.password && <div>
                    <p className={paragraph}>Password</p>
                    <input type="password" placeholder='password...' id="upassword" {...register("password")} 
                        className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.password?.message}</p>

                </div>}

                {(props.confirmPassword) && (<div className={inputData}>
                    <p className={paragraph}>confirmPassword </p>
                    <input type="text" placeholder='confirmPassword...' size={28} id="cpassword" {...register("confirmPassword")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.confirmPassword?.message}</p>
                </div>)}

                {props.login &&<div className="text-gray-500 self-end hover:cursor-pointer hover:underline text-sm pt-2" >
                    <p>forgot password ?</p>
                </div>}

                <input type="submit"
                    className={input}
                />

                {props.login && <div className='text-center'>
                    <p className='text-gray-500 self-end hover:cursor-pointer hover:underline text-sm py-4' onClick={registration}>Don't have an account? signUp</p>
                </div>}
            </form>
        </div>
    )
}