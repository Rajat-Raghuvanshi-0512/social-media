import Link from "next/link"

const Signup = () => {
    return (
        <div className="flex w-full mt-10 pl-32 pr-20">
            <div className='w-full flex justify-center items-center gap-20'>
                <div className=' bg-white rounded-2xl w-full'>
                    <p className="text-center py-4 text-[#3d1bc5] uppercase font-lobster text-4xl">Register</p>
                    <form action="">
                        <div className='grid grid-cols-2 gap-10 px-10 py-3'>
                            <div>
                                <label htmlFor="email" className='text-gray-700'>Email<span className='text-red-500'>*</span></label>
                                <input type="email" id="email" className='w-full outline-1 rounded p-2 bg-purple-50 outline-[#7F5EFF]' required />
                            </div>
                            <div>
                                <label htmlFor="username" className='text-gray-700'>Username<span className='text-red-500'>*</span></label>
                                <input type="text" id="username" className='w-full outline-1 rounded p-2 bg-purple-50 outline-[#7F5EFF]' required />
                            </div>
                            <div>
                                <label htmlFor="password" className='text-gray-700'>Password<span className='text-red-500'>*</span></label>
                                <input type="password" id="password" className='w-full p-2 outline-1 rounded bg-purple-50 outline-[#7F5EFF]' required />
                            </div>
                            <div>
                                <label htmlFor="password" className='text-gray-700'>Confirm Password<span className='text-red-500'>*</span></label>
                                <input type="password" id="password" className='w-full p-2 outline-1 rounded bg-purple-50 outline-[#7F5EFF]' required />
                            </div>
                        </div>
                        <div className="flex justify-between py-5">
                            <button type='submit' className='bg-[#7F5EFF] hover:bg-[#5832ee] text-white rounded-lg px-5 my-4 font-bold mx-10'>Register</button>
                            <div className='px-12 text-right'>
                                <div className='mt-2'>
                                    Already a user?
                                    <Link href="/signin" >
                                        <a className='font-bold hover:font-extrabold text-purple-500 hover:text-purple-800'> Sign In</a>
                                    </Link>
                                </div>
                                <div className='pb-4 '>
                                    <Link href='/password/forgot' >
                                        <a className='font-bold hover:font-extrabold text-purple-500 hover:text-purple-800'>Forgot Password?</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-2/3 flex justify-end' >
                <img src="/signup.png" alt="" className='' />
            </div>
        </div>
    )
}

export default Signup