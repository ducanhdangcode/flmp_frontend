import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import CoachProfileHeader from './CoachProfileHeader/CoachProfileHeader'
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getCoachByTeamName, getCoachGroupedStatbyCompetition, getCoachStatsByLeagueType, getContractByTeamName } from '../../../APIService/CoachService';
import CoachProfileDropdown from './CoachProfileDropdown/CoachProfileDropdown';
import CoachProfileNationalLeagueStat from './CoachProfileStat/CoachProfileNationalLeagueStat';
import CoachProfileHistory from './CoachProfileHistory/CoachProfileHistory';
import CoachProfileRecordAgainstClub from './CoachProfileRecords/CoachProfileRecordAgainstClub';
import CoachProfileRecordAgainstManager from './CoachProfileRecords/CoachProfileRecordAgainstManager';
import CoachProfileDebutCareer from './CoachProfileCareer/CoachProfileDebutCareer';

const CoachProfile = () => {
    const {teamName, storedTeamLogo, detailLogoHeight, detailLogoWidth, detailLogoLeft} = useTeamHeaderContext();
    const [coach, setCoach] = useState(null);
    const [currentContract, setCurrentContract] = useState(null);

    // stats grouped
    const [groupedCompetitionStatsNationalLeagues, setGroupedCompetitionStatsNationalLeagues] = useState([]);
    const [groupedCompetitionStatDomesticCups, setGroupedCompetitionStatDomesticCups] = useState([]);
    const [groupedCompetitionsStatEurope, setGroupedCompetitionStatEurope] = useState([]);

    // state to handle dropdown
    const [displayDropdown, setDisplayDropdown] = useState("");
    const [dropdownOptions, setDropdownOptions] = useState([]);

    // state to display stat option
    const [displayStatOption, setDisplayStatOption] = useState("");

    // state to display option
    const [displayOption, setDisplayOption] = useState("");

    // stats 
    const [nationalLeaguesStats, setNationalLeaguesStats] = useState([]);
    const [domesticCupsLeagueStats, setDomesticCupsLeagueStats] = useState([]);
    const [europeLeagueStats, setEuropeLeagueStats] = useState([]);

    // competition name national leagues set
    const [competitionNameNationalLeaguesSet, setCompetitionNameNationalLeagueSet]  = useState(new Set());
    const [competitionNameDomesticCupsSet, setCompetitionNameDomesticCupsSet] = useState(new Set());
    const [compeititonNameEuropeSet, setCompetitionNameEuropeSet] = useState(new Set());

    // league type debut career set
    const [leagueTypeDebutCareers, setLeagueTypeDebutCareers] = useState(new Set());

    useEffect(() => {
        getCoachByTeamName(teamName).then((response) => {
            setCoach(response.data);
            getContractByTeamName(response.data.name, teamName).then((contractResponse) => {
                setCurrentContract(contractResponse.data);
            }).catch(err => console.error(err));

            getCoachGroupedStatbyCompetition(response.data.name, 'National leagues').then((groupedStat) => {
                setGroupedCompetitionStatsNationalLeagues(groupedStat.data);
            }).catch(err => console.error(err));

            getCoachGroupedStatbyCompetition(response.data.name, 'Domestic cups').then((domesticGrouped) => {
                setGroupedCompetitionStatDomesticCups(domesticGrouped.data);
            }).catch(err => console.error(err));

            getCoachGroupedStatbyCompetition(response.data.name, 'Europe').then((europeGrouped) => {
                setGroupedCompetitionStatEurope(europeGrouped.data);
            }).catch(err => console.error(err));

            getCoachStatsByLeagueType(response.data.name, 'National leagues').then((nationalLeaguesStat) => {
                setNationalLeaguesStats(nationalLeaguesStat.data);
                nationalLeaguesStat.data.map((stat) => {
                    setCompetitionNameNationalLeagueSet(prevSet => new Set([...prevSet, stat.competitionName]))
                })
            }).catch(err => console.error(err));

            getCoachStatsByLeagueType(response.data.name, 'Domestic cups').then((domesticCupsStat) => {
                setDomesticCupsLeagueStats(domesticCupsStat.data);
                domesticCupsStat.data.map((stat) => {
                    setCompetitionNameDomesticCupsSet(prevSet => new Set([...prevSet, stat.competitionName]))
                })
            }).catch(err => console.error(err));

            getCoachStatsByLeagueType(response.data.name, 'Europe').then((europeStats) => {
                setEuropeLeagueStats(europeStats.data);
                europeStats.data.map((stat) => {
                    setCompetitionNameEuropeSet(prevSet => new Set([...prevSet, stat.competitionName]))
                })
            })

            response.data.debutCareers.map((career) => {
                setLeagueTypeDebutCareers(prevSet => new Set([...prevSet, career?.leagueType]));
            })
        }).catch(err => console.error(err));
    }, [])

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
                    setDisplayOption("")
                }} onMouseLeave = {() => setDisplayDropdown("")}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">STATS</p>
                    {displayDropdown !== "stats" ? <IoMdArrowDropdown className = "absolute right-[5rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[5rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen" onClick = {() => {
                    setDisplayOption("History")
                    setDisplayStatOption("")
                }}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">HISTORY</p>
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen relative" onMouseOver={() => {
                    setDisplayDropdown("records");
                    setDropdownOptions(['Record against clubs', 'Record against managers'])
                    setDisplayOption("")
                }}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black" onClick = {() => {
                        setDisplayOption("PersonalRecord")
                        setDisplayStatOption("")
                    }}>PERSONAL RECORD</p>
                    {displayDropdown !== "records" ? <IoMdArrowDropdown className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen relative" onMouseOver={() => {
                    setDisplayDropdown('career');
                    setDropdownOptions(['Debuts', 'Special Matches'])
                    setDisplayOption("")
                }}>
                    <p className = "font-teko text-xl font-bold text-white relative top-[0.15rem] hover:text-black">MANAGER CAREER</p>
                    {displayDropdown !== 'career' ? <IoMdArrowDropdown className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]" style = {{color: "white"}}/> : <IoMdArrowDropup className = "absolute right-[2rem] top-[0.2rem] w-[1.5rem] h-[1.5rem]"/>}
                </div>
                <div className = "w-[20%] hover:cursor-pointer bg-hardGreen hover:bg-easeGreen" onClick =  {() => {
                    setDisplayOption("News")
                    setDisplayStatOption("")
                }}>
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
                        groupedCompetitionStats = {groupedCompetitionStatsNationalLeagues}
                        competitionNameSets = {competitionNameNationalLeaguesSet}
                        coachStats = {nationalLeaguesStats}
                        title = {'NATIONAL LEAGUES'}
                    />  
                </div>
            }

            {/* stats domestic cups */}
            {displayStatOption === "Domestic cups" && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileNationalLeagueStat 
                        coach = {coach}
                        groupedCompetitionStats = {groupedCompetitionStatDomesticCups}
                        competitionNameSets={competitionNameDomesticCupsSet}
                        coachStats={domesticCupsLeagueStats}
                        title = {'DOMESTIC CUPS'}
                    />
                </div>
            }

            {/* stats europe cups */}
            {displayStatOption === 'Europe' && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileNationalLeagueStat 
                        coach={coach}
                        groupedCompetitionStats={groupedCompetitionsStatEurope}
                        competitionNameSets={compeititonNameEuropeSet}
                        coachStats={europeLeagueStats}
                        title = {'EUROPE'}
                    />
                </div>
            }

            {displayOption === 'History' && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileHistory 
                        coach = {coach}
                    />
                </div>
            }

            {displayStatOption === 'Record against clubs' && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileRecordAgainstClub 
                        coach = {coach}
                    />
                </div>
            }

            {displayStatOption === 'Record against managers' && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileRecordAgainstManager 
                        coach = {coach}
                    />
                </div>
            }

            {displayStatOption === 'Debuts' && 
                <div className = "mt-[1.5rem] relative left-[2rem]">
                    <CoachProfileDebutCareer 
                        coach = {coach}
                        leagueTypeDebutCareers = {leagueTypeDebutCareers}
                    />
                </div>
            }
      </div>
    </div>
  )
}

export default CoachProfile
