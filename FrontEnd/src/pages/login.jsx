import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {FcGoogle} from 'react-icons/fc'
import {FaLinkedin} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'

export default function Login() {
    
    let schema=yup.object().shape({
        username:yup.string().required("username does not exist"),
        password:yup.string().required("username dopes not match password")
    })

    let {register,handleSubmit,formState:errors}=useForm({
        resolver:yupResolver(schema)
    })

    const checkLogin=(data)=>{
        console.log(data)
    }

    const input="w-full border-solid border-2 p-2 rounded "
    const paragraph='text-gray-500 text-sm'
    
    return(
        <div className="flex flex-col justify-center items-center border-solid border-2 rounded-lg w-fit m-auto px-10 py-4">
            
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10 '>
                    <FcGoogle size={30} className='text-white' />
                    <p>Sign in With Google</p>
                </div>
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10'>
                    <FaLinkedin size={30} className='text-blue-900' />
                    <p>Sign in With Google</p>
                </div>
            </div>
            <div className='py-3 flex w-full items-center gap-2'>
                <div  className='border-solid border-2 h-0 w-full'></div>
                <div>
                    or
                </div>
                <div className='border-solid border-2 h-0 w-full'></div>
            </div>

            <form onSubmit={handleSubmit(checkLogin)} className='flex flex-col gap-2 border-black border-solid' >
                <div className='flex flex-col gap-1'>
                    <p className={paragraph}>Email or username </p>
                    <input type="text" placeholder='username...' size={28} id="uname" {...register("username")}
                       className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.username?.message}</p>
                </div>
                <div>
                    <p className={paragraph}>Password</p>
                    <input type="password" placeholder='password...' id="upassword" {...register("password")} 
                        className={input}
                    />
                    <p className='text-red-500 text-sm'>{errors.password?.message}</p>

                </div>
                <div className="text-gray-500 self-end hover:cursor-pointer hover:underline text-sm" >
                    <p>forgot password ?</p>
                </div>
                <input type="submit"
                    className={input}
                />
            </form>
        </div>
    )
}