import Image from "next/image"
import Link from "next/link"

const ForgotPass = () => {
    return (
        <div className='flex w-full text-white min-h-screen'>
            <div className='w-full'>
                <form method="post" className="ml-10 md:ml-32 mt-16 mr-10">
                    <div className="text-3xl sm:text-5xl font-bold">Trouble Logging In?</div>
                    <div className='flex flex-col justify-end px-5'>
                        <p className="py-8 font-bold">Enter your registered email address, we&quot;ll send you a link to get back into your account.</p>
                        <label htmlFor="email" className='text-white pb-3 font-bold text-xl'>Email</label>
                        <input type="email" id="email" className='w-full outline-1 rounded p-3 my-3 bg-purple-50 outline-[#7F5EFF] text-black' required />
                        <button type='submit' className='bg-[#7F5EFF] hover:bg-[#5832ee] text-white rounded-lg py-2 mt-5 font-bold w-28'>Send Mail</button>
                        <div className="py-6 font-bold">
                            Remember your credentials?
                            <Link href="/signin" >
                                <a className='font-bold hover:font-extrabold px-2 text-purple-300 hover:text-purple-500'>Sign In</a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-full p-10 hidden md:grid place-items-center' >
                <Image width={350} height={350} src="/forgotpass.png" alt="" className='w-4/5' />
            </div>
        </div>
    )
}

export default ForgotPass