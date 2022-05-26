import Image from 'next/image'
import React from 'react'

const UsersCard = ({ avatar, name, email }) => {
    return (
        <div className='flex items-center mb-4 hover:-translate-y-1 cursor-pointer shadow-sm sm:px-1 sm:py-2 lg:pl-5 lg:py-3 rounded-lg bg-gray-50 hover:shadow-indigo-200 hover:shadow-lg'>
            <div className="Avatar rounded-full sm:w-7 md:w-10 bg-red-50 object-cover aspect-auto">
                <Image src={avatar.url} width={"100%"} height={"100%"} alt="avatar" />
            </div>
            <div className='ml-4 font-sans sm:text-xs sm:font-semibold'>
                <div className=' lg:text-lg'>{name}</div>
                <p className='sm:text-[0.5rem] md:text-[0.7rem] lg:text-xs font-light break-all'>{email}</p>
            </div>
        </div>
    )
}

export default UsersCard