import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
  return (
    <div className = "w-full bg-white">
        <div className = "pt-[8rem] ml-[45%] relative bottom-[3rem]">
            <FadeLoader 
                width = {3}
                height = {3}
                color = "blue"
                radius = {1}
            />
            <p className = "relative right-[3%] font-bold">Loading data...</p>
        </div>
    </div>
  )
}

export default Spinner
