import React, { useEffect } from 'react'

//import team logo
import BundesligaLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/bundesligaLogo.png';
import BundesligaLogoWhite from '/FLMP/flmp_frontend/src/Image/Bundesliga/bundesligaWhiteLogo.webp';
import BayernMunichLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/bayernMunichNewLogo.png';
import BroussiaDortmundLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/dortmundLogo.png';
import LeipzigLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/leipzigNewLogo.png';
import FrankfurtLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/frankfurtNewLogo.png';
import FreiburgLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/freiburgLogo.png';
import LeverkusenLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/bayerLeverkusenNewLogo.png';
import UnionBerlinLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/unionBerlinLogo.png';
import StuttgartLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/stuttgartNewLogo.png';
import HeidenheimLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/heidenheimNewLogo.png';
import MainzLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/mainzLogo.png';
import WerderBremenLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/werderBremenNewLogo.png';
import WolfsburgLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/wolfsburgNewLogo.png';
import AugsburgLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/augsburgLogo.png';
import GladbachLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/monchengladbachNewLogo.png';
import StPauliLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/saintPauliNewLogo.png';
import HoffenheimLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/hoffenheimNewLogo.png';
import KielLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/kielNewLogo.png';
import BochumLogo from '/FLMP/flmp_frontend/src/Image/Bundesliga/bochumNewLogo.png';

import TeamCard from './TeamCard';
import BundesligaPattern from '/FLMP/flmp_frontend/src/Image/Bundesliga/bundesligaPattern.png';

import AOS from 'aos';

const ListTeamBundesliga = ({colorTheme, lightColor, darkColor}) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  return (
    <div>
        <div className = "relative" style = {{backgroundColor: colorTheme === lightColor ? "#c8ccc0" : darkColor, height: "60rem", top: "24rem"}} data-aos = "zoom-out-up">
            <img src = {colorTheme === lightColor ? BundesligaLogo : BundesligaLogoWhite} alt = "Premier League Logo" className = {colorTheme === lightColor ? "w-72 h-40 relative" : "w-60 h-32 relative"} style = {colorTheme === lightColor ? {left: "4rem", top: "2rem"} : {left: "6rem", top: "2rem"}}/>
            <div className = "relative top-16 flex" style = {{flexFlow: "row wrap"}}>
                <TeamCard TeamLogo = {BayernMunichLogo} TeamName = {"Bayern Munich"} addStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#b33d39"} hoverImage={BundesligaPattern} hoverTeamLogo={BayernMunichLogo} hoverStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "1.8rem", color: "white"}}/>

                <TeamCard TeamLogo = {BroussiaDortmundLogo} TeamName = {"Broussia Dortmund"} addStyle={{top: "0.6rem", left: "1rem", height: "4.5rem", width: "3.7rem"}} addStyleText = {{left: "2rem", top: "2.1rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#d1be11"} hoverImage={BundesligaPattern} hoverTeamLogo={BroussiaDortmundLogo} hoverStyle={{top: "0.6rem", left: "1rem", height: "4.5rem", width: "3.7rem"}} hoverStyleText={{left: "2rem", top: "2.1rem"}}/>

                <TeamCard TeamLogo = {LeipzigLogo} TeamName = {"RB Leipzig"} addStyle={{top: "1rem", left: "0.5rem", height: "4.5rem", width: "5.5rem"}} addStyleText = {{left: "1.8rem", top: "2.1rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#faf8e8"} hoverImage={BundesligaPattern} hoverTeamLogo={LeipzigLogo} hoverStyle={{top: "1rem", left: "0.5rem", height: "4.5rem", width: "5.5rem"}} hoverStyleText={{left: "1.8rem", top: "2.1rem"}}/>

                <TeamCard TeamLogo = {FrankfurtLogo} TeamName = {"Eintracht Frankfurt"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#b33d39"} hoverImage={BundesligaPattern} hoverTeamLogo={FrankfurtLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "1.9rem", color: "white"}}/>

                <TeamCard TeamLogo = {FreiburgLogo} TeamName = {"SC Freiburg"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#050005"} hoverImage={BundesligaPattern} hoverTeamLogo={FreiburgLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "1.9rem", color: "white"}}/>

                <TeamCard TeamLogo = {LeverkusenLogo} TeamName = {"Bayer 04 Leverkusen"} addStyle={{top: "0.6rem", right: "0.3rem", height: "5rem", width: "6rem"}} addStyleText = {{right: "0.5rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#b33d39"} hoverImage={BundesligaPattern} hoverTeamLogo={LeverkusenLogo} hoverStyle={{top: "0.6rem", right: "0.3rem", height: "5rem", width: "6rem"}} hoverStyleText={{right: "0.5rem", top: "1.9rem", color: "white"}}/>

                <TeamCard TeamLogo = {UnionBerlinLogo} TeamName = {"Union Berlin"} addStyle={{top: "0.8rem", left: "0rem", height: "4.5rem", width: "6rem"}} addStyleText = {{left: "1.2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#d1be11"} hoverImage={BundesligaPattern} hoverTeamLogo={UnionBerlinLogo} hoverStyle={{top: "0.8rem", left: "0rem", height: "4.5rem", width: "6rem"}} hoverStyleText={{left: "1.2rem", top: "2rem"}}/>

                <TeamCard TeamLogo = {StuttgartLogo} TeamName = {"Stuttgart"} addStyle={{top: "1.2rem", left: "1.4rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#faf8e8"} hoverImage={BundesligaPattern} hoverTeamLogo = {StuttgartLogo} hoverStyle={{top: "1.2rem", left: "1.4rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.9rem"}}/>

                <TeamCard TeamLogo = {HeidenheimLogo} TeamName = {"FC Heidenheim"} addStyle={{top: "1rem", left: "1.2rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#1515b3"} hoverImage={BundesligaPattern} hoverTeamLogo={HeidenheimLogo} hoverStyle={{top: "1rem", left: "1.2rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

                <TeamCard TeamLogo = {MainzLogo} TeamName = {"Mainz 05"} addStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#faf8e8"} hoverImage={BundesligaPattern} hoverTeamLogo={MainzLogo} hoverStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem"}}/>

                <TeamCard TeamLogo = {WerderBremenLogo} TeamName = {"Werder Bremen"} addStyle={{top: "0.9rem", left: "1.5rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "3.1rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#10c269"} hoverImage={BundesligaPattern} hoverTeamLogo={WerderBremenLogo} hoverStyle={{top: "0.9rem", left: "1.5rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "3.1rem", top: "2rem"}}/>

                <TeamCard TeamLogo = {WolfsburgLogo} TeamName = {"VfL Wolfsburg"} addStyle={{top: "0.3rem", left: "0.5rem", height: "5.5rem", width: "5.5rem"}} addStyleText = {{left: "1rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#09db72"} hoverImage={BundesligaPattern} hoverTeamLogo={WolfsburgLogo} hoverStyle={{top: "0.3rem", left: "0.5rem", height: "5.5rem", width: "5.5rem"}} hoverStyleText={{left: "1rem", top: "2rem"}}/>

                <TeamCard TeamLogo = {AugsburgLogo} TeamName = {"Augsburg"} addStyle={{top: "0.8rem", right: "1.2rem", height: "4.5rem", width: "9rem"}} addStyleText = {{right: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#faf8e8"} hoverImage={BundesligaPattern} hoverTeamLogo={AugsburgLogo} hoverStyle={{top: "0.8rem", right: "1.2rem", height: "4.5rem", width: "9rem"}} hoverStyleText={{right: "2.5rem", top: "2rem"}}/>

                <TeamCard TeamLogo = {GladbachLogo} TeamName = {"Broussia Monchengladbach"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "0.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"black"} hoverImage={BundesligaPattern} hoverTeamLogo={GladbachLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "0.8rem", color: "white"}}/>

                <TeamCard TeamLogo = {StPauliLogo} TeamName = {"St.Pauli"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#3b210b"} hoverImage={BundesligaPattern} hoverTeamLogo={StPauliLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2.5rem", top: "2rem", color: "white"}}/>

                <TeamCard TeamLogo = {HoffenheimLogo} TeamName = {"TSG 1899 Hoffenheim"} addStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.7rem", top: "0.8rem", width: "10rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0f1594"} hoverImage={BundesligaPattern} hoverTeamLogo={HoffenheimLogo} hoverStyle={{top: "0.8rem", left: "1.5rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.7rem", top: "0.8rem", width: "10rem", color: "white"}}/>

                <TeamCard TeamLogo = {KielLogo} TeamName = {"Holstein Kiel"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0f1594"} hoverImage={BundesligaPattern} hoverTeamLogo={KielLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>

                <TeamCard TeamLogo = {BochumLogo} TeamName = {"VfL Bochum"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#104ac7"} hoverImage={BundesligaPattern} hoverTeamLogo={BochumLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}}/>
            </div>
        </div>
    </div>
  )
}

export default ListTeamBundesliga
