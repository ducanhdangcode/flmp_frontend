import React, { useEffect } from 'react'

// import logo
import EPLLogo from '/FLMP/flmp_frontend/src/Image/EPL/EPLLogo.png';
import EPLPattern from '/FLMP/flmp_frontend/src/Image/EPL/EPLPattern.png';
import EPLLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/premierLeagueWhite.png';
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

import TotthenhamLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/tottenhamLogoWhite.png';
import LiverpoolLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/liverpoolLogoWhite.png';


import TeamCard from './TeamCard';

import AOS from 'aos';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../../Context/ThemeContext';
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';

const ListTeamEPL = ({}) => {
  const {theme, lightColor, darkColor} = useThemeContext();

  // team header context
  const {setStoredTeamLogo, setTeamId, setDetailLogoHeight, setDetailLogoWidth, setDetailLogoTop, setDetailLogoLeft, setDetailNameBottom, setTeamName} = useTeamHeaderContext();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  const ManchesterCityId = 1;
  const ManchesterUnitedId = 2;
  const LiverpoolId = 3;
  const ArsenalId = 4;
  const ChelseaId = 5;
  const TottenhamId = 6;
  const NewCastleId = 7;
  const AstonVillaId = 8;
  const BrightonId = 9;
  const BrentfordId = 10;
  const CrystalPalaceId = 11;
  const EvertonId = 12;
  const FulhamId = 13;
  const LeicesterCityId = 14;
  const IspwichTownId = 15;
  const SouthamptonId = 16;
  const WestHamId = 17;
  const WolverhamptonId = 18;
  const BournemouthId = 19;
  const NottinghamForestId = 20;

  const handleClick = (id, teamName, logo, height, width, top, left, nameBottom) => {
    setStoredTeamLogo(logo);
    setTeamName(teamName);
    setTeamId(id);
    setDetailLogoHeight(height);
    setDetailLogoWidth(width);
    setDetailLogoTop(top);
    setDetailLogoLeft(left);
    setDetailNameBottom(nameBottom);
    

    // local storage
    localStorage.setItem("team-logo", logo);
    localStorage.setItem("team-id", id);
    localStorage.setItem("detail-logo-height", height);
    localStorage.setItem("detail-logo-width", width);
    localStorage.setItem("detail-logo-top", top);
    localStorage.setItem("detail-logo-left", left);
    localStorage.setItem("detail-name-bottom", nameBottom);
    localStorage.setItem("team-name", teamName);
  }

  return (
    <div>
      <div className = "relative" style = {{backgroundColor: theme === lightColor ? "#C7DB9C" : "", height: "60rem"}} data-aos = "zoom-out-up">
          <img src = {theme === lightColor ? EPLLogo : EPLLogoWhite} alt = "Premier League Logo" className = {theme === lightColor ? "w-72 h-32 relative" : "w-96 h-64 relative"} style = {{left: "4rem", top: "2rem"}}/>
          <div className = {theme === lightColor ? "relative top-16 flex" : "relative top-0 flex"} style = {{flexFlow: "row wrap"}}>
            <Link to = "/team/manchester-city">
              <TeamCard TeamLogo = {ManchesterCityLogo} TeamName = {"Manchester City"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#05c1f0"} hoverImage={EPLPattern} hoverTeamLogo = {ManchesterCityLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterCityId, "Manchester City", ManchesterCityLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/manchester-united">
              <TeamCard TeamLogo = {ManchesterUnitedLogo} TeamName = {"Manchester United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo = {ManchesterUnitedLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterUnitedId, "Manchester United", ManchesterUnitedLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/liverpool">
              <TeamCard TeamLogo = {LiverpoolLogo} TeamName = {"Liverpool"} addStyle={{top: "0.5rem", right: "0.8rem", height: "5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={LiverpoolLogoWhite} hoverStyle = {{bottom: "0.5rem", right: "1rem", height: "7rem", width: "8.5rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(LiverpoolId, "Liverpool", LiverpoolLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/arsenal">
              <TeamCard TeamLogo = {ArsenalLogo} TeamName = {"Arsenal"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={ArsenalLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ArsenalId,"Arsenal",  ArsenalLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/chelsea">
              <TeamCard TeamLogo = {ChelseaLogo} TeamName = {"Chelsea"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#0026ff"} hoverImage = {EPLPattern} hoverTeamLogo={ChelseaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ChelseaId,"Chelsea",  ChelseaLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/tottenham-hotspur">
              <TeamCard TeamLogo = {TottenhamLogo} TeamName = {"Tottenham"} addStyle={{top: "1rem", left: "0.5rem", height: "4.2rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#07155c"} hoverImage = {EPLPattern} hoverTeamLogo={TotthenhamLogoWhite} hoverStyle={{top: "0rem", right: "0.5rem", height: "6rem", width: "7rem"}} hoverStyleText={{right: "0.3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(TottenhamId, "Tottenham", TottenhamLogo, 14, 18, 3, 4, 2.5)}/>
            </Link>

            <Link to = "/team/newcastle-united">
              <TeamCard TeamLogo = {NewcastleLogo} TeamName = {"Newcastle"} addStyle={{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#41434d"} hoverImage = {EPLPattern} hoverTeamLogo={NewcastleLogo} hoverStyle = {{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} hoverStyleText={{left: "1.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(NewCastleId, "Newcastle United", NewcastleLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/aston-villa">
              <TeamCard TeamLogo = {AstonVillaLogo} TeamName = {"Aston Villa"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#9e184d"} hoverImage = {EPLPattern} hoverTeamLogo={AstonVillaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(AstonVillaId, "Aston Villa", AstonVillaLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/brighton">
              <TeamCard TeamLogo = {BrightonLogo} TeamName = {"Brighton & Hove Albion"} addStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} addStyleText = {{right: "2.5rem", top: "0.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={BrightonLogo} hoverStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} hoverStyleText={{right: "2.5rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(BrightonId, "Brighton & Hove Albion", BrightonLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/brentford">
              <TeamCard TeamLogo = {BrentfordLogo} TeamName = {"Brentford"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={BrentfordLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BrentfordId, "Brentford", BrentfordLogo, 12, 12, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/crystal-palace">
              <TeamCard TeamLogo = {CrystalPalaceLogo} TeamName = "Crystal Palace" addStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={CrystalPalaceLogo} hoverStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(CrystalPalaceId, "Crystal Palace", CrystalPalaceLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/everton">
              <TeamCard TeamLogo = {EvertonLogo} TeamName = {"Everton"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={EvertonLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => {
                handleClick(EvertonId, "Everton", EvertonLogo, 14, 23, 3, 2, 2.5)
              }}/>
            </Link>

            <Link to = "/team/fulham">
              <TeamCard TeamLogo = {FulhamLogo} TeamName = {"Fulham"} addStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#686a6e"} hoverImage={EPLPattern} hoverTeamLogo={FulhamLogo} hoverStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}} handleClick={() => handleClick(FulhamId, "Fulham", FulhamLogo, 14, 16, 3, 5, 2.5)}/>
            </Link>

            <Link to = "/team/leicester-city">
              <TeamCard TeamLogo = {LeicesterCityLogo} TeamName = {"Leicester City"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={LeicesterCityLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(LeicesterCityId, "Leicester City", LeicesterCityLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/ispwich-town">
              <TeamCard TeamLogo = {IspwichTownLogo} TeamName = {"Ipswich Town"} addStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={IspwichTownLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(IspwichTownId,"Ipswich Town", IspwichTownLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/southampton">
              <TeamCard TeamLogo = {SouthamptonLogo} TeamName = {"Southampton"} addStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} addStyleText = {{right: "3rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={SouthamptonLogo} hoverStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} hoverStyleText={{right: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(SouthamptonId, "Southampton", SouthamptonLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/west-ham">
              <TeamCard TeamLogo = {WesthamLogo} TeamName = {"West Ham United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9e184d"} hoverImage={EPLPattern} hoverTeamLogo={WesthamLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(WestHamId, "West Ham United", WesthamLogo, 14, 23, 3, 2, 2.5)}/>
            </Link>

            <Link to = "/team/wolverhampton-wanderers">
              <TeamCard TeamLogo = {WolverhamptonLogo} TeamName = {"Wolverhampton Wanderers"} addStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "1.8rem", top: "0.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e67f09"} hoverImage={EPLPattern} hoverTeamLogo={WolverhamptonLogo} hoverStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "1.8rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(WolverhamptonId, "Wolverhampton Wanderers", WolverhamptonLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/bournemouth">
              <TeamCard TeamLogo = {BournemouthLogo} TeamName = {"Bournemouth"} addStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "1.8rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9c1017"} hoverImage={EPLPattern} hoverTeamLogo={BournemouthLogo} hoverStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BournemouthId, "Bournemouth", BournemouthLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/nottingham-forest">
              <TeamCard TeamLogo = {NottinghamForestLogo} TeamName = {"Nottingham Forest"} addStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} addStyleText = {{right: "2.2rem", top: "0.9rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={NottinghamForestLogo} hoverStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} hoverStyleText={{right: "2.2rem", top: "0.9rem", color: "white"}} handleClick={() => handleClick(NottinghamForestId, "Nottingham Forest", NottinghamForestLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default ListTeamEPL
