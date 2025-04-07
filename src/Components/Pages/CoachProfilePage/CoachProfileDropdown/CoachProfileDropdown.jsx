import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const CoachProfileDropdown = ({options, setupDisplayStatOption}) => {
  return (
    <div className = "w-[93%] bg-easeGreen">
        <div className = "flex w-full">
            {options.map((option) => {
                return (
                    <div className = "relative px-[1.5%] ml-[2%] py-[1rem] mr-[4%] hover:cursor-pointer" onClick = {() => setupDisplayStatOption(option)}>
                        <IoMdArrowDropright className = "absolute left-0 w-[1.2rem] h-[1.2rem] top-[1.2rem]"/>
                        <p className = "font-teko text-lg font-bold">{option}</p> 
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CoachProfileDropdown
