import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsHeart, BsFillHeartFill } from "react-icons/bs"
import { BiCommentDetail } from "react-icons/bi"
import Moment from 'react-moment'
import { useDispatch, useSelector } from 'react-redux'
import { likeOrDislikePost } from '../Redux/Action/postAction'

const Post = ({ post }) => {

    const [isLiked, setIsLiked] = useState(false)

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const handleLike = () => {
        dispatch(likeOrDislikePost(post?._id))
    }
    useEffect(() => {
        post.likes.forEach(like => {
            if (like._id === user?._id) {
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        })
    }, [post.likes, user?._id])


    return (
        <div className='bg-white rounded-md px-4 sm:px-8 mb-10'>
            <div className="flex justify-between py-6 items-center">
                <div className='flex items-center'>
                    <div className="Avatar rounded-full w-12 h-12 bg-red-50 object-cover">
                        <Image src={post.owner.avatar.url} width={"100%"} height={"100%"} alt="not found" />
                    </div>
                    <h2 className='ml-5'>{post.owner.name}</h2>
                </div>
                <div className='font-semibold text-sm'><Moment fromNow>{post.createdAt}</Moment></div>
            </div>
            <div className='w-full flex items-center justify-center py-8'>
                <Image src={post?.image?.url || "/forgotpass.png"} width={100} height={100} alt="not found" />
            </div>
            <div className='font-bold px-1 py-4'>{post.caption}</div>
            <div className='px-1'>{post.likes.length} Likes</div>
            <div className='flex gap-5 py-4'>
                <button onClick={handleLike}>
                    {isLiked ?
                        <BsFillHeartFill className='w-8 h-6  cursor-pointer text-red-600' />
                        :
                        <BsHeart className='w-8 h-6 text-gray-600  cursor-pointer ' />
                    }
                </button>
                <BiCommentDetail className='w-8 h-6 text-gray-600 cursor-pointer' />
            </div>
            <h4 className='mt-3'>Comments</h4>
            {
                post?.comments.map(com => (
                    <div key={com._id} className="flex items-center p-5">
                        <div className="Avatar rounded-full w-9 h-9 bg-red-50 object-cover">
                            <Image src={com.user.avatar.url} width={"100%"} height={"100%"} alt="not found" />
                        </div>
                        <div className=' mx-3 font-bold'>{com.user.name}</div>
                        <div>{com.comment}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Post