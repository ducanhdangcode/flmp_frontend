import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { RiExchangeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdViewAgenda } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { deletePersonalSpecifiedFormation, getUserByUsername } from '../../../../../../APIService/UserService.';
import { useUserContext } from '../../../../../../Context/UserContext';
import { toast, ToastContainer } from 'react-toastify';

const SpeficPersonalFormation = ({user, drawFormation, team, teamId, activePersonalFormationIndex, handleChangeActivePersonalFormationIndex, handleSetNextActiveIndex, handleSetPreviousActiveIndex, startPaginationIndex, disableViewPersonalFormation, formation, filteredFormations, handleEnableChangePersonalFormation, formationIndex, setupFilteredFormations, applyViewPersonalFormation}) => {
    const [displayDeleteNoti, setDisplayDeleteNoti] = useState(false);

    const {loginUsername} = useUserContext();

    const applyDeleteFormation = async () => {
        await deletePersonalSpecifiedFormation(user?.id, activePersonalFormationIndex-1);
        getUserByUsername(loginUsername).then((response) => {
            console.log("user after deleted: ", response.data);
            setupFilteredFormations(formation, response.data);
        })
        toast("Delete formation successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "bg-green-500 text-white font-bold p-4 rounded-lg shadow-lg",
            progressClassName: "bg-white",
        })
        handleSetPreviousActiveIndex();
        setDisplayDeleteNoti(false);
        disableViewPersonalFormation();
        applyViewPersonalFormation(formationIndex);
    }
  return (
    <div>
        {/* delete notifications */}
        {displayDeleteNoti === true && 
            <div className = "absolute w-[25rem] h-[10rem] bg-gray-300 z-10 left-[15rem] top-[15rem] rounded-[5px]">
                <p className = "text-center font-changa font-bold text-lg mt-[3rem]">Are you sure to delete this formation?</p>
                <div className = "flex relative text-white font-changa top-[0.5rem] left-[2rem]">
                    <button className = "w-[8rem] h-[2rem] bg-green-500 rounded-[5px]" onClick = {applyDeleteFormation}>Yes</button>
                    <button className = "w-[8rem] h-[2rem] bg-red-500 rounded-[5px] relative left-[4rem]" onClick = {() => setDisplayDeleteNoti(false)}>No</button>
                </div>
            </div>
        }

        {/* specific personal formation */}
        <div className = "z-0" style = {{opacity: displayDeleteNoti === true && "0.7"}}>
            <div className = "flex">
                {/* formation court and player  */}
                <div className = "relative top-[2rem] w-[25rem]">
                    <img src = {FootballField} alt = "" className = "w-[25rem] h-[25rem] opacity-80" />
                    <div>
                        {filteredFormations[activePersonalFormationIndex-1]?.mainSquad.map((player, index) => {
                            if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "3-4-2-1") {
                                return drawFormation(0, player, index);
                            } else if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "3-4-3") {
                                return drawFormation(1, player, index);
                            } else if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "4-3-3") {
                                return drawFormation(2, player, index);
                            } else if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "4-2-3-1") {
                                return drawFormation(3, player, index);
                            } else if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "4-4-2") {
                                return drawFormation(4, player, index);
                            } else if (filteredFormations[activePersonalFormationIndex-1]?.formationName === "4-1-4-1") {
                                return drawFormation(5, player, index);
                            }
                        })}
                    </div>
                </div>

                {/* note of player */}
                <div className = "relative flex top-[1rem] w-[25rem]">
                    {/* left side */}
                    <div>
                        {filteredFormations[activePersonalFormationIndex-1]?.mainSquad.map((player, index) => {
                            if (index >= 0 && index <= 5) {
                                return (
                                    <div className = "flex">
                                        {/* player number */}
                                        <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] mt-[1.5rem] right-[1.5rem]" style = {{backgroundColor: team?.color}}>
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
                        {filteredFormations[activePersonalFormationIndex-1]?.mainSquad.map((player, index) => {
                            if (index >= 6 && index <= 10) {
                                return (
                                    <div className = "flex">
                                        {/* player number */}
                                        <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] mt-[1.5rem] right-[1.5rem]" style = {{backgroundColor: team?.color}}>
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
                    {filteredFormations[activePersonalFormationIndex-1]?.substitutions.map((player, index) => {
                        return (
                            <div className = "flex mr-[2rem]">
                                <div className = "w-[2.2rem] h-[2.2rem] rounded-[50%] relative border-solid border-white border-[2px] hover:cursor-pointer" style = {{backgroundColor: team?.color}} 
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
                    <span className = "relative left-[0.5rem] top-[0.2rem]" onClick = {() => {
                        disableViewPersonalFormation();
                        handleEnableChangePersonalFormation(formationIndex);
                    }}>Change players</span>
                </button>

                {/* delete squad */}
                <button className = "flex w-[12rem] h-[2rem] bg-red-500 text-white font-bold relative left-[1.5rem]">
                    <span><MdDelete className = "w-[1.5rem] h-[1.5rem] relative left-[0.5rem] top-[0.2rem]"/></span>
                    <span className = "relative left-[0.8rem] top-[0.2rem]" onClick = {() => setDisplayDeleteNoti(true)}>Delete formations</span>
                </button>

                {/* view default formation */}
                <button className = "flex w-[10rem] h-[2rem] bg-gray-500 text-white font-bold relative left-[3rem]">
                    <span><MdViewAgenda className = "w-[1.5rem] h-[1.5rem] relative left-[0.8rem] top-[0.2rem]"/></span>
                    <span className = "relative left-[1.2rem] top-[0.2rem]" onClick = {disableViewPersonalFormation}>View default</span>
                </button>

                {/* pagination */}
                <div className = "flex relative left-[4.5rem]">
                    <div className = "w-[1.5rem] h-[2rem] bg-gray-500 rounded-[5px] hover:cursor-pointer" onClick = {() => {
                        handleSetPreviousActiveIndex();
                    }}>
                        <MdKeyboardArrowLeft className = "w-[1.5rem] h-[1.5rem] relative left-[0rem] top-[0.2rem]" style = {{color: "white"}} />
                    </div>
                    <div className = "flex">
                        {filteredFormations?.map((formation, index) => {
                            if (index >= startPaginationIndex && index <= startPaginationIndex + 2) {
                                return (
                                    <div className = "w-[1.5rem] h-[2rem] rounded-[5px] relative left-[0.5rem] mx-[0.5rem] hover:cursor-pointer" style = {{backgroundColor: activePersonalFormationIndex !== index + 1 ? "#9ca3af" : "#6984f5"}} onClick = {() => handleChangeActivePersonalFormationIndex(index + 1)}>
                                        <p className = "font-bold text-white text-lg relative left-[0.4rem] top-[0.1rem]">{index+1}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className = "w-[1.5rem] h-[2rem] bg-gray-500 rounded-[5px] relative left-[1rem] hover:cursor-pointer" onClick = {() => {
                        handleSetNextActiveIndex();
                    }}>
                        <MdKeyboardArrowRight className = "w-[1.5rem] h-[1.5rem] relative left-[0rem] top-[0.2rem]" style = {{color: "white"}} />
                    </div>
                </div>
            </div>
        </div>

        {/* toast */}
        <ToastContainer />
    </div>
  )
}

export default SpeficPersonalFormation
