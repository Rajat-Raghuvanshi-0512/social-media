import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Signup from '../../components/SignUp.component';
const SignUp = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Socialeaze</title>
                <link rel="icon" href="/slideshare.png" />
            </Head>
            <Signup />
        </>
    )
}

export default SignUp