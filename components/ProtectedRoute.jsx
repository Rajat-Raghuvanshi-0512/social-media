import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.user)
    const Router = useRouter()
    useEffect(() => {
        if (isAuthenticated === false) {
            Router.push('/signin')
        }
    }, [isAuthenticated, Router])
    return (
        <>
            {isAuthenticated === true ? children : <Loader />}
        </>
    )
}

export default ProtectedRoute
