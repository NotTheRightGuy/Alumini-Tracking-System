import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {FcGoogle} from 'react-icons/fc'
import {FaLinkedin} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export default function FormLinker(props) {
    const navigate=useNavigate()
    let schema=yup.object().shape({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        username:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().min(4).max(32).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required(),
        title:yup.string().required(),
        description:yup.string().required(),
        category:yup.string().required(),
        date:yup.string().required(),
        time:yup.string().required(),
        contact:yup.string().required(),

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
    return(
            <div className="flex w-full">
                <p className={textInput}>{props.name}</p>
                <input type={props.type} placeholder={props.placeholder} size={28} id={props.id} {...register(props.registering)}
                    className={input}
                />
                <p className={errorMessage}>{errors.firstName?.message}</p>
            </div>

    )
}