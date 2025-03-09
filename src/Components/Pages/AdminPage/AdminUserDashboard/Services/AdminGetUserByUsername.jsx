import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import './AdminGetUserByUsername.css';
import {motion} from 'framer-motion';

const AdminGetUserByUsername = () => {
    const [displayService, setDisplayService] = useState(false);

    const handleChangeDisplayService = () => {
        displayService === false ? setDisplayService(true) : setDisplayService(false);
    }
  return (
    <div>
        {/* header */}
        <div className = "">
            <div className = "w-[92vw] bg-[#b3d3fc] border-[1px] border-[#076aeb] rounded-[8px] relative left-[3vw] mt-[2rem] flex" style = {{borderStyle: "outset"}}>
                {/* method */}
                <div className = "w-[8vw] bg-[#076aeb] text-center my-[0.5rem] ml-[1vw] rounded-[10px]">
                    <p className = "font-ubuntu text-lg font-bold text-white py-[0.5rem]">GET</p>
                </div>

                {/* url */}
                <div className = "relative left-[2vw]">
                    <p className = "font-ubuntu text-xl font-bold py-[0.9rem]">{`api/users/{username}`}</p>
                </div>

                {/* description */}
                <div className = "relative left-[5vw]">
                    <p className = "font-ubuntu text-xl py-[0.9rem] text-gray-500">Get user by username</p>
                </div>

                {/* arrow to see content */}
                <div className = "absolute right-4 top-2 hover:cursor-pointer" onClick = {handleChangeDisplayService}>
                    {displayService === false ? 
                        <MdKeyboardArrowDown className = "w-[3rem] h-[3rem]"/> :
                        <MdKeyboardArrowUp className = "w-[3rem] h-[3rem]"/>
                    }
                </div>
            </div>
        </div>

        {/* service input */}
        {displayService === true && 
            <motion.div 
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className = "relative left-[3vw] mt-[1rem]"
            >
                <ServiceInput />
            </motion.div>
        }
    </div>
  )
}

const ServiceInput = () => {
    return (
        <div className = "w-[92vw] bg-[#b3d3fc] rounded-[8px] pb-[1rem]">
            {/* parameter */}
            <div>
                {/* title */}
                <div className = "relative left-[2vw] top-[0.5rem]">
                    <p className = "font-changa text-2xl font-bold text-[#076aeb]">Parameter(s)</p>
                </div>
                {/* list */}
                <div className = "flex relative left-[2vw] w-[94%] border-solid border-b-[1px] border-b-gray-500 mt-[1rem]">
                    <p className = "font-changa text-gray-500 relative left-[0.5vw] pb-[0.5rem] w-[20%]">Parameter</p>
                    <p className = "font-changa text-gray-500 relative left-[0.5vw] pb-[0.5rem] w-[30%]">Value</p>
                    <p className = "font-changa text-gray-500 relative left-[0.5vw] pb-[0.5rem] w-[20%]">Description</p>
                    <p className = "font-changa text-gray-500 relative left-[0.5vw] pb-[0.5rem] w-[20%]">Parameter Type</p>
                    <p className = "font-changa text-gray-500 relative left-[0.5vw] pb-[0.5rem] w-[10%]">Data Type</p>
                </div>
                {/* input */}
                <div className = "flex relative left-[2vw] w-[94%] mt-[1rem]">
                    {/* value */}
                    <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">username</p>
                    {/* value */}
                    <div className = "w-[30%]">
                        <textarea
                            placeholder = "(required)"
                            className = "w-[80%] h-[10rem]"
                        >

                        </textarea>
                    </div>
                    {/* description */}
                    <p className = "font-changa relative left-[0.5vw] w-[20%]">Get information of user based on your input username</p>
                    {/* parameter type */}
                    <p className = "font-changa relative left-[0.5vw] w-[20%]">path</p>
                    {/* data type */}
                    <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                </div>

                {/* execute  */}
                <div className = "mt-[1rem] w-[94%] relative left-[2vw]">
                    <button className = "w-full bg-[#076aeb] h-[2rem] text-white font-changa text-lg">Execute</button>
                </div>
            </div>
        </div>
    )
}

export default AdminGetUserByUsername
