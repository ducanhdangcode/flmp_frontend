import React, { useState } from 'react'
import FootballField from './Football_field.svg';
import { RiExchangeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdViewAgenda } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SpeficPersonalFormation = ({user, drawFormation, personalFormationIndex, teamList, teamId}) => {
    const [startPaginationIndex, setStartPaginationIndex] = useState(1);
  return (
    <div>
        <div className = "flex">
            {/* formation court and player  */}
            <div className = "relative top-[2rem] w-[25rem]">
                <img src = {FootballField} alt = "" className = "w-[25rem] h-[25rem] opacity-80" />
                <div>
                    {user?.personalFormations[personalFormationIndex]?.mainSquad.map((player, index) => {
                        if (user?.personalFormations[personalFormationIndex]?.formationName === "3-4-2-1") {
                            return drawFormation(personalFormationIndex, player, index);
                        } else if (user?.personalFormations[personalFormationIndex]?.formationName === "3-4-3") {
                            return drawFormation(1, player, index);
                        } else if (user?.personalFormations[personalFormationIndex]?.formationName === "4-3-3") {
                            return drawFormation(2, player, index);
                        } else if (user?.personalFormations[personalFormationIndex]?.formationName === "4-2-3-1") {
                            return drawFormation(3, player, index);
                        } else if (user?.personalFormations[personalFormationIndex]?.formationName === "4-4-2") {
                            return drawFormation(4, player, index);
                        } else if (user?.personalFormations[personalFormationIndex]?.formationName === "4-1-4-1") {
                            return drawFormation(5, player, index);
                        }
                    })}
                </div>
            </div>

            {/* note of player */}
            <div className = "relative flex top-[1rem] w-[25rem]">
                {/* left side */}
                <div>
                    {user?.personalFormations[personalFormationIndex]?.mainSquad.map((player, index) => {
                        if (index >= 0 && index <= 5) {
                            return (
                                <div className = "flex">
                                    {/* player number */}
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
                    {user?.personalFormations[personalFormationIndex]?.mainSquad.map((player, index) => {
                        if (index >= 6 && index <= 10) {
                            return (
                                <div className = "flex">
                                    {/* player number */}
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
        </div>

        {/* substitution */}
        <div className = "relative left-[4rem] top-[3rem]">
            <p className = "font-bold">Substitutions:</p>
            <div className = "flex flex-wrap mt-[0.5rem] w-[50rem]">
                {user?.personalFormations[personalFormationIndex]?.substitutions.map((player, index) => {
                    return (
                        <div className = "flex mr-[2rem]">
                            <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] hover:cursor-pointer" style = {{backgroundColor: teamList[teamId-1]?.color}} 
                            >
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

        {/* options */}
        <div className = "relative left-[4rem] flex top-[3.5rem]">
            {/* change player */}
            <button className = "flex w-[10rem] h-[2rem] bg-[#ebc94e] text-white font-bold">
                <span><RiExchangeFill className = "w-[1.5rem] h-[1.5rem] relative left-[0.2rem] top-[0.2rem]"/></span>
                <span className = "relative left-[0.5rem] top-[0.2rem]">Change players</span>
            </button>

            {/* delete squad */}
            <button className = "flex w-[12rem] h-[2rem] bg-red-500 text-white font-bold relative left-[1.5rem]">
                <span><MdDelete className = "w-[1.5rem] h-[1.5rem] relative left-[0.5rem] top-[0.2rem]"/></span>
                <span className = "relative left-[0.8rem] top-[0.2rem]">Delete formations</span>
            </button>

            {/* view default formation */}
            <button className = "flex w-[10rem] h-[2rem] bg-gray-500 text-white font-bold relative left-[3rem]">
                <span><MdViewAgenda className = "w-[1.5rem] h-[1.5rem] relative left-[0.8rem] top-[0.2rem]"/></span>
                <span className = "relative left-[1.2rem] top-[0.2rem]">View default</span>
            </button>

            {/* pagination */}
            <div className = "flex relative left-[4.5rem]">
                <div className = "w-[2rem] h-[2rem] rounded-[50%] border-solid border-[1px] border-gray-500">

                </div>
                {user?.personalFormations.map((formation, index) => {
                    return (
                        <div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SpeficPersonalFormation
