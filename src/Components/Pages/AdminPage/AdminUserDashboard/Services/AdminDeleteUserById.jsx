import React, { useState } from 'react'
import ServiceHeaderTemplates from '../Templates/ServiceHeaderTemplates'
import {motion} from 'framer-motion';
import { deleteUserById } from '../../../../../APIService/UserService.';

const AdminDeleteUserById = () => {
    const [displayService, setDisplayService] = useState(false);
    const [displayResponse, setDisplayResponse] = useState(false);

    const [inputId, setInputId] = useState(0);

    const [status, setStatus] = useState("");

    const [responseString, setResponseString] = useState("");

    const handleSetupDisplayService = (choice) => {
        setDisplayService(choice);
    }

    const handleSetupDisplayResponse = (choice) => {
        setDisplayResponse(choice);
    }

    const handleClear = () => {
        setDisplayResponse(false);
        setInputId(0);
    }

    const handleExecute = () => {
        setDisplayResponse(true);
        deleteUserById(inputId).then((response) => {
            setResponseString("Delete user successfully");
            setStatus(`${response.status} ${response.statusText}`);
        }).catch(err => {
            setResponseString("Cannot delete the user with the given Id");
            setStatus(`${err.status} ${err.statusText}`);
        });
    }
  return (
    <div>
      {/* header */}
      <ServiceHeaderTemplates 
            handleSetupDisplayService={handleSetupDisplayService}
            handleSetupDisplayResponse={handleSetupDisplayResponse}
            displayService={displayService}
            fillColor = "#f5aeb2"
            borderColor={"#e63e47"}
            method = {"DELETE"}
            path = {"api/users/{id}"}
            description={"Delete user by ID"}
      />

      {/* service input */}
      {displayService === true && 
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className = "relative left-[3vw] mt-[1rem]"
        >
            <ServiceInput 
                handleClear={handleClear}
                handleExecute={handleExecute}
                inputId={inputId}
                setInputId={setInputId}
            />
        </motion.div>
      }

      {/* service response */}
      {displayResponse === true && 
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className = "relative left-[3vw] mt-[1rem]"
        >
            <ServiceResponse
                inputId = {inputId}
                responseString={responseString}
                status={status}
            />
        </motion.div>
      }
    </div>
  )
}

const ServiceInput = ({inputId, setInputId, handleClear, handleExecute}) => {
    return (
        <div className = "w-[92vw] bg-[#f5aeb2] rounded-[8px] pb-[1rem]">
            {/* parameter */}
            <div>
                {/* title */}
                <div className = "relative left-[2vw] top-[0.5rem]">
                    <p className = "font-changa text-2xl font-bold text-[#e63e47]">Parameter(s)</p>
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
                    <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">user ID</p>
                    {/* value */}
                    <div className = "w-[30%]">
                        <textarea
                            placeholder = "(required)"
                            className = "w-[80%] h-[10rem] border-none outline-none"
                            onChange = {(e) => setInputId(e.target.value)}
                            value = {inputId}
                        >

                        </textarea>
                    </div>
                    {/* description */}
                    <p className = "font-changa relative left-[0.5vw] w-[20%]">Username of the user that you want to delete</p>
                    {/* parameter type */}
                    <p className = "font-changa relative left-[0.5vw] w-[20%]">path</p>
                    {/* data type */}
                    <p className = "font-changa relative left-[0.5vw] w-[10%]">integer</p>
                </div>
                {/* execute and clear  */}
                <div className = "flex">
                    <div className = "mt-[1rem] w-[45%] relative left-[2vw]">
                        <button className = "w-full bg-[#e63e47] h-[2rem] text-white font-changa text-lg" onClick = {handleExecute}>Execute</button>
                    </div>
                    <div className = "mt-[1rem] w-[45%] relative left-[7vw]">
                        <button className = "w-full bg-[white] h-[2rem] font-changa text-lg border-solid border-[1px] border-black" onClick = {handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceResponse = ({inputId, responseString, status}) => {
    return (
        <div className = "w-[92vw] bg-[#f5aeb2] rounded-[8px] pb-[1rem]">
            {/* title */}
            <div className = "relative left-[2vw] top-[0.5rem]">
                <p className = "font-changa text-2xl font-bold text-[#e63e47]">Response</p>
            </div>

            {/* requested url */}
            <div className = "relative left-[2vw] mt-[1rem]">
                <p className = "font-changa text-lg">Requested URL</p>
                <div className = "w-[94%] bg-gray-800 mt-[0.5rem] py-[0.5rem] pl-[1vw]">
                    <span className = "font-code text-white">{`localhost:8080/api/users/${inputId}`}</span>
                </div>
            </div>

            {/* body and code */}
            <div className = "relative left-[2vw] mt-[5rem]">
                <div>
                    <p className = "font-changa text-lg">Server response</p>
                </div>
                {/* header */}
                <div className = "w-[94%] border-solid border-b-[1px] border-b-gray-500 mt-[1rem] flex">
                    <p className = "w-[20%] text-lg font-bold font-changa ml-[3%]">Status</p>
                    <p className = "w-[67%] text-lg font-bold font-changa ml-[10%]">Detail</p>
                </div>
                {/* content */}
                <div className = "flex mt-[0.5rem] w-[94%]">
                <p className = "w-[20%] text-lg font-changa ml-[3%]">{status}</p>
                    <div className = "ml-[10%] w-[67%]">
                        <p className = "font-changa">Response body</p>
                        <div className = "w-full bg-gray-800 mt-[0.5rem] text-white">
                            {typeof inputId !== "number" ? 
                                <pre className = "font-code">{responseString}</pre> : 
                                <p className = "font-code relative left-[1vw]">Wrong format of user Id</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDeleteUserById
