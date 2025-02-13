import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { getFormationByTeamName } from '../../../../../../APIService/FormationService';
import ChangeFormation from './ChangeFormation';
import CreateFormation from './CreateFormation';
import { useUserContext } from '../../../../../../Context/UserContext';
import PersonalFormation from './PersonalFormation';
import { getUserByUsername } from '../../../../../../APIService/UserService.';

const Formation = ({teamList, teamId, FormationCoordinate}) => {

    const [formations, setFormations] = useState([]);

    const [changeFormation, setChangeFormation] = useState("");

    const [createFormation, setCreateFormation] = useState("");

    const [viewPersonalFormation, setViewPersonalFormation] = useState("");

    const [activePersonalFormationIndex, setActivePersonalFormationIndex] = useState(1);

    const {loginUsername} = useUserContext();

    const [user, setUser] = useState(null);

    const [startPaginationIndex, setStartPaginationIndex] = useState(0);
    const PaginationRange = 3;

    const [filteredFormations, setFilteredFormations] = useState([]);

    useEffect(() => {
        getFormationByTeamName(teamList[teamId-1]?.name).then((response => {
            setFormations(response.data);
        })).catch(err => console.error(err));

        getUserByUsername(loginUsername).then((response) => {
            setUser(response.data);
        }).catch(err => console.error(err));
    }, []);

    const disableChangeFormation = () => {
        setChangeFormation("");
    }

    const disableCreateFormation = () => {
        setCreateFormation("");
    }

    const disableViewPersonalFormation = () => {
        setViewPersonalFormation("");
    }

    const applyViewPersonalFormation = (index) => {
        setViewPersonalFormation(index);
    }

    const handleChangeFormationDisplay = (newFormation) => {
        setFormations(newFormation);
    }

    const handleChangeActivePersonalFormationIndex = (activeIndex) => {
        setActivePersonalFormationIndex(activeIndex);
    }

    const handleSetNextActiveIndex = () => {
        setActivePersonalFormationIndex(prev => {
            const newIndex = prev + 1;
            
            if (newIndex <= user?.personalFormations.length) {
                handleChangeGroupIndex(newIndex);  // Pass newIndex directly
                return newIndex;
            }
            return prev;
        });
    };
    
    const handleSetPreviousActiveIndex = () => {
        setActivePersonalFormationIndex(prev => {
            const newIndex = prev - 1;
    
            if (newIndex >= 1) {
                handleChangeGroupIndex(newIndex);  // Pass newIndex directly
                return newIndex;
            }
            return prev;
        });
    };

    const handleChangeGroupIndex = (newIndex) => {
        setStartPaginationIndex(prev => {
            if (newIndex > prev + PaginationRange) {
                return newIndex - 1;
            }
            if (newIndex <= prev) {
                return prev - 3;
            }
            return prev;
        });
    };

    const drawFormation = (typeFormationIndex, player, playerIndex) => {
        return (
            <div className = "">
                <div className = {`w-[2rem] h-[2rem] rounded-[50%] border-solid border-white border-[2px]  hover:cursor-pointer`} style = {{backgroundColor: teamList[teamId-1]?.color, position: "absolute", top: `${FormationCoordinate[typeFormationIndex].coordinate[playerIndex].y}rem`, left: `${FormationCoordinate[typeFormationIndex].coordinate[playerIndex].x}rem`}}
                >
                    <span className = "text-white font-bold relative top-[0.1rem] left-[0.3rem]">{player?.number.toString().padStart(2, "0")}</span>
                </div>
            </div>
        )
    }

    const setupFilteredFormations = (formation, recentUser) => {
        let filteredFormationTmp = [];
        recentUser?.personalFormations.map((personalFormation) => {
            if (personalFormation?.teamName === formation?.teamName && personalFormation?.formationName === formation?.formationName) {
                filteredFormationTmp.push(personalFormation);
            }
        })
        setFilteredFormations(filteredFormationTmp);
    }
  return (
    <div className = "relative">
        <div className = "bg-[#112f54] h-[3rem]">
            <p className = "font-ubuntu text-3xl font-bold relative left-[2rem] top-[0.1rem] text-white">Formations</p>
        </div>
        <div className = "">
            {formations.map((formation, formationIndex) => {
                return (
                    <div className = "w-full overflow-y-clip">
                        <div className = "flex h-[40rem]">
                            {/* change formation */}
                            {changeFormation === formationIndex && 
                                <div>
                                    <ChangeFormation 
                                        formation = {formation}
                                        teamList = {teamList}
                                        teamId = {teamId}
                                        disableChangeFormation = {disableChangeFormation}
                                        handleChangeFormationDisplay = {handleChangeFormationDisplay}
                                    />
                                </div>
                            }

                            {/* create formation */}
                            {createFormation === formationIndex && 
                                <div>
                                    <CreateFormation 
                                        formation = {formation}
                                        teamList = {teamList}
                                        teamId = {teamId}
                                        disableCreateFormation = {disableCreateFormation}
                                        applyViewPersonalFormation = {applyViewPersonalFormation}
                                        formationIndex = {formationIndex}
                                        handleChangeActivePersonalFormationIndex = {handleChangeActivePersonalFormationIndex}
                                        handleChangeGroupIndex = {handleChangeGroupIndex}
                                        user = {user}
                                        setupFilteredFormations = {setupFilteredFormations}
                                    />
                                </div>
                            }

                            {/* personal formation */}
                            {viewPersonalFormation === formationIndex && 
                                <div>
                                    <PersonalFormation 
                                        drawFormation = {drawFormation}
                                        teamList = {teamList}
                                        teamId = {teamId}
                                        activePersonalFormationIndex = {activePersonalFormationIndex}
                                        handleChangeActivePersonalFormationIndex = {handleChangeActivePersonalFormationIndex}
                                        handleSetNextActiveIndex = {handleSetNextActiveIndex}
                                        handleSetPreviousActiveIndex = {handleSetPreviousActiveIndex}
                                        startPaginationIndex = {startPaginationIndex}
                                        handleChangeGroupIndex = {handleChangeGroupIndex}
                                        disableViewPersonalFormation = {disableViewPersonalFormation}
                                        formation = {formation}
                                        filteredFormations = {filteredFormations}
                                    />
                                </div>
                            }

                            {/* base formation */}
                            {((changeFormation === "" || changeFormation !== formationIndex) && (createFormation === "" || createFormation !== formationIndex) && (viewPersonalFormation === "" || viewPersonalFormation !== formationIndex)) && 
                                <div className = "flex">
                                    {/* minicourt and players */}
                                    <div className = "relative top-[2rem] w-[25rem]">
                                        <img src = {FootballField} alt = "" className = "w-[25rem] h-[25rem] opacity-80"/>
                                        <div className = "relative bottom-[25rem]">
                                            <div className = "">
                                                {formation?.detailSquad.map((player, index) => {
                                                    if (formation?.formationName === "3-4-2-1") {
                                                        return drawFormation(0, player, index, formationIndex);
                                                    } else if (formation?.formationName === "3-4-3") {
                                                        return drawFormation(1, player, index, formationIndex);
                                                    } else if (formation?.formationName === "4-3-3") {
                                                        return drawFormation(2, player, index, formationIndex);
                                                    } else if (formation?.formationName === "4-2-3-1") {
                                                        return drawFormation(3, player, index, formationIndex);
                                                    } else if (formation?.formationName === "4-4-2") {
                                                        return drawFormation(4, player, index, formationIndex);
                                                    } else if (formation?.formationName === "4-1-4-1") {
                                                        return drawFormation(5, player, index, formationIndex);
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* note about formation */}
                                    <div className = "relative flex top-[1rem] w-[25rem]">
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
                                </div>
                            }

                            {/* feedback about formation */}
                            <div className = "absolute right-[0.9rem]">
                                {/* title */}
                                <div className = "bg-[#16301d] h-[2.5rem] w-[40rem]">
                                    <p className = "text-center text-xl text-white font-bold relative top-[0.2rem]">{`${formation?.coachFormation}'s ${formation?.formationName}`}</p>
                                </div>
                                <div className = "bg-[#d1cdcd] w-[40rem] h-[39rem]">
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
                        {((changeFormation === "" || changeFormation !== formationIndex) && (createFormation === "" || createFormation !== formationIndex) && (viewPersonalFormation === "" || viewPersonalFormation !== formationIndex)) && 
                            <div className = "relative bottom-[13rem] left-[4rem] h-[0rem] mt-[1rem]">
                                <p className = "font-bold">Substitutions:</p>
                                <div className = "flex flex-wrap mt-[0.5rem] w-[50rem]">
                                    {formation?.substitutions.map((player, index) => {
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
                        }

                        {/* some options */}
                        {((changeFormation === "" || changeFormation !== formationIndex) && (createFormation === "" || createFormation !== formationIndex) && (viewPersonalFormation === "" || viewPersonalFormation !== formationIndex)) && 
                            <div className = "flex relative bottom-[4rem] h-[0rem]">
                                <button className = "w-[8rem] h-[2rem] bg-[#ebc94e] text-white font-bold relative left-[4rem] bottom-[0rem] rounded-[5px]" onClick = {() => setChangeFormation(formationIndex)}>Change players</button>
                                <button className = "w-[10rem] h-[2rem] bg-[#ebc94e] text-white font-bold relative left-[7rem] bottom-[0rem] rounded-[5px]" onClick = {() => setCreateFormation(formationIndex)}>Create own squad</button>
                                <button className = "w-[10rem] h-[2rem] bg-[#ebc94e] text-white font-bold relative left-[10rem] bottom-[0rem] rounded-[5px]" onClick = {() => {
                                    setViewPersonalFormation(formationIndex);
                                    setupFilteredFormations(formation, user);
                                }}>View your squad</button>
                            </div>
                        }

                        <div className = "w-full h-[0.1rem] bg-gray-500 mt-[0rem] relative"></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Formation
