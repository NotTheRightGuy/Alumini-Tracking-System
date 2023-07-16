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
        firstName:yup.string(),
        lastName:yup.string().required(),
        username:yup.string().required(),
        email:yup.string().email(),
        password:yup.string().min(4).max(32).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required(),
        title:yup.string().required(),
        description:yup.string().required(),
        category:yup.string().required(),
        date:yup.string().required(),
        time:yup.string().required(),
        contact:yup.string(),

    })

    let {register,handleSubmit,formState:errors}=useForm({
        resolver:yupResolver(schema)
    })

    const checkLogin=(data)=>{
        console.log(data)
    }

    const textInput="text-gray-500 text-sm w-1/2 pt-2"
    const input="w-full border-solid border-2 p-2 rounded hover:cursor-pointer hover:shadow-lg"
    const errorMessage='text-red-500 text-sm'


    const registration=()=>{
        navigate('/registration')
    }

    const inputData='flex gap-1 pt-2'
    return(
        <div className="flex flex-col justify-center items-center border-solid border-2 rounded-lg w-2/5 m-auto px-10 py-4 ">

            {(props.username)&&(<>
            <div className="flex gap-5">
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10 '>
                    <FcGoogle size={30} className='text-white' />
                    <p>Signin With Google</p>
                </div>
                <div className='flex gap-2 p-3 rounded-lg hover:cursor-pointer border-solid border-2 px-10'>
                    <FaLinkedin size={30} className='text-blue-900' />
                    <p>Signin With LinkedIn</p>
                </div>
            </div>
            <div className='py-3 flex w-full items-center gap-2'>
                <div  className='border-solid border-2 h-0 w-full'></div>
                <div>
                    OR
                </div>
                <div className='border-solid border-2 h-0 w-full'></div>
            </div>
            </>
            )}

            <form onSubmit={handleSubmit(checkLogin)} className='grid-cols-2 gap-2 border-black border-solid' >

                {((props.firstName) || (props.name))  && (<div className="flex w-full">
                    <p className={textInput}>First Name </p>
                    <input type="text" placeholder='First Name' size={28} id="fname" {...register("firstName")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.firstName?.message}</p>
                </div>)}

                {(props.lastName) && (<div className={inputData}>
                    <p className={textInput}>Last Name </p>
                    <input type="text" placeholder='Last Name' size={28} id="lname" {...register("lastName")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.lastName?.message}</p>
                </div>)}
                {(props.username) && (<div className={inputData}>
                    <p className={textInput}>Email or username </p>
                    <input type="text" placeholder='username' size={28} id="uname" {...register("username")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.username?.message}</p>
                </div>)}
                {(props.email) && (<div className={inputData}>
                    <p className={textInput}>Email </p>
                    <input type="text" placeholder='email' size={28} id="email" {...register("email")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {props.password &&( <div className={inputData}>
                    <p className={textInput}>Password</p>
                    <input type="password" placeholder='password' id="upassword" {...register("password")} 
                        className={input}
                    />
                    <p className={errorMessage}>{errors.password?.message}</p>

                </div>)}

                {(props.confirmPassword) && (<div className={inputData}>
                    <p className={textInput}>Confirm Password </p>
                    <input type="text" placeholder='confirmPassword' size={28} id="cpassword" {...register("confirmPassword")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.confirmPassword?.message}</p>
                </div>)}

                {props.login &&<div className="text-gray-500 self-end hover:cursor-pointer hover:underline text-sm pt-2" >
                    <p>Forgot Password ?</p>
                </div>}


                {props.login && (<div className='text-center'>
                    <p className='text-gray-500 self-end hover:cursor-pointer hover:underline text-sm py-4' onClick={registration}>Don't have an account? signUp</p>
                </div>)}

{/* ****************************************** CreateEvent **************************************************** */}
                {(props.title) && (<div className={inputData}>
                    <p className={textInput}>Title</p>
                    <input type="text" placeholder='title...' size={28} id="title" {...register("title")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {(props.description) && (<div className={inputData}>
                    <p className={textInput}>description</p>
                    <input type="textarea" placeholder='description...' size={28} id="description" {...register("description")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {(props.category) && (<div className={inputData}>
                    <p className={textInput}>Category</p>
                    <input type="text" placeholder='category...' size={28} id="category" {...register("category")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {(props.date) && (<div className={inputData}>
                    <p className={textInput}>Date</p>
                    <input type="text" placeholder='date...' size={28} id="date" {...register("date")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {(props.time) && (<div className={inputData}>
                    <p className={textInput}>Time</p>
                    <input type="text" placeholder='time...' size={28} id="time" {...register("time")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}
                {(props.contact) && (<div className={inputData}>
                    <p className={textInput}>Contact</p>
                    <input type="text" placeholder='contact...' size={28} id="contact" {...register("contact")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}           

{/* ********************************************* searchUser ********************************************** */}
                
                {(props.year) && (<div className={inputData}>
                    <p className={textInput}>year</p>
                    <input type="text" placeholder='year...' size={28} id="year" {...register("year")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}           
                {(props.branch) && (<div className={inputData}>
                    <p className={textInput}>branch</p>
                    <input type="text" placeholder='branch...' size={28} id="branch" {...register("branch")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}           
                {(props.enrollmentNo) && (<div className={inputData}>
                    <p className={textInput}>enrollmentNo</p>
                    <input type="text" placeholder='enrollmentNo...' size={28} id="enrollmentNo" {...register("enrollmentNo")}
                       className={input}
                    />
                    <p className={errorMessage}>{errors.email?.message}</p>
                </div>)}           
                <div className='flex justify-center w-full mt-5 '>
                    <input type="submit"
                        className='bg-[#00356B]  hover:bg-blue-700 text-white font-bold  rounded p-2 hover:cursor-pointer'
                    />
                </div>
            </form>
        </div>
    )
}