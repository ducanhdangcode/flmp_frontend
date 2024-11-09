import React, { useEffect } from 'react'

import Ligue1Logo from '/FLMP/flmp_frontend/src/Image/Ligue1/newLigue1Logo.png';
import Ligue1LogoWhite from '/FLMP/flmp_frontend/src/Image/Ligue1/ligue1WhiteLogo.png';
import PSGLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/psgNewLogo.png';
import AsMonacoLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/asMonacoNewLogo.png';
import MarseilleLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/olympiqueMarseilleLogo.png';
import LilleLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/lilleNewLogo.png';
import ReimsLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/reimsLogo.png';
import LensLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/lensNewLogo.png';
import StrasbourgLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/strasbourgNewLogo.png';
import LyonLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/lyonNewLogo.png';
import NiceLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/niceLogo.png';
import NantesLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/nantesLogo.png';
import BrestLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/brestoisNewLogo.png';
import SaintEtienneLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/saintEtienneNewLogo.png';
import AuxerreLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/auxerreNewLogo.png';
import LeHavreLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/leHavreNewLogo.png';
import ToulouseLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/toulouseLogo.png';
import MontpellierLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/montpellierNewLogo.png';
import AngersLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/angersNewLogo.png';
import RennesLogo from '/FLMP/flmp_frontend/src/Image/Ligue1/rennesNewLogo.png';

import TeamCard from './TeamCard';

import Ligue1Pattern from '/FLMP/flmp_frontend/src/Image/Ligue1/ligue1NewPattern.png';

import AOS from 'aos';

const ListTeamLigue1 = ({colorTheme, lightColor, darkColor}) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  return (
    <div className = "relative" style = {{backgroundColor: colorTheme === lightColor ? "" : "#171447", height: "60rem", top: "31rem"}} data-aos = "zoom-out-up">
        <img src = {colorTheme === lightColor ? Ligue1Logo : Ligue1LogoWhite} alt = "Ligue 1 Logo" className = {colorTheme === lightColor ? "w-72 h-40 relative" : "w-52 h-44 relative"} style = {colorTheme === lightColor ? {left: "4rem", top: "2rem"} : {left: "6rem", top: "2rem"}}/>
        <div className = "relative top-16 flex" style = {{flexFlow: "row wrap"}}>
            <TeamCard TeamLogo = {PSGLogo} TeamName = {"Paris Saint-Germain"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#0f2657"} hoverImage={Ligue1Pattern} hoverTeamLogo={PSGLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {AsMonacoLogo} TeamName = {"AS Monaco"} addStyle={{top: "0.5rem", left: "1.3rem", height: "4.8rem", width: "3rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e61a0b"} hoverImage={Ligue1Pattern} hoverTeamLogo={AsMonacoLogo} hoverStyle={{top: "0.5rem", left: "1.3rem", height: "4.8rem", width: "3rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {MarseilleLogo} TeamName = {"Olympique Marseille"} addStyle={{top: "0.8rem", left: "1rem", width: "4rem", height: "4.5rem"}} addStyleText = {{left: "1.7rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#064163"} hoverImage={Ligue1Pattern} hoverTeamLogo={MarseilleLogo} hoverStyle={{top: "0.5rem", left: "1.3rem", width: "4rem", height: "4.5rem"}} hoverStyleText={{left: "1.7rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {LilleLogo} TeamName = {"LOSC Lille"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e61a0b"} hoverImage={Ligue1Pattern} hoverTeamLogo={LilleLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {ReimsLogo} TeamName = {"Stade de Reims"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3rem"}} addStyleText = {{left: "3.3rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={Ligue1Pattern} hoverTeamLogo={ReimsLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3rem"}} hoverStyleText={{left: "3.3rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {LensLogo} TeamName = {"RC Lens"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "2.1rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#eef522"} hoverImage={Ligue1Pattern} hoverTeamLogo={LensLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "2.1rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {StrasbourgLogo} TeamName = {"RC Strasbourg Alsace"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "1.7rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#096bdb"} hoverImage={Ligue1Pattern} hoverTeamLogo={StrasbourgLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "1.7rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {LyonLogo} TeamName = {"Olympique Lyonnais"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "2.7rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={Ligue1Pattern} hoverTeamLogo={LyonLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "2.7rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {NiceLogo} TeamName = {"OGC Nice"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#700a0c"} hoverImage={Ligue1Pattern} hoverTeamLogo={NiceLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {NantesLogo} TeamName = {"FC Nantes"} addStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#11801a"} hoverImage={Ligue1Pattern} hoverTeamLogo={NantesLogo} hoverStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {BrestLogo} TeamName = {"Stade Brestois 29"} addStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e61a0b"} hoverImage={Ligue1Pattern} hoverTeamLogo={BrestLogo} hoverStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {SaintEtienneLogo} TeamName = {"AS Saint-Etienne"} addStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#207d28"} hoverImage={Ligue1Pattern} hoverTeamLogo={SaintEtienneLogo} hoverStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {AuxerreLogo} TeamName = {"AJ Auxerre"} addStyle={{top: "0.8rem", left: "0.2rem", height: "4.5rem", width: "5.5rem"}} addStyleText = {{left: "0.8rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#1c40b8"} hoverImage={Ligue1Pattern} hoverTeamLogo={AuxerreLogo} hoverStyle={{top: "0.8rem", left: "0.2rem", height: "4.5rem", width: "5.5rem"}} hoverStyleText={{left: "0.8rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {LeHavreLogo} TeamName = {"Le Havre"} addStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0a1b54"} hoverImage={Ligue1Pattern} hoverTeamLogo={LeHavreLogo} hoverStyle={{top: "0.8rem", left: "1.3rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {ToulouseLogo} TeamName = {"Toulouse FC"} addStyle={{top: "1rem", left: "1.2rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#3e0642"} hoverImage={Ligue1Pattern} hoverTeamLogo={ToulouseLogo} hoverStyle={{top: "1rem", left: "1.2rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {RennesLogo} TeamName = {"Stade Rennais"} addStyle={{top: "1rem", left: "1.3rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.4rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e61a0b"} hoverImage={Ligue1Pattern} hoverTeamLogo={RennesLogo} hoverStyle={{top: "1rem", left: "1.3rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.4rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {MontpellierLogo} TeamName = {"Montpellier HSC"} addStyle={{top: "1rem", left: "1.2rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#c96014"} hoverImage={Ligue1Pattern} hoverTeamLogo={MontpellierLogo} hoverStyle={{top: "1rem", left: "1.2rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {AngersLogo} TeamName = {"Angers SCO"} addStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "1.3rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"black"} hoverImage={Ligue1Pattern} hoverTeamLogo={AngersLogo} hoverStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "1.3rem", top: "2rem", color: "white"}}/>
        </div>
    </div>
  )
}

export default ListTeamLigue1
