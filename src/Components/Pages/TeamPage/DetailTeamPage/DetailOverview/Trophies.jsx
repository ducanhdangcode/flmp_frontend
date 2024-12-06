import React, { useEffect, useState } from 'react'

import UCLCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/uclCup.png';
import EPLCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/premierLeagueCup.png';
import FACupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/EFLCup.png';
import CarabaoCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/carabaoCup.png';
import ClubWorldCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/clubWorldCupLogo.png';
import CommunityShieldCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/communityShieldCup.png';
import UefaSuperCupLogo from '/FLMP/flmp_frontend/src/Image/Trophies/uefaSuperCupFinal.png';
import EuropaLeagueLogo from '/FLMP/flmp_frontend/src/Image/Trophies/europaLeagueCup.png';
import InterContinentalLogo from '/FLMP/flmp_frontend/src/Image/Trophies/InterContinental.png';
import EFL2Cup from '/FLMP/flmp_frontend/src/Image/Trophies/efl2CupFinal.png';
import ConferenceCup from '/FLMP/flmp_frontend/src/Image/Trophies/conferenceCup.png';

import { FaCircle } from 'react-icons/fa';
import WebFont from 'webfontloader';
import { ListTeams } from '../../../../../APIService/TeamService';


const Trophies = ({teamId, teamList}) => {

    const TrophiesList = [UCLCupLogo, EPLCupLogo, FACupLogo, CarabaoCupLogo, CommunityShieldCupLogo, UefaSuperCupLogo, ClubWorldCupLogo, EuropaLeagueLogo, InterContinentalLogo, EFL2Cup, ConferenceCup]

    const PremierLeagueTeamTrophies = [
        "UEFA Champions League", 
        "Premier League", 
        "FA Cup", 
        "Carabao Cup", 
        "Community Shield", 
        "UEFA Super Cup", 
        "Club World Cup", 
        "Europa League", 
        "Inter Continental Cup",
        "EFL Championship Cup",
        "UEFA Conference Cup"
    ]

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    }, [])

  return (
    <div className = "absolute block bg-[white]" style = {{left: "0rem", width: "70.2rem", top: "23.5rem"}}>
        <div className = "bg-[#000B58] relative bottom-[0.5rem] w-[70.2rem] h-[3rem]">
            <p className = "text-2xl font-ubuntu font-bold relative text-white top-[0.4rem]" style = {{left: "2rem"}}>TROPHIES WON</p>
        </div>
        {(teamId > 0 && teamId <= 20) && 
            <div className = "flex">
                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[35.35rem]">
                    {PremierLeagueTeamTrophies.map((trophy, index) => {
                        if (index < 6) {
                            return <div className = {index % 2 === 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid white", borderRight: "1px solid white"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>

                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[34.85rem]">
                    {PremierLeagueTeamTrophies.map((trophy, index) => {
                        if (index >= 6) {
                            return <div className = {index % 2 !== 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid white"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>
            </div>
        }
    </div>
  )
}

export default Trophies
