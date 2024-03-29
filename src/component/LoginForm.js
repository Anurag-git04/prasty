import React from 'react'
import { useState } from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setformData] = useState({ email:"" , password : ""})
    const [showpassword, setShowpassword] = useState(false)

    function changeHandler(event){
        setformData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

  return (
    <form className='flex flex-col w-full gap-y-4 mt-4'>
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email" 
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
             />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type={showpassword ? ("text") : ("password")} 
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='email'
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
             />

             <span onClick={() => setShowpassword((prev) => !prev)}>
                {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
             </span>

             <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50  rounded-[8px] font-medium text-black  px-[12px] py-[8px] mt-6'> 
            Sign In
        </button>
    </form>
  )
}

export default LoginForm