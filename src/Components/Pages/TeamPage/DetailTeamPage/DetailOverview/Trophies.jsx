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
    const RightPositionCircle = [1.8, 0.5, 0, 0.5, 0.5, 0.2, 1.8, 1.2, 0.5, 0.9, 0];
    const WidthCup = [8, 8, 8, 8, 8, 5, 8]
    const TopCup = [0.5, 0, 0, 0.6, 0, 0.6, 0, 0.5, 0.2, -0.3]
    const TopTrophies = [0,0,43,43,43,43,40,39.5,45,47,47,45,42,45,40,45,45,45,45];

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    })

  return (
    <div className = "absolute block" style = {{left: "0rem", width: "75rem", top: "25rem"}}>
        <p className = "text-2xl font-ubuntu font-bold relative" style = {{left: "2rem"}}>TROPHIES WON</p>
        <div className = "flex ml-2 relative" style = {{flexFlow: "row wrap", width: "75rem", bottom: "0rem"}}>
            {teamList[teamId-1]?.trophies.map((trophie, index) => {
                if (trophie > 0) {
                    return <div className='flex mr-2 mt-8' >
                        <img className = "relative" src = {TrophiesList[index]} alt = "" style = {{width: `${WidthCup[index]}rem`, height: "9rem", top: `${TopCup[index]}rem`}}/>
                        <FaCircle style = {{color: "#04402f", top: "6.5rem", right: `${RightPositionCircle[index]}rem`}} className = "w-10 h-10 relative"/>
                        <p className = "relative text-xl font-ubuntu text-white" style = {{top: "6.85rem", right: `${RightPositionCircle[index] + 1.9}rem`}}>{teamList[teamId - 1]?.trophies[index].toString().padStart(2, '0')}</p>
                    </div>
                }
            })}
        </div>
    </div>
  )
}

export default Trophies
