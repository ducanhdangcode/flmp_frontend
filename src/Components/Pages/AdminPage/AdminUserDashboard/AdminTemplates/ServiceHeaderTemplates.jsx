import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const ServiceHeaderTemplates = ({handleSetupDisplayService, handleSetupDisplayResponse, displayService, fillColor, borderColor, method, path, description}) => {
  return (
    <div className = "">
        <div className = "w-[92vw] border-[1px] rounded-[8px] relative left-[3vw] mt-[2rem] flex" style = {{borderStyle: "outset", backgroundColor: fillColor, borderColor: borderColor}}>
            {/* method */}
            <div className = "w-[8vw] text-center my-[0.5rem] ml-[1vw] rounded-[10px]" style = {{backgroundColor: borderColor}}>
                <p className = "font-ubuntu text-lg font-bold text-white py-[0.5rem]">{method}</p>
            </div>

            {/* url */}
            <div className = "relative left-[2vw]">
                <p className = "font-ubuntu text-xl font-bold py-[0.9rem]">{path}</p>
            </div>

            {/* description */}
            <div className = "relative left-[5vw]">
                <p className = "font-ubuntu text-xl py-[0.9rem] text-gray-500">{description}</p>
            </div>

            {/* arrow to see content */}
            <div className = "absolute right-4 top-2 hover:cursor-pointer">
                {displayService === false ? 
                    <MdKeyboardArrowDown className = "w-[3rem] h-[3rem]" onClick = {() => handleSetupDisplayService(true)}/> :
                    <MdKeyboardArrowUp className = "w-[3rem] h-[3rem]" onClick = {() => {
                        handleSetupDisplayService(false);
                        handleSetupDisplayResponse(false);
                    }}
                    />
                }
            </div>
        </div>
    </div>
  )
}

export default ServiceHeaderTemplates
