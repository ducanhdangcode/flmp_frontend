import React, { useState } from 'react'
import ServiceHeaderTemplates from '../Templates/ServiceHeaderTemplates';
import {motion} from 'framer-motion';
import { updateEmail, updateFirstname, updateLastname, updateUsername } from '../../../../../APIService/UserService.';

const AdminUpdateUserByUsername = () => {
    const [displayService, setDisplayService] = useState(false);
    const [displayResponse, setDisplayResponse] = useState(false);

    // path
    const [pathUsername, setPathUsername] = useState("");

    // input
    const [inputUsername, setInputUsername] = useState("");
    const [inputFirstname, setInputFirstname] = useState("");
    const [inputLastname, setInputLastname] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // response string
    const [responseString, setResponseString] = useState("");

    const [requestURLs, setRequestURLs] = useState([]);

    const handleSetupDisplayService = (choice) => {
        setDisplayService(choice);
    }

    const handleSetupDisplayResponse = (choice) => {
        setDisplayResponse(choice);
    }

    const handleClear = () => {
        setPathUsername("");
        setInputUsername("");
        setInputFirstname("");
        setInputLastname("");
        setInputEmail("");
        setRequestURLs([]);
        setDisplayResponse(false);
    }

    const handleExecute = () => {
        setDisplayResponse(true);
        if (pathUsername !== "") {
            if (inputUsername !== "") {
                updateUsername(pathUsername, inputUsername).then((response) => {
                    setRequestURLs([...requestURLs, response.request.responseURL]);
                });
                setResponseString("Updated successfully");
            }
            if (inputFirstname !== "") {
                updateFirstname(pathUsername, inputFirstname).then((response) => {
                    setRequestURLs([...requestURLs, response.request.responseURL]);
                });
                setResponseString("Updated successfully");
            }
            if (inputLastname !== "") {
                updateLastname(pathUsername, inputLastname).then((response) => {
                    setRequestURLs([...requestURLs, response.request.responseURL]);
                });
                setResponseString("Updated successfully");
            }
            if (inputEmail !== "") {
                updateEmail(pathUsername, inputEmail).then((response) => {
                    setRequestURLs([...requestURLs, response.request.responseURL]);
                });
                setResponseString("Updated successfully");
            }
            if (inputUsername === "" && inputFirstname === "" && inputLastname === "" && inputEmail === "") {
                setResponseString("Updated failed due to lack of parameter");
            }
        }
    }
  return (
    <div>
        {/* header */}
        <div>
            <ServiceHeaderTemplates 
                handleSetupDisplayService={handleSetupDisplayService}
                handleSetupDisplayResponse={handleSetupDisplayResponse}
                fillColor={"#ebd494"}
                borderColor={"#a17a0d"}
                method={"PUT"}
                path={`/api/user/{username}/update`}
                description={"Update user by username"}
                displayService={displayService}
            />
        </div>

        {/* service input */}
        {displayService === true && 
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className = "relative left-[3vw] mt-[1rem]"
            >
                <ServiceInput 
                    pathUsername = {pathUsername}
                    setPathUsername = {setPathUsername}
                    inputUsername={inputUsername}
                    setInputUsername={setInputUsername}
                    inputFirstname={inputFirstname}
                    setInputFirstname={setInputFirstname}
                    inputLastname={inputLastname}
                    setInputLastname={setInputLastname}
                    inputEmail={inputEmail}
                    setInputEmail={setInputEmail}
                    handleClear = {handleClear}
                    handleExecute={handleExecute}
                />
            </motion.div>
        }

        {displayResponse === true && 
            <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} 
            className = "relative left-[3vw] mt-[1rem]"
            >
                <ServiceResponse 
                    inputUsername = {inputUsername}
                    pathUsername={pathUsername}
                    responseString={responseString}
                    requestURLs={requestURLs}
                />
            </motion.div>
        }
    </div>
  )
}

const ServiceInput = ({inputUsername, setInputUsername, inputFirstname, setInputFirstname, inputLastname, setInputLastname, inputEmail, setInputEmail, handleClear, handleExecute, pathUsername, setPathUsername}) => {
    return (
        <div className = "w-[92vw] bg-[#ebd494] rounded-[8px] pb-[1rem]">
            {/* parameter */}
            <div>
                {/* title */}
                <div className = "relative left-[2vw] top-[0.5rem]">
                    <p className = "font-changa text-2xl font-bold text-[#a17a0d]">Parameter(s)</p>
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
                <div className = "relative left-[2vw] w-[94%] mt-[1rem]">
                    {/* for path username */}
                    <div className = "flex">
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">username</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                onChange = {(e) => setPathUsername(e.target.value)}
                                value = {pathUsername}
                            >
                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">Username of user that you want to update</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">path</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                    </div>

                    {/* for username */}
                    <div className = "flex mt-[1rem]">
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">username</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                onChange = {(e) => setInputUsername(e.target.value)}
                                value = {inputUsername}
                            >
                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">New username that you want to update</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                    </div>

                    {/* for firstname */}
                    <div className = "flex mt-[1rem]">
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">firstname</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                onChange = {(e) => setInputFirstname(e.target.value)}
                                value = {inputFirstname}
                            >
                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">New firstname that you want to update</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                    </div>

                    {/* for lastname */}
                    <div className = "flex mt-[1rem]">
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">lastname</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                onChange = {(e) => setInputLastname(e.target.value)}
                                value = {inputLastname}
                            >
                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">New lastname that you want to update</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                    </div>

                    {/* for email */}
                    <div className = "flex mt-[1rem]">
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">email</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                onChange = {(e) => setInputEmail(e.target.value)}
                                value = {inputEmail}
                            >
                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">New email that you want to update</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">string</p>
                    </div>
                </div>

                {/* execute and clear  */}
                <div className = "flex">
                    <div className = "mt-[1rem] w-[45%] relative left-[2vw]">
                        <button className = "w-full bg-[#a17a0d] h-[2rem] text-white font-changa text-lg" onClick = {handleExecute}>Execute</button>
                    </div>
                    <div className = "mt-[1rem] w-[45%] relative left-[7vw]">
                        <button className = "w-full bg-[white] h-[2rem] font-changa text-lg border-solid border-[1px] border-black" onClick = {handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceResponse = ({inputUsername, pathUsername, responseString, requestURLs}) => {
    return (
        <div className = "w-[92vw] bg-[#ebd494] rounded-[8px] pb-[1rem]">
            {/* title */}
            <div className = "relative left-[2vw] top-[0.5rem]">
                <p className = "font-changa text-2xl font-bold text-[#a17a0d]">Response</p>
            </div>

            {/* requested url */}
            <div className = "relative left-[2vw] mt-[1rem]">
                <p className = "font-changa text-lg">Requested URL</p>
                <div className = "w-[94%] bg-gray-800 mt-[0.5rem] py-[0.5rem] pl-[1vw]">
                    {requestURLs.map((request) => {
                        return (
                            <span className = "font-code text-white block">{request}</span>
                        )
                    })}
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
                <p className = "w-[20%] text-lg font-changa ml-[3%]">200</p>
                    <div className = "ml-[10%] w-[67%]">
                        <p className = "font-changa">Response body</p>
                        <div className = "w-full bg-gray-800 mt-[0.5rem] text-white">
                            {pathUsername !== "" ? 
                                <pre className = "font-code">{responseString}</pre> : 
                                <p className = "font-code relative left-[1vw]">Cannot loading the data</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdateUserByUsername
