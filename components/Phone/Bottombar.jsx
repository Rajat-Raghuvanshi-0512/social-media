import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdAddBox } from "react-icons/md"
import { RiShieldUserFill } from "react-icons/ri"
import { BiSearchAlt } from "react-icons/bi"
import { useRouter } from 'next/router'

const Bottombar = () => {
    const router = useRouter()

    return (
        <div className='sm:hidden fixed w-full bottom-0 p-4 bg-purple-500'>
            <div className=' flex justify-around '>
                <AiFillHome className={`w-7 h-7 text-white cursor-pointer ${router.pathname === "/" && "drop-shadow-3xl"}`} />
                <BiSearchAlt className='w-7 h-7 text-white cursor-pointer' />
                <MdAddBox className='w-7 h-7 text-white cursor-pointer' />
                <RiShieldUserFill className='w-7 h-7 text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Bottombar