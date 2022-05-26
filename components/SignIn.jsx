import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { login } from '../Redux/Action/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'

const SignIn = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { isAuthenticated, error } = useSelector(state => state.user)

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(state))
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: "CLEAR_ERROR" })
        }
        if (isAuthenticated) {
            router.push("/")
            toast.success("Logged in successfully")
        }
    }, [isAuthenticated, error, dispatch, router])

    return (
        <div className='flex w-full mt-8 md:px-20'>
            <div className='w-full flex justify-center items-center'>
                <div className=' bg-white rounded-2xl w-3/4 h-full'>
                    <p className="text-center py-4 text-[#3d1bc5] uppercase font-lobster text-4xl">Login</p>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-4 px-10 py-3'>
                            <label htmlFor="email" className='text-gray-700 font-bold'>Email/Username<span className='text-red-500'>*</span></label>
                            <input type="email" name="email" className='w-full outline-1 rounded p-2 bg-purple-50 outline-[#7F5EFF]' value={state.email} onChange={handleChange} required />
                            <label htmlFor="password" className='text-gray-700 font-bold'>Password<span className='text-red-500'>*</span></label>
                            <input type="password" name="password" className='w-full p-2 outline-1 rounded bg-purple-50 outline-[#7F5EFF]' value={state.password} onChange={handleChange} required />
                            <button type='submit' className='w-full bg-[#7F5EFF] hover:bg-[#5832ee] text-white rounded-lg py-2 mt-5 font-bold'>Login</button>
                        </div>
                    </form>
                    <div className='px-12'>
                        <div className='mt-2'>
                            Not a user?
                            <Link href="/signup" >
                                <a className='font-bold hover:font-extrabold px-2 text-purple-500 hover:text-purple-800'>Sign Up</a>
                            </Link>
                        </div>
                        <div className='pb-4 '>
                            <Link href='/password/forgot' >
                                <a className='font-bold hover:font-extrabold text-purple-500 hover:text-purple-800'>Forgot Password?</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full sm:flex items-end justify-end hidden'>
                <Image width={400} height={400} src="/signin.png" alt="" className='w-4/5 h-full' />
            </div>
        </div>
    )
}

export default SignIn