import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsOfFollowing } from '../../Redux/Action/postAction'
import { getAllUsers } from '../../Redux/Action/userAction'
import Post from '../Post'
import UsersCard from '../UsersCard'
import { FaHeartbeat } from "react-icons/fa"

const Home = () => {
    const dispatch = useDispatch()
    const { posts, message } = useSelector(state => state.posts)
    const { users } = useSelector(state => state.allUsers)

    useEffect(() => {
        if (message) {
            dispatch({ type: "CLEAR_MESSAGE" })
        }
        dispatch(getPostsOfFollowing())
    }, [message, dispatch])

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])
    return (
        <div className='lg:px-28 sm:px-5 overflow-y-auto mb-14 sm:mb-0 max-h-[80vh]'>
            <div className='bg-white text-center mb-4 flex items-center fixed top-20 w-full z-50 shadow-lg sm:hidden'>
                <FaHeartbeat className='w-7 h-7 ml-3 text-red-500' />
                <h1 className='mx-2'>Today&apos;s Feed</h1>
            </div>
            <div className="grid sm:grid-cols-3 grid-rows-1 w-full lg:gap-10 sm:gap-4 grid-cols-1 px-2 sm:px-0 mt-14 sm:mt-0">
                <div className="col-span-2 sm:h-[80vh]">
                    {posts?.map(post => <Post key={post._id} post={post} />)}
                    {posts?.map(post => <Post key={post._id} post={post} />)}
                    {posts?.map(post => <Post key={post._id} post={post} />)}
                </div>
                <div className='bg-white rounded-md sm:px-4 md:px-6 lg:px-8 hidden sm:block fixed lg:right-20 top-26 h-[75vh] w-[25vw] overflow-y-auto sm:right-5 md:right-10'>
                    <h3 className='my-6 px-1 sm:text-sm lg:text-lg text-center'>Suggestions For You</h3>
                    {
                        users?.map(user => (
                            <UsersCard avatar={user.avatar} name={user.name} email={user.email} key={user._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

// export const getServerSideProps = async () => {
//     return {
//         props: {
//             isAuthenticated: true
//         }
//     }
// }