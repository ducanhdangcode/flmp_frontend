import React, { useState } from 'react'
import ServiceHeaderTemplates from '../../AdminTemplates/ServiceHeaderTemplates'
import {motion} from 'framer-motion';
import { createNewTeam } from '../../../../../../APIService/TeamService';

const AdminCreateTeam = () => {
    // state to display
    const [displayService, setDisplayService] = useState(false);
    const [displayResponse, setDisplayResponse] = useState(false);

    // input
    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");
    const [trophies, setTrophies] = useState("");
    const [chairmanName, setChairmanName] = useState("");
    const [chairmanDescription, setChairmanDescription] = useState("");
    const [videoLink1, setVideoLink1] = useState("");
    const [videoLink2, setVideoLink2] = useState("");
    const [videoLink3, setVideoLink3] = useState("");
    const [favoriteState, setFavoriteState] = useState("");
    const [chairmanImageLink, setChairmanImageLink] = useState("");
    const [kitImageLink1, setKitImageLink1] = useState("");
    const [kitImageLink2, setKitImageLink2] = useState("");
    const [kitImageLink3, setKitImageLink3] = useState("");
    const [videoTitle1, setVideoTitle1] = useState("");
    const [videoTitle2, setVideoTitle2] = useState("");
    const [videoTitle3, setVideoTitle3] = useState("");

    // response team and status
    const [responseTeam, setResponseTeam] = useState(null);
    const [status, setStatus] = useState("");

    const handleSetupDisplayService = (choice) => {
        setDisplayService(choice);
    }

    const handleSetupDisplayResponse = (choice) => {
        setDisplayResponse(choice);
    }

    const handleClear = () => {
        setDisplayResponse(false);
        setTeamName("");
        setTeamColor("");
        setTrophies("");
        setChairmanName("");
        setChairmanDescription("");
        setVideoLink1("");
        setVideoLink2("");
        setVideoLink3("");
        setChairmanImageLink("");
        setKitImageLink1("");
        setKitImageLink2("");
        setKitImageLink3("");
        setVideoTitle1("");
        setVideoTitle2("");
        setVideoTitle3("");
    }

    const handleExecute = () => {
        setDisplayResponse(true);
        const payload = {
            name: teamName, 
            color: teamColor, 
            trophies: JSON.parse(trophies), 
            chairmanName: chairmanName, 
            chairmanDescription: chairmanDescription, 
            videoLinks: [videoLink1, videoLink2, videoLink3],
            favoriteState: favoriteState, 
            chairmanImage: chairmanImageLink, 
            kitsImage: [kitImageLink1, kitImageLink2, kitImageLink3],
            videoTitles: [videoTitle1, videoTitle2, videoTitle3]
        }
        createNewTeam(payload).then((response) => {
            setResponseTeam(response.data);
            setStatus(`${response.status} ${response.statusText}`)
        }).catch((err) => {
            setStatus(`${err.status} ${err.statusText}`)
        })
        console.log(payload);
    }
  return (
    <div>
        {/* header */}
        <ServiceHeaderTemplates 
            handleSetupDisplayService={handleSetupDisplayService}
            handleSetupDisplayResponse={handleSetupDisplayResponse}
            displayService={displayService}
            fillColor={"#75f09a"}
            borderColor={"#02c43c"}
            method={"POST"}
            path={`/api/teams`}
            description={"Create a new team"}
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
                    teamName={teamName}
                    setTeamName={setTeamName}
                    teamColor={teamColor}
                    setTeamColor={setTeamColor}
                    chairmanName={chairmanName}
                    setChairmanName={setChairmanName}
                    chairmanDescription={chairmanDescription}
                    setChairmanDescription={setChairmanDescription}
                    videoLink1={videoLink1}
                    setVideoLink1={setVideoLink1}
                    videoLink2={videoLink2}
                    setVideoLink2={setVideoLink2}
                    videoLink3={videoLink3}
                    setVideoLink3={setVideoLink3}
                    favoriteState={favoriteState}
                    setFavoriteState={setFavoriteState}
                    chairmanImageLink={chairmanImageLink}
                    setChairmanImageLink={setChairmanImageLink}
                    kitImageLink1={kitImageLink1}
                    setKitImageLink1={setKitImageLink1}
                    kitImageLink2={kitImageLink2}
                    setKitImageLink2={setKitImageLink2}
                    kitImageLink3={kitImageLink3}
                    setKitImageLink3={setKitImageLink3}
                    videoTitle1={videoTitle1}
                    setVideoTitle1={setVideoTitle1}
                    videoTitle2={videoTitle2}
                    setVideoTitle2={setVideoTitle2}
                    videoTitle3={videoTitle3}
                    setVideoTitle3={setVideoTitle3}
                    trophies={trophies}
                    setTrophies={setTrophies}
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
                    responseTeam={responseTeam}
                    status={status}
                />
            </motion.div>
        }
    </div>
  )
}

const ServiceInput = ({handleClear, handleExecute, teamName, setTeamName, teamColor, setTeamColor, chairmanName, setChairmanName, chairmanDescription, setChairmanDescription, videoLink1, setVideoLink1, videoLink2, setVideoLink2, videoLink3, setVideoLink3, favoriteState, setFavoriteState, chairmanImageLink, setChairmanImageLink, kitImageLink1, setKitImageLink1, kitImageLink2, setKitImageLink2, kitImageLink3, setKitImageLink3, videoTitle1, setVideoTitle1, videoTitle2, setVideoTitle2, videoTitle3, setVideoTitle3, trophies, setTrophies}) => {
    return (
        <div className = "w-[92vw] bg-[#75f09a] rounded-[8px] pb-[1rem]">
            {/* parameter */}
            <div>
                {/* title */}
                <div className = "relative left-[2vw] top-[0.5rem]">
                    <p className = "font-changa text-2xl font-bold text-[#02c43c]">Parameter(s)</p>
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
                    {/* for request body */}
                    <div className = "flex">
                        {/* name of request body */}
                        <p className = "font-changa font-bold text-lg relative left-[0.5vw] w-[20%]">team</p>
                        {/* input of new team */}
                        <div className = "w-[30%]">
                            {/* name */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg">Team name</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[4rem] border-none outline-none"
                                    value = {teamName}
                                    onChange = {(e) => setTeamName(e.target.value)}
                                />
                            </div>

                            {/* color */}
                            <div className = "w-full mt-[1rem]">
                                <p className = "font-changa font-bold text-lg">Team color</p>
                                <textarea 
                                    placeholder = "(type the RGB code)"
                                    className = "w-[80%] h-[4rem] border-none outline-none"
                                    value = {teamColor}
                                    onChange = {(e) => setTeamColor(e.target.value)}
                                />
                            </div>

                            {/* trophies */}
                            <div className = "w-full mt-[1rem]">
                                <p className = "font-changa font-bold text-lg">Team trophies</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[4rem] border-none outline-none"
                                    value = {trophies}
                                    onChange = {(e) => setTrophies(e.target.value)}
                                />
                            </div>

                            {/* chairman name */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Chairman name</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[4rem] border-none outline-none"
                                    value = {chairmanName}
                                    onChange = {(e) => setChairmanName(e.target.value)}
                                />
                            </div>

                            {/* chairman description */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Chairman description</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[4rem] border-none outline-none"
                                    value = {chairmanDescription}
                                    onChange = {(e) => setChairmanDescription(e.target.value)}
                                />
                            </div>

                            {/* video links */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Video links </p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoLink1}
                                    onChange = {(e) => setVideoLink1(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoLink2}
                                    onChange = {(e) => setVideoLink2(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoLink3}
                                    onChange = {(e) => setVideoLink3(e.target.value)}
                                />
                            </div>

                            {/* favorite state */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Favorite state</p>
                                <select className = "w-[80%] border-none outline-none" value = {favoriteState} onChange = {(e) => setFavoriteState(e.target.value)}>
                                    <option>Favorite</option>
                                    <option>Unfavorite</option>
                                </select>
                            </div>

                            {/* chairman image */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Chairman image link</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {chairmanImageLink}
                                    onChange = {(e) => setChairmanImageLink(e.target.value)}
                                />
                            </div>

                            {/* kits image */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Kits image link</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {kitImageLink1}
                                    onChange = {(e) => setKitImageLink1(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {kitImageLink2}
                                    onChange = {(e) => setKitImageLink2(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {kitImageLink3}
                                    onChange = {(e) => setKitImageLink3(e.target.value)}
                                />
                            </div>

                            {/* video titles */}
                            <div className = "w-full">
                                <p className = "font-changa font-bold text-lg mt-[1rem]">Video titles</p>
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoTitle1}
                                    onChange = {(e) => setVideoTitle1(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoTitle2}
                                    onChange = {(e) => setVideoTitle2(e.target.value)}
                                />
                                <textarea 
                                    placeholder = "(required)"
                                    className = "w-[80%] h-[2rem] border-none outline-none"
                                    value = {videoTitle3}
                                    onChange = {(e) => setVideoTitle3(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* description */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">Team information that you want to create</p>
                        {/* parameter type */}
                        <p className = "font-changa relative left-[0.5vw] w-[20%]">request body</p>
                        {/* data type */}
                        <p className = "font-changa relative left-[0.5vw] w-[10%]">object</p>
                    </div>
                </div>

                {/* execute and clear  */}
                <div className = "flex">
                    <div className = "mt-[1rem] w-[45%] relative left-[2vw]">
                        <button className = "w-full bg-[#02c43c] h-[2rem] text-white font-changa text-lg" onClick = {handleExecute}>Execute</button>
                    </div>
                    <div className = "mt-[1rem] w-[45%] relative left-[7vw]">
                        <button className = "w-full bg-[white] h-[2rem] font-changa text-lg border-solid border-[1px] border-black" onClick = {handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceResponse = ({responseTeam, status}) => {
    return (
        <div className = "w-[92vw] bg-[#75f09a] rounded-[8px] pb-[1rem]">
            {/* title */}
            <div className = "relative left-[2vw] top-[0.5rem]">
                <p className = "font-changa text-2xl font-bold text-[#02c43c]">Response</p>
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
                        <div className = "w-full bg-gray-800 mt-[0.5rem] text-white">
                            {responseTeam ? 
                                <pre className = "font-code">{JSON.stringify(responseTeam, null, 2)}</pre> : 
                                <p className = "font-code relative left-[1vw]">Cannot loading the data</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCreateTeam
