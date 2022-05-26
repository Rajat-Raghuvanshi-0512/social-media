// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from 'react'
import { TailSpin, BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className='w-full h-[95vh] flex justify-center items-center'>
            <TailSpin color="#FFF" width={100} height={100} />
        </div>
    )
}

export default Loader