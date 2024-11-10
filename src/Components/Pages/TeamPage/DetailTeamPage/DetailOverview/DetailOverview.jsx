import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import WebFont from 'webfontloader';
import { ListTeams } from '../../../../../APIService/TeamService';
import { FaCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';

import Stadium from './Stadium';
import Kit from './Kit';
import Chairman from './Chairman';
import Trophies from './Trophies';
import TeamVideo from './TeamVideo';

const DetailOverview = ({teamId, teamLogo, detailLogoHeight, detailLogoWidth, detailLogoTop, detailLogoLeft, detailNameBottom, teamVideos, teamVideoTitles, teamKits, teamChairman}) => {
    const [storedTeamLogo, setStoredTeamLogo] = useState(teamLogo);
    const [teamList, setTeamList] = useState([]);

    // check hover and active bottom-bar
    const [checkSelectOverview, setCheckSelectOverview] = useState("true");
    const [checkSelectFixtures, setCheckSelectFixtures] = useState("");
    const [checkSelectResult, setCheckSelectResult] = useState("");
    const [checkSelectNews, setCheckSelectNews] = useState("");
    const [checkSelectSquad, setCheckSelectSquad] = useState("");

    useEffect(() => {
        setupActiveTeam();
    }, [])

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    })

    const setupSelectedBar = (overviewChoice, fixturesChoice, resultChoice, newsChoice, squadChoice) => {
        setCheckSelectOverview(overviewChoice);
        setCheckSelectFixtures(fixturesChoice);
        setCheckSelectResult(resultChoice);
        setCheckSelectNews(newsChoice);
        setCheckSelectFixtures(fixturesChoice);
        setCheckSelectSquad(squadChoice);
    }

    const setupActiveTeam = () => {
        ListTeams().then((response) => {
            setTeamList(response.data);
            console.log(response.data);
        }).catch(err => console.error(err));
    }
  return (
    <>
      <div className = "relative w-full" style = {{top: "0rem", height: "23rem", backgroundColor: "#a6a5a4"}}>
            <img src = {storedTeamLogo} alt = "" className = "relative" style = {{width: `${detailLogoWidth}rem`, height: `${detailLogoHeight}rem`, top: `${detailLogoTop}rem`, left: `${detailLogoLeft}rem`}}/>
            {teamList.length > 0 && <p className = "relative font-roboto font-bold" style = {{left: "22rem", bottom: "8.5rem", fontSize: "6rem"}}>{teamList[teamId - 1]?.name.toUpperCase()}</p>}
            <div className = "relative flex" style = {{bottom: `${detailNameBottom}rem`, left: "6rem"}}>
                <div className = {!checkSelectOverview ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("true", "", "", "", "")}>
                    <p>Overview</p>
                </div>
                <div className = {!checkSelectFixtures ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "true", "", "", "")}>
                    <p>Fixtures</p>
                </div>
                <div className = {!checkSelectResult ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "true", "", "")}>
                    <p>Result</p>
                </div>
                <div className = {!checkSelectNews ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "", "true", "")}>
                    <p>News</p>
                </div>
                <div className = {!checkSelectSquad ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "", "", "true")}>
                    <p>Squad</p>
                </div>
            </div>
        </div>
        <div className = "w-full" style = {{backgroundColor: "#d1cec7", height: "127rem", borderTop: "2px solid gray"}}>
            <TeamVideo teamId={teamId} teamList={teamList} teamVideos={teamVideos} teamVideoTitles={teamVideoTitles}/>
            <Trophies teamId = {teamId} teamList={teamList}/>
            <Stadium teamId = {teamId} teamList={teamList}/>
            <Kit teamId={teamId} teamList={teamList} teamKits = {teamKits}/>
            <Chairman teamId={teamId} teamList={teamList} teamChairman={teamChairman} />
        </div>
    </>
    )
}

export default DetailOverview
