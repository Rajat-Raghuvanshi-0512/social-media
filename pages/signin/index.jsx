import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import SignIn from '../../components/SignIn'

const LoginPage = () => {
    const { isAuthenticated } = useSelector(state => state.user)
    const Router = useRouter()
    useEffect(() => {
        if (isAuthenticated === true) {
            Router.push('/')
            toast.success("Logged In Successfully")
        }
    }, [isAuthenticated, Router])
    return (
        <>
            <Head>
                <title>Login | Socialeaze</title>
                <meta name="description" content="Social Ease is a social media web application" />
                <link rel="icon" href="/slideshare.png" />
            </Head>
            {
                isAuthenticated === false && <SignIn />
            }
        </>
    )
}

export default LoginPage