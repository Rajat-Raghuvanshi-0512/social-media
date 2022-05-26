import Head from 'next/head'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../components/Home/Home'
export default function Main() {

  return (
    <ProtectedRoute>
      <Head>
        <title>Home Page | Socialeaze</title>
        <meta name="description" content="Social Ease is a social media web application" />
        <link rel="icon" href="/slideshare.png" />
      </Head>
      <Home />
    </ProtectedRoute>
  )
}

// export const getServerSideProps = () => {

// }