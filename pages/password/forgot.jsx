import Head from 'next/head';
import ForgotPass from '../../components/ForgotPass';
import Navbar from "../../components/Navbar";
const Forgot = () => {
    return (
        <>
            <Head>
                <title>Forgot password | Socialeaze</title>
                <link rel="icon" href="/slideshare.png" />
            </Head>
            <Navbar />
            <ForgotPass />
        </>
    )
}

export default Forgot