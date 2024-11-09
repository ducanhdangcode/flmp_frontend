import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';
import { ListTeams } from '../../../../../APIService/TeamService';
import ReactPlayer from 'react-player';
import { FaCircle } from 'react-icons/fa';

import Stadium from './Stadium';
import Kit from './Kit';
import Chairman from './Chairman';
import Trophies from './Trophies';

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
        console.log(teamVideos);
        console.log(teamVideoTitles);
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

            console.log("Name: ");
            console.log(teamId)
        }).catch(err => console.error(err));
    }
  return (
    <div>
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
            <div className = "relative float-right" style = {{left: "55rem", top: "2rem"}}>
                {teamList.length > 0 && <p className = "font-roboto text-2xl font-semibold" style = {{color: teamList[teamId - 1]?.color}}>{`${teamList[teamId - 1]?.name.toUpperCase()} VIDEOS`}</p>}
                <div className = "relative" style = {{top: "1rem"}}>
                    <ReactPlayer 
                        url = {teamVideos[0]}
                        width = "25%"
                        height = "25%"
                        playing = {true}
                        controls = {true}
                        muted = {true}
                        style = {{border: "5px solid gray", borderRadius: "10px"}}
                    />
                    <p className = "relative font-roboto text-lg font-bold" style = {{width: "25%", top: "0.5rem"}}>{teamVideoTitles.first}</p>
                </div>
                <div className = "relative" style = {{top: "3rem"}}>
                    <ReactPlayer 
                        url = {teamVideos[1]}
                        width = "25%"
                        height = "25%"
                        playing = {true}
                        controls = {true}
                        muted = {true}
                        style = {{border: "5px solid gray", borderRadius: "10px"}}
                    />
                    <p className = "relative font-roboto text-lg font-bold" style = {{width: "25%", top: "0.5rem"}}>{teamVideoTitles.second}</p>
                </div>
                <div className = "relative" style = {{top: "5rem"}}>
                    <ReactPlayer 
                        url = {teamVideos[2]}
                        width = "25%"
                        height = "25%"
                        playing = {true}
                        controls = {true}
                        muted = {true}
                        style = {{border: "5px solid gray", borderRadius: "10px"}}
                    />
                    <p className = "relative font-roboto text-lg font-bold" style = {{width: "25%", top: "0.5rem"}}>{teamVideoTitles.third}</p>
                </div>
            </div>
            <Trophies teamId = {teamId} teamList={teamList}/>
            <Stadium teamId = {teamId} teamList={teamList}/>
            <Kit teamId={teamId} teamList={teamList} teamKits = {teamKits}/>
            <Chairman teamId={teamId} teamList={teamList} teamChairman={teamChairman} />
        </div>
    </div>
  )
}

export default DetailOverview
