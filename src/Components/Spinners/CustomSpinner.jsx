import React from 'react'
import FadeLoader from 'react-spinners/FadeLoader'

const CustomSpinner = () => {
  return (
    <div className = "w-[100vw] h-[100vh] bg-white">
        <div className = "pt-[8rem] ml-[45%] top-[5%] relative bottom-[3rem]">
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

export default CustomSpinner
