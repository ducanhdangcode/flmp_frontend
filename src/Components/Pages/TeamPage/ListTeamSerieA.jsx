import React, { useEffect } from 'react'

import NapoliLogo from '/FLMP/flmp_frontend/src/Image/SerieA/napoliLogo.png';
import InterMilanLogo from '/FLMP/flmp_frontend/src/Image/SerieA/interMilanNewLogo.png';
import JuventusLogo from '/FLMP/flmp_frontend/src/Image/SerieA/juventusLogo.png';
import LazioLogo from '/FLMP/flmp_frontend/src/Image/SerieA/lazioNewLogo.png';
import UdineseLogo from '/FLMP/flmp_frontend/src/Image/SerieA/udineseLogo.png';
import ACMilanLogo from '/FLMP/flmp_frontend/src/Image/SerieA/acMilanNewLogo.png';
import TorinoLogo from '/FLMP/flmp_frontend/src/Image/SerieA/torinoNewLogo.png';
import AtalantaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/atalantaLogo.png';
import RomaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/asRomaLogo.png';
import EmpoliLogo from '/FLMP/flmp_frontend/src/Image/SerieA/empoliNewLogo.png';
import FiorentinaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/fiorentinaNewLogo.png';
import VeronaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/veronaLogo.png';
import BolognaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/bolognaLogo.png';
import ComoLogo from '/FLMP/flmp_frontend/src/Image/SerieA/comoNewLogo.png';
import ParmaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/parmaNewLogo.png';
import CagliariLogo from '/FLMP/flmp_frontend/src/Image/SerieA/cagliariNewLogo.png';
import LecceLogo from '/FLMP/flmp_frontend/src/Image/SerieA/lecceNewLogo.png';
import GenoaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/genoaNewLogo.png';
import MonzaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/monzaNewLogo.png';
import VeneziaLogo from '/FLMP/flmp_frontend/src/Image/SerieA/veneziaLogo.png';

import SerieALogo from '/FLMP/flmp_frontend/src/Image/SerieA/serieALogo.png';
import TeamCard from './TeamCard';

import SerieAPattern from '/FLMP/flmp_frontend/src/Image/SerieA/serieANewPattern.png';

import AOS from 'aos';
import { useThemeContext } from '../../../Context/ThemeContext';

const ListTeamSerieA = ({}) => {
  const {theme, lightColor, darkColor} = useThemeContext();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  return (
    <div className = "relative" style = {{backgroundColor: theme === lightColor ? "#c8ccc0" : "", height: "65rem"}} data-aos = "zoom-out-up">
        <img src = {SerieALogo} alt = "Serie A Logo" className = "w-36 h-48 relative" style = {{left: "8rem", top: "2rem"}}/>
        <div className = "relative top-16 flex" style = {{flexFlow: "row wrap"}}>
            <TeamCard TeamLogo = {NapoliLogo} TeamName = {"SSC Napoli"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0eaae3"} hoverImage={SerieAPattern} hoverTeamLogo={NapoliLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {InterMilanLogo} TeamName = {"Internazionale Milano"} addStyle={{top: "1rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} addStyleText = {{left: "0.8rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#201cb0"} hoverImage={SerieAPattern} hoverTeamLogo={InterMilanLogo} hoverStyle={{top: "1rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} hoverStyleText={{left: "0.8rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {JuventusLogo} TeamName = {"Juventus"} addStyle={{top: "0.2rem", left: "1.5rem", height: "5.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={SerieAPattern} hoverTeamLogo={JuventusLogo} hoverStyle={{top: "0.2rem", left: "1.5rem", height: "5.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {LazioLogo} TeamName = {"S.S. Lazio"} addStyle={{top: "0.3rem", left: "0.8rem", height: "5.5rem", width: "6rem"}} addStyleText = {{left: "1.2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0eaae3"} hoverImage={SerieAPattern} hoverTeamLogo={LazioLogo} hoverStyle={{top: "0.3rem", left: "0.8rem", height: "5.5rem", width: "6rem"}} hoverStyleText={{left: "1.2rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {UdineseLogo} TeamName = {"Udinese Calcio"} addStyle={{top: "0.8rem", left: "0rem", height: "4.5rem", width: "6.5rem"}} addStyleText = {{left: "0rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={SerieAPattern} hoverTeamLogo={UdineseLogo} hoverStyle={{top: "0.8rem", left: "0rem", height: "4.5rem", width: "6.5rem"}} hoverStyleText={{left: "0rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {ACMilanLogo} TeamName = {"AC Milan"} addStyle={{top: "0.3rem", right: "0.8rem", height: "6rem", width: "8rem"}} addStyleText = {{right: "1.4rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#de2009"} hoverImage={SerieAPattern} hoverTeamLogo={ACMilanLogo} hoverStyle={{top: "0.3rem", right: "0.8rem", height: "6rem", width: "8rem"}} hoverStyleText={{right: "1.4rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {TorinoLogo} TeamName = {"Torino"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#701409"} hoverImage={SerieAPattern} hoverTeamLogo={TorinoLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {AtalantaLogo} TeamName = {"Atalanta BC"} addStyle={{top: "0.8rem", left: "2.3rem", height: "4.5rem", width: "2.5rem"}} addStyleText = {{left: "4.5rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0f30d4"} hoverImage={SerieAPattern} hoverTeamLogo={AtalantaLogo} hoverStyle={{top: "0.8rem", left: "2.3rem", height: "4.5rem", width: "2.5rem"}} hoverStyleText={{left: "4.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {RomaLogo} TeamName = {"AS Roma"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#701409"} hoverImage={SerieAPattern} hoverTeamLogo={RomaLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {EmpoliLogo} TeamName = {"Empoli"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#286feb"} hoverImage={SerieAPattern} hoverTeamLogo={EmpoliLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {FiorentinaLogo} TeamName = {"ACF Fiorentina"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#8e20bd"} hoverImage={SerieAPattern} hoverTeamLogo={FiorentinaLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {VeronaLogo} TeamName = {"Hellas Verona"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={SerieAPattern} hoverTeamLogo={VeronaLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {BolognaLogo} TeamName = {"Bologna 1909"} addStyle={{top: "0.8rem", left: "1.7rem", height: "4.5rem", width: "2.7rem"}} addStyleText = {{left: "3.5rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#701409"} hoverImage={SerieAPattern} hoverTeamLogo={BolognaLogo} hoverStyle={{top: "0.8rem", left: "1.7rem", height: "4.5rem", width: "2.7rem"}} hoverStyleText={{left: "3.5rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {ComoLogo} TeamName = {"Calcio Como"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#1556b0"} hoverImage={SerieAPattern} hoverTeamLogo={ComoLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {ParmaLogo} TeamName = {"Parma Calcio 1913"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#afdb0f"} hoverImage={SerieAPattern} hoverTeamLogo={ParmaLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {CagliariLogo} TeamName = {"Cagliari Calcio"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0b0e36"} hoverImage={SerieAPattern} hoverTeamLogo={CagliariLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {LecceLogo} TeamName = {"US Lecce"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#c0c90e"} hoverImage={SerieAPattern} hoverTeamLogo={LecceLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {GenoaLogo} TeamName = {"Genoa"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#5c180c"} hoverImage={SerieAPattern} hoverTeamLogo={GenoaLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem", color: "white"}}/>

            <TeamCard TeamLogo = {MonzaLogo} TeamName = {"AC Monza"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#de2009"} hoverImage={SerieAPattern} hoverTeamLogo={MonzaLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "2rem"}}/>

            <TeamCard TeamLogo = {VeneziaLogo} TeamName = {"Venezia"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {theme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"black"} hoverImage={SerieAPattern} hoverTeamLogo={VeneziaLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>
        </div>
    </div>
  )
}

export default ListTeamSerieA
