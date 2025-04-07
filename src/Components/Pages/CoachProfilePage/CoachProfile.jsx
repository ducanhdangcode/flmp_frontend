import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import CoachProfileHeader from './CoachProfileHeader/CoachProfileHeader'
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getCoachByTeamName, getCoachGroupedStatbyCompetition, getContractByTeamName } from '../../../APIService/CoachService';
import CoachProfileDropdown from './CoachProfileDropdown/CoachProfileDropdown';
import CoachProfileNationalLeagueStat from './CoachProfileStat/CoachProfileNationalLeagueStat';

const CoachProfile = () => {
    const {teamName, storedTeamLogo, detailLogoHeight, detailLogoWidth, detailLogoLeft} = useTeamHeaderContext();
    const [coach, setCoach] = useState(null);
    const [currentContract, setCurrentContract] = useState(null);

    // stats
    const [groupedCompetitionStats, setGroupedCompetitionStats] = useState([]);

    // state to handle dropdown
    const [displayDropdown, setDisplayDropdown] = useState("");
    const [dropdownOptions, setDropdownOptions] = useState([]);

    // state to display stat option
    const [displayStatOption, setDisplayStatOption] = useState("");

    // competition name national leagues set
    const [competitionNameNationalLeaguesSet, setCompetitionNameNationalLeagueSet]  = useState(new Set());

    useEffect(() => {
        getCoachByTeamName(teamName).then((response) => {
            setCoach(response.data);
            getContractByTeamName(response.data.name, teamName).then((contractResponse) => {
                setCurrentContract(contractResponse.data);
            }).catch(err => console.error(err));

            getCoachGroupedStatbyCompetition(response.data.name).then((groupedStat) => {
                setGroupedCompetitionStats(groupedStat.data);
            }).catch(err => console.error(err));

            response.data?.detailStats.map((stat) => {
                setCompetitionNameNationalLeagueSet(prevSet => new Set([...prevSet, stat.competitionName]))
            })
        }).catch(err => console.error(err));
    })

    const setupDisplayStatOption = (option) => {
        setDisplayStatOption(option);
    }
  return (
    <div className = "pb-[2rem] bg-white mt-[6rem]">
      <div className = "relative left-[2rem] top-[0rem]">
            {/* header */}
            <CoachProfileHeader 
                coach = {coach}
                storedTeamLogo = {storedTeamLogo}
                detailLogoHeight = {detailLogoHeight}
                detailLogoWidth = {detailLogoWidth}
                detailLogoLeft = {detailLogoLeft}
                currentContract = {currentContract}
            />

            {/* option bar */}
            <div className = "w-[93%] bg-hardGreen flex text-center relative left-[2rem] mt-[2rem]">
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen relative" onMouseOver={() => {
                    setDisplayDropdown("stats");
                    setDropdownOptions(['National leagues', 'Domestic cups', 'Europe'])
                }} onMouseLeave = {() => setDisplayDropdown("")}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">STATS</p>
                    {displayDropdown !== "stats" ? <IoMdArrowDropdown className = "absolute right-[5rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[5rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen">
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">HISTORY</p>
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen relative" onMouseOver={() => {
                    setDisplayDropdown("records");
                    setDropdownOptions(['Record against clubs', 'Record against managers'])
                }}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">PERSONAL RECORD</p>
                    {displayDropdown !== "records" ? <IoMdArrowDropdown className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen relative" onMouseOver={() => {
                    setDisplayDropdown('career');
                    setDropdownOptions(['Debuts', 'Special Matches'])
                }}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">MANAGER CAREER</p>
                    {displayDropdown !== 'career' ? <IoMdArrowDropdown className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen">
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">NEWS</p>
                </div>
            </div>
            
            {/* dropdown */}
            <div className = "relative left-[2rem]" onMouseOver={() => setDisplayDropdown(true)} onMouseLeave={() => setDisplayDropdown("")}>
                {displayDropdown !== "" && 
                    <CoachProfileDropdown 
                        options = {dropdownOptions}
                        setupDisplayStatOption = {setupDisplayStatOption}
                    />
                }
            </div>

            {/* stats national leagues */}
            {displayStatOption === "National leagues" && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileNationalLeagueStat 
                        coach = {coach}
                        groupedCompetitionStats = {groupedCompetitionStats}
                        competitionNameNationalLeaguesSet = {competitionNameNationalLeaguesSet}
                    />  
                </div>
            }
      </div>
    </div>
  )
}

export default CoachProfile
