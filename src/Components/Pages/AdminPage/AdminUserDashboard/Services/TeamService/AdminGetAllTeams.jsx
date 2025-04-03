import React, { useState } from 'react'
import ServiceHeaderTemplates from '../../AdminTemplates/ServiceHeaderTemplates'
import {motion} from 'framer-motion'
import { getAllTeamsWithPagination, ListTeams } from '../../../../../../APIService/TeamService';

const AdminGetAllTeams = () => {
    const [displayService, setDisplayService] = useState(false);
    const [displayResponse, setDisplayResponse] = useState(false);

    const [inputPageNumber, setInputPageNumber] = useState(0);
    const [inputPageSize, setInputPageSize] = useState(5);

    const [status, setStatus] = useState("");
    const [responseTeams, setResponseTeams] = useState([]);

    const handleSetupDisplayService = (choice) => {
        setDisplayService(choice);
    }

    const handleSetupDisplayResponse = (choice) => {
        setDisplayResponse(choice);
    }

    const handleClear = () => {
        setDisplayResponse(false);
        setInputPageNumber("");
        setInputPageSize("");
    }

    const handleExecute = () => {
        setDisplayResponse(true);
        getAllTeamsWithPagination(inputPageNumber, inputPageSize).then((response) => {
            setResponseTeams(response.data.content);
            console.log(response.data.content);
            setStatus(`${response.status} ${response.statusText}`)
        }).catch(err => {
            setStatus(`${err.status} ${err.statusText}`)
        });
    }
  return (
    <div>
      {/* header */}
      <div>
        <ServiceHeaderTemplates 
            handleSetupDisplayService={handleSetupDisplayService}
            handleSetupDisplayResponse={handleSetupDisplayResponse}
            displayService={displayService}
            fillColor={"#b3d3fc"}
            borderColor={"#076aeb"}
            method = {"GET"}
            path = {`/api/teams`}
            description={"Get all teams"}
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
                handleClear={handleClear}
                handleExecute={handleExecute}
                inputPageNumber={inputPageNumber}
                setInputPageNumber={setInputPageNumber}
                inputPageSize={inputPageSize}
                setInputPageSize={setInputPageSize}
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
                status={status}
                responseTeams={responseTeams}
            />
        </motion.div>
      }
    </div>
  )
}

const ServiceInput = ({handleClear, handleExecute, inputPageNumber, setInputPageNumber, inputPageSize, setInputPageSize}) => {
    return (
        <div className = "w-[92vw] bg-[#b3d3fc] rounded-[8px] pb-[1rem]">
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
                <div>
                    {/* for page number */}
                    <div className = "flex relative left-[2vw] w-[94%] mt-[1rem]">
                        {/* parameter */}
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">page number</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                value = {inputPageNumber}
                                onChange = {(e) => setInputPageNumber(e.target.value)}
                            >

                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">Page number that you want to see</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">integer</p>
                    </div>
                    {/* for page size */}
                    <div className = "flex relative left-[2vw] w-[94%] mt-[1rem]">
                        {/* parameter */}
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">page size</p>
                        {/* value */}
                        <div className = "w-[30%]">
                            <textarea
                                placeholder = "(required)"
                                className = "w-[80%] h-[10rem] border-none outline-none"
                                value = {inputPageSize}
                                onChange = {(e) => setInputPageSize(e.target.value)}
                            >

                            </textarea>
                        </div>
                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">Number of teams displayed per page</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">param</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">integer</p>
                    </div>
                </div>
                {/* execute and clear  */}
                <div className = "flex">
                    <div className = "mt-[1rem] w-[45%] relative left-[2vw]">
                        <button className = "w-full bg-[#076aeb] h-[2rem] text-white font-changa text-lg" onClick = {handleExecute}>Execute</button>
                    </div>
                    <div className = "mt-[1rem] w-[45%] relative left-[7vw]">
                        <button className = "w-full bg-[white] h-[2rem] font-changa text-lg border-solid border-[1px] border-black" onClick = {handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceResponse = ({status, responseTeams}) => {
    return (
        <div className = "w-[92vw] bg-[#b3d3fc] rounded-[8px] pb-[1rem]">
            {/* title */}
            <div className = "relative left-[2vw] top-[0.5rem]">
                <p className = "font-changa text-2xl font-bold text-[#076aeb]">Response</p>
            </div>

            {/* requested url */}
            <div className = "relative left-[2vw] mt-[1rem]">
                <p className = "font-changa text-lg">Requested URL</p>
                <div className = "w-[94%] bg-gray-800 mt-[0.5rem] py-[0.5rem] pl-[1vw]">
                    <span className = "font-code text-white">{`localhost:8080/api/teams`}</span>
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
                        {responseTeams ? 
                            <div>
                                {responseTeams.map((team) => {
                                    return (
                                        <div className = "w-full bg-gray-800 mt-[0.5rem] text-white">
                                            <div className = "overflow-auto">
                                                <pre className = "font-code" style = {{width: "80%"}}>{JSON.stringify(team, null, 2)}</pre>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div> : 
                            <div className = "w-full bg-gray-800 mt-[0.5rem] text-white">
                                <p className = "font-code relative left-[1vw]">Cannot loading the data</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminGetAllTeams
