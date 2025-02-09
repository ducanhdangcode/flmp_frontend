import React, { useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import WebFont from 'webfontloader';

import ManchesterCityLogo from '/FLMP/flmp_frontend/src/Image/EPL/manchesterCityLogo.png';
import ManchesterUnitedLogo from '/FLMP/flmp_frontend/src/Image/EPL/manchesterUnitedLogo.png';
import LiverpoolLogo from '/FLMP/flmp_frontend/src/Image/EPL/liverpoolLogo.png';
import ArsenalLogo from '/FLMP/flmp_frontend/src/Image/EPL/arsenalLogo.png';
import ChelseaLogo from '/FLMP/flmp_frontend/src/Image/EPL/chelseaLogo.png';
import TottenhamLogo from '/FLMP/flmp_frontend/src/Image/EPL/tottenhamLogo1.png';
import NewcastleLogo from '/FLMP/flmp_frontend/src/Image/EPL/newcastleNewLogo.png';
import AstonVillaLogo from '/FLMP/flmp_frontend/src/Image/EPL/aston.png';
import BrightonLogo from '/FLMP/flmp_frontend/src/Image/EPL/brightonLogo.png';
import BrentfordLogo from '/FLMP/flmp_frontend/src/Image/EPL/brentfordFinalLogo.png';
import CrystalPalaceLogo from '/FLMP/flmp_frontend/src/Image/EPL/crystalPalaceNewLogo.png';
import EvertonLogo from '/FLMP/flmp_frontend/src/Image/EPL/evertonLogo.png';
import FulhamLogo from '/FLMP/flmp_frontend/src/Image/EPL/fulhamNewLogo1.png';
import LeicesterCityLogo from '/FLMP/flmp_frontend/src/Image/EPL/leicesterCilyLogo.png';
import IspwichTownLogo from '/FLMP/flmp_frontend/src/Image/EPL/ispwichTownFinalLogo.png';
import SouthamptonLogo from '/FLMP/flmp_frontend/src/Image/EPL/southamptonNewLogo.png';
import WesthamLogo from '/FLMP/flmp_frontend/src/Image/EPL/westhamLogo.png';
import WolverhamptonLogo from '/FLMP/flmp_frontend/src/Image/EPL/wolverhamptonLogo.png';
import BournemouthLogo from '/FLMP/flmp_frontend/src/Image/EPL/bournemouthLogo.png';
import NottinghamForestLogo from '/FLMP/flmp_frontend/src/Image/EPL/nottinghamForestNewLogo.png';
import { Link } from 'react-router-dom';


const UserHiddenCard = ({recentUser, index}) => {
  const TeamLogos = [ManchesterCityLogo, ManchesterUnitedLogo, LiverpoolLogo, ArsenalLogo, ChelseaLogo, TottenhamLogo, NewcastleLogo, AstonVillaLogo, BrightonLogo, BrentfordLogo, CrystalPalaceLogo, EvertonLogo, FulhamLogo, LeicesterCityLogo, IspwichTownLogo, SouthamptonLogo, WesthamLogo, WolverhamptonLogo, BournemouthLogo, NottinghamForestLogo];
  const TeamLogosWidth = [10,10,10,10,10,6,6,10,10,4.5,5,10,5,4.5,4.5,10,10,5,4,10];
  const TeamLogosHeight = [5,5,5,5,5,5,5,5,5,4.5,5,5,4.5,4.5,5,5,5,4.5,5,5];
  const TeamLogosLeft = [0,0,0,0,0,1,0.8,0,0,1.6,1.5,0,1.5,1.6,1.6,0,0,1.3,1.7,0];
  const TeamLogosTop = [2,2,2,2,2,2,2,2,2,2.3,2,2,2.5,2.3,2.2,2,2,2.2,2.2,2];
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Agdasima']
            }
        })
    }, []);
  return (
    <div className = "w-32 h-36 border-dashed relative top-2 rounded-xl" style = {{backgroundColor: "#f0f6f7", borderColor: "gray", borderWidth: "2px", boxShadow: "0.3rem 0.3rem 0.5rem gray"}}>
      {/* <FaPlusCircle className = "relative w-12 h-12" style = {{top: "3rem", left: "2.5rem", color: "gray"}}/> */}
      {recentUser?.favoriteTeams.length > index ? 
        <img src = {TeamLogos[recentUser?.favoriteTeams[index]-1]} alt = "" className = "relative" style = {{top: `${TeamLogosTop[recentUser?.favoriteTeams[index]-1]}rem`, width: `${TeamLogosWidth[recentUser?.favoriteTeams[index]-1]}rem`, height: `${TeamLogosHeight[recentUser?.favoriteTeams[index]-1]}rem`, left: `${TeamLogosLeft[recentUser?.favoriteTeams[index]-1]}rem`}}/> : 
        <Link to = "/team">
          <FaPlusCircle className = "relative w-12 h-12" style = {{top: "3rem", left: "2.5rem", color: "gray"}}/>
        </Link>}
    </div>
  )
}

export default UserHiddenCard;
