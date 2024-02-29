import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='flex justify-between item-centre w-11/12 max-w-[1160px] py-4 mx-auto'>
        
        <Link to="/" >
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        <nav>
            <ul className='flex gap-3 text-richblack-100'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                
                <Link to="/">
                    <li>About</li>
                </Link>

                <Link to="/">
                    <li>Contract</li>
                </Link>
            </ul>
        </nav>


        <div className='flex flex-centre gap-x-4 text-richblack-100'>
            { !isLoggedIn && 
                <Link to="/login" >
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Login
                    </button>
                </Link>
            }
                
                
            { !isLoggedIn && 
                <Link to="/signup" >
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={() =>{
                        setIsLoggedIn(false)
                        toast.success("Logged Out")
                    }}>
                        Log out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
        
    </div>
  )
}

export default Navbar