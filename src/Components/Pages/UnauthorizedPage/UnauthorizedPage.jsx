import React from 'react'
import { Link } from 'react-router-dom'
import Background from './image.png';

const UnauthorizedPage = () => {
  return (
    <div className = "w-full bg-white pb-[2rem]">
        <div className = "text-center">
            <img src = {Background} alt = "" className = "w-full h-[30rem]" />
            <p className = "text-4xl font-bold font-ubuntu mt-[1rem]">You don't have permission to access this page!</p>
            <Link to = "/">
                <button className = "h-[2rem] bg-[#ebc94e] text-white px-[2%] rounded-[5px] mt-[2rem]">Go back to home</button>
            </Link>
        </div>
    </div>
  )
}

export default UnauthorizedPage
