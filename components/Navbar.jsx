import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdAddBox } from "react-icons/md"
import { RiShieldUserFill } from "react-icons/ri"
import { BiSearchAlt } from "react-icons/bi"
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="flex pt-5 pb-10 px-5 sm:px-20 justify-between items-center sticky top-0 z-10 ">
            <div className='flex'>
                <div className="w-8 h-8">
                    <Image width={100} height={100} src="/slideshare (1).png" alt="logo " className="w-full h-full" />
                </div>
                <h2 className='mx-3 text-white cursor-pointer'>Social Eaze</h2>
            </div>
            <div className=' gap-10 hidden sm:flex '>
                <AiFillHome className={`w-7 h-7 text-white cursor-pointer ${router.pathname === "/" && "drop-shadow-sm"}`} />
                <BiSearchAlt className='w-7 h-7 text-white cursor-pointer' />
                <MdAddBox className='w-7 h-7 text-white cursor-pointer' />
                <RiShieldUserFill className='w-7 h-7 text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar