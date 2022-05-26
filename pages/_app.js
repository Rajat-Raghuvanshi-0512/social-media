import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css';

import { wrapper } from '../Redux/store'
import { ToastContainer, Slide } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from '../Redux/Action/userAction';
import Navbar from '../components/Navbar';
import Bottombar from '../components/Phone/Bottombar';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return <>
    <ToastContainer
      autoClose={2000}
      position="bottom-right"
      pauseOnHover={false}
      theme="colored"
      transition={Slide}
    />
    <Navbar />
    <Component {...pageProps} />
    <Bottombar />
  </>
}
export default wrapper.withRedux(MyApp)
