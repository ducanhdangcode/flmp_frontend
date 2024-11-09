import React, { useEffect } from 'react'
import WebFont from 'webfontloader'

import EtihadStadium from '/FLMP/flmp_frontend/src/Image/Stadium/etihadStadium.jpg';
import OldTraffordStadium from '/FLMP/flmp_frontend/src/Image/Stadium/OldTrafford.jpg';
import LiverpoolStadium from '/FLMP/flmp_frontend/src/Image/Stadium/AnfieldStadium.jpg';
import ArsenalStadium from '/FLMP/flmp_frontend/src/Image/Stadium/ArsenalStadium.png';
import ChelseaStadium from '/FLMP/flmp_frontend/src/Image/Stadium/ChelseaStadium.jpg';
import TottenhamStadium from '/FLMP/flmp_frontend/src/Image/Stadium/tottenhamStadium.png';
import NewcastleStadium from '/FLMP/flmp_frontend/src/Image/Stadium/newcastleStadium.png';
import AstonVillaStadium from '/FLMP/flmp_frontend/src/Image/Stadium/astonVillaStadium.jpg';
import BrightonStadium from '/FLMP/flmp_frontend/src/Image/Stadium/brightonStadium.jpg';
import BrentfordStadium from '/FLMP/flmp_frontend/src/Image/Stadium/brentfordStadium.png';
import CrystalPalaceStadium from '/FLMP/flmp_frontend/src/Image/Stadium/crystalPalaceStadium.jpg';
import EvertonStadium from '/FLMP/flmp_frontend/src/Image/Stadium/evertonStadium.png';
import FulhamStadium from '/FLMP/flmp_frontend/src/Image/Stadium/fulhamStadium.jpg';
import LeicesterCityStadium from '/FLMP/flmp_frontend/src/Image/Stadium/leicesterStadium.jpg';
import IpswichTownStadium from '/FLMP/flmp_frontend/src/Image/Stadium/ipswichTownStadium.jpg';
import SouthamptonStadium from '/FLMP/flmp_frontend/src/Image/Stadium/southamptonStadium.jpg';
import WesthamStadium from '/FLMP/flmp_frontend/src/Image/Stadium/westhamStadium.jpg';
import WolverhamptonStadium from '/FLMP/flmp_frontend/src/Image/Stadium/wolverhamptonStadium.jpg';

import { RiArmchairFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';

const Stadium = ({teamId, teamList}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    })

    const Stadiums = [EtihadStadium, OldTraffordStadium, LiverpoolStadium, ArsenalStadium, ChelseaStadium, TottenhamStadium, NewcastleStadium, AstonVillaStadium, BrightonStadium, BrentfordStadium, CrystalPalaceStadium, EvertonStadium, FulhamStadium, LeicesterCityStadium, IpswichTownStadium, SouthamptonStadium, WesthamStadium, WolverhamptonStadium];
  return (
    <div className = "relative" style = {{bottom: "35rem"}}>
      <p className = "text-2xl font-ubuntu font-bold relative" style = {{left: "2rem", bottom: "0.2rem"}}>STADIUM</p>
      <div className = "flex">
        <img src = {Stadiums[teamId - 1]} alt = "" className = "relative" style = {{width: "35rem", height: "20rem", left: "2rem", top: "1rem", borderRadius: "12px"}}/>
        <div className = "block">
            <p className = "text-4xl font-roboto font-bold relative" style = {{left: "4rem", top: "0.1rem"}}>{teamList[teamId - 1]?.stadium}</p>
            <div className = "flex">
                <RiArmchairFill className = "relative w-10 h-10" style = {{left: "4rem", top: "1.2rem"}}/>
                <p className = "text-3xl font-roboto relative font-semibold" style = {{left: "5rem", top: "1.1rem"}}>{teamList[teamId - 1]?.stadiumTotalSeat}</p>
            </div>
            <div className = "flex relative top-5">
                <FaLocationDot className = "relative w-10 h-10" style = {{left: "4rem", top: "1.2rem"}}/>
                <p className = "text-3xl font-roboto relative font-semibold" style = {{left: "5rem", top: "1.1rem"}}>{teamList[teamId-1]?.stadiumLocation}</p>
            </div>
            <div className = "flex relative top-12">
                <FaCalendarAlt className = "relative w-10 h-10" style = {{left: "4rem", top: "1.2rem"}}/>
                <p className = "text-3xl font-roboto relative font-semibold" style = {{left: "5rem", top: "1.1rem"}}>{teamList[teamId-1]?.stadiumOpenDate}</p>
            </div>
            <div className = "flex relative" style = {{top: "4.5rem"}}>
                <RiMoneyEuroCircleFill className = "relative w-10 h-10" style = {{left: "4rem", top: "1.2rem"}}/>
                <p className = "text-3xl font-roboto relative font-semibold" style = {{left: "5rem", top: "1.1rem"}}>{teamList[teamId-1]?.stadiumCost}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stadium
