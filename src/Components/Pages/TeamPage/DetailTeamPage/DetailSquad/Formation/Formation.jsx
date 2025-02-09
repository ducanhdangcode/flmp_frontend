import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { getFormationByTeamName } from '../../../../../../APIService/FormationService';

const Formation = ({teamList, teamId}) => {

    const FormationCoordinate = [
        {
            type: "3-4-2-1",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 14 },
                { x: 8, y: 17.5 },
                { x: 11.5, y: 17.5 },
                { x: 15, y: 17.5 },
                { x: 17.5, y: 14 },
                { x: 9.5, y: 14 },
                { x: 13.5, y: 14 },
                { x: 9.5, y: 9.5 },
                { x: 13.5, y: 9.5 },
                { x: 11.5, y: 6.5 }
            ]
        },
        {
            type: "3-4-3",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 14 },
                { x: 8, y: 17.5 },
                { x: 11.5, y: 17.5 },
                { x: 15, y: 17.5 },
                { x: 17.5, y: 14 },
                { x: 9.5, y: 14 },
                { x: 13.5, y: 14 },
                { x: 8, y: 8 },
                { x: 15, y: 8 },
                { x: 11.5, y: 8 }
            ]
        },
        {
            type: "4-3-3",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 18 },
                { x: 9.5, y: 18 },
                { x: 13.5, y: 18 },
                { x: 17.5, y: 18 },
                { x: 7.5, y: 14 },
                { x: 11.5, y: 14 },
                { x: 15, y: 14 },
                { x: 7.5, y: 9 },
                { x: 15, y: 9 },
                { x: 11.5, y: 9 }
            ]
        },
        {
            type: "4-2-3-1",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 18 },
                { x: 9.5, y: 18 },
                { x: 13.5, y: 18 },
                { x: 17.5, y: 18 },
                { x: 9.5, y: 14 },
                { x: 13.5, y: 14 },
                { x: 8, y: 10 },
                { x: 11.5, y: 10 },
                { x: 15, y: 10 },
                { x: 11.5, y: 6.5 }
            ]
        },
        {
            type: "4-4-2",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 18 },
                { x: 9.5, y: 18 },
                { x: 13.5, y: 18 },
                { x: 17.5, y: 18 },
                { x: 5.5, y: 14 },
                { x: 9.5, y: 14 },
                { x: 13.5, y: 14 },
                { x: 17.5, y: 14 },
                { x: 9.5, y: 9 },
                { x: 13.5, y: 9 }
            ]
        },
        {
            type: "4-1-4-1",
            coordinate: [
                { x: 11.5, y: 21.5 },
                { x: 5.5, y: 18 },
                { x: 9.5, y: 18 },
                { x: 13.5, y: 18 },
                { x: 17.5, y: 18 },
                { x: 11.5, y: 15 },
                { x: 5.5, y: 12 },
                { x: 9.5, y: 12 },
                { x: 13.5, y: 12 },
                { x: 17.5, y: 12 },
                { x: 11.5, y: 10 }
            ]
        }
    ];

    const [formations, setFormations] = useState([]);

    useEffect(() => {
        getFormationByTeamName(teamList[teamId-1]?.name).then((response => {
            setFormations(response.data);
        }))
    }, []);

    const drawFormation = (formationIndex, player, playerIndex) => {
        return (
            <div className = "">
                <div className = {`w-[2rem] h-[2rem] rounded-[50%] border-solid border-white border-[2px]  hover:cursor-pointer`} style = {{backgroundColor: teamList[teamId-1]?.color, position: "absolute", top: `${FormationCoordinate[formationIndex].coordinate[playerIndex].y}rem`, left: `${FormationCoordinate[formationIndex].coordinate[playerIndex].x}rem`}}>
                    <span className = "text-white font-bold relative top-[0.1rem] left-[0.3rem]">{player?.number.toString().padStart(2, "0")}</span>
                </div>
            </div>
        )
    }
  return (
    <div className = "relative">
        <div className = "bg-[#112f54] h-[3rem]">
            <p className = "font-ubuntu text-3xl font-bold relative left-[2rem] top-[0.1rem] text-white">Formations</p>
        </div>
        <div className = "">
            {formations.map((formation) => {
                return (
                    <div className = "w-full overflow-y-clip">
                        <div className = "flex">
                            {/* minicourt and players */}
                            <div className = "relative top-[2rem] w-[25rem]">
                                <img src = {FootballField} alt = "" className = "w-[25rem] h-[25rem] opacity-80"/>
                                <div className = "relative bottom-[25rem]">
                                    <div className = "">
                                        {formation?.detailSquad.map((player, index) => {
                                            if (formation?.formationName === "3-4-2-1") {
                                                return drawFormation(0, player, index);
                                            } else if (formation?.formationName === "3-4-3") {
                                                return drawFormation(1, player, index);
                                            } else if (formation?.formationName === "4-3-3") {
                                                return drawFormation(2, player, index);
                                            } else if (formation?.formationName === "4-2-3-1") {
                                                return drawFormation(3, player, index);
                                            } else if (formation?.formationName === "4-4-2") {
                                                return drawFormation(4, player, index);
                                            } else if (formation?.formationName === "4-1-4-1") {
                                                return drawFormation(5, player, index);
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* note about formation */}
                            <div className = "relative right-[1rem] flex top-[1rem] w-[25rem]">
                                {/* left side */}
                                <div>
                                    {formation?.detailSquad.map((player, index) => {
                                        if (index >=0 && index <= 5) {
                                            return (
                                                <div className = "flex">
                                                    {/* note for player */}
                                                    <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] mt-[1.5rem] right-[1.5rem]" style = {{backgroundColor: teamList[teamId-1]?.color}}>
                                                        <span className = "text-white font-bold ml-[0.4rem] relative top-[0.25rem]">{player?.number.toString().padStart(2, "0")}</span>
                                                    </div>

                                                    {/* player name */}
                                                    <div className = "mt-[1.8rem] relative right-[1rem] font-changa font-bold text-sm">
                                                        <p className = "relative top-[0.2rem]">{`${player?.name} (${player?.position})`}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                {/* right side */}
                                <div className = "relative left-[2rem]">
                                    {formation?.detailSquad.map((player, index) => {
                                        if (index >=6 && index <= 10) {
                                            return (
                                                <div className = "flex">
                                                    {/* note for player */}
                                                    <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] mt-[1.5rem] right-[1.5rem]" style = {{backgroundColor: teamList[teamId-1]?.color}}>
                                                        <span className = "text-white font-bold ml-[0.4rem] relative top-[0.25rem]">{player?.number.toString().padStart(2, "0")}</span>
                                                    </div>

                                                    {/* player name */}
                                                    <div className = "mt-[1.8rem] relative right-[1rem] font-changa font-bold text-sm">
                                                        <p className = "relative top-[0.2rem]">{`${player?.name} (${player?.position})`}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>

                            {/* feedback about formation */}
                            <div className = "relative left-[5rem]">
                                {/* title */}
                                <div className = "bg-[#16301d] h-[2.5rem] w-[41rem]">
                                    <p className = "text-center text-xl text-white font-bold relative top-[0.2rem]">{`${formation?.coachFormation}'s ${formation?.formationName}`}</p>
                                </div>
                                <div className = "bg-[#d1cdcd] w-[40rem] h-[35rem]">
                                    {formation?.formationDescription.split("\n").map((line, index) => {
                                        return (
                                            <div className = "ml-[1rem] relative top-[0.5rem]">
                                                <p key = {index} className = "mb-[0.5rem] text-sm font-bold">{line}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        
                        {/* substitutions */}
                        <div className = "relative bottom-[9rem] left-[4rem] h-[0rem]">
                            <p className = "font-bold">Substitutions:</p>
                            <div className = "flex flex-wrap mt-[0.5rem] w-[50rem]">
                                {formation?.substitutions.map((player) => {
                                    return (
                                        <div className = "flex mr-[2rem]">
                                            <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px]" style = {{backgroundColor: teamList[teamId-1]?.color}}>
                                                <span className = "text-white font-bold ml-[0.4rem] relative top-[0.25rem]">{player?.number.toString().padStart(2, "0")}</span>
                                            </div>
                                            <div className = "mt-[1.8rem] relative right-[1rem] font-changa font-bold text-sm">
                                                <p className = "relative bottom-[1.3rem] left-[1.5rem]">{`${player?.name} (${player?.position})`}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className = "w-full h-[0.1rem] bg-gray-500"></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Formation
