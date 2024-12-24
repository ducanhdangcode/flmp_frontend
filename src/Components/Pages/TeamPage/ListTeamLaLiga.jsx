import React, { useEffect } from 'react'

import LaligaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/laligaLogo.png';
import RealMadridLogo from '/FLMP/flmp_frontend/src/Image/Laliga/realMadridLogo.png';
import BarcelonaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/barcelonaLogo.png';
import AleticoMadridLogo from '/FLMP/flmp_frontend/src/Image/Laliga/aleticoMadridLogo.png';
import VillarrealLogo from '/FLMP/flmp_frontend/src/Image/Laliga/villarrealLogo.png';
import OsasunaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/osasunaLogo.png';
import AthleticBilbaoLogo from '/FLMP/flmp_frontend/src/Image/Laliga/athleticBilbaoLogo.png';
import RealMallorcaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/realMallorcaLogo.png';
import RayoVallecanoLogo from '/FLMP/flmp_frontend/src/Image/Laliga/rayoVallecanoLogo.png';
import CeltaVigoLogo from '/FLMP/flmp_frontend/src/Image/Laliga/celtaVigoLogo.png';
import RealBetisLogo from '/FLMP/flmp_frontend/src/Image/Laliga/realBetisLogo.png';
import GironaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/gironaNewLogo.png';
import SevillaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/sevillaLogo.png';
import DeportivoAlavesLogo from '/FLMP/flmp_frontend/src/Image/Laliga/deportivoAlavesNewLogo.png';
import EspanyolLogo from '/FLMP/flmp_frontend/src/Image/Laliga/espanyolLogo.png';
import RealSociedadLogo from '/FLMP/flmp_frontend/src/Image/Laliga/realSociedadLogo.png';
import GetafeLogo from '/FLMP/flmp_frontend/src/Image/Laliga/getafeLogo.png';
import DeportivoLeganesLogo from '/FLMP/flmp_frontend/src/Image/Laliga/leganesNewLogo.png';
import ValenciaLogo from '/FLMP/flmp_frontend/src/Image/Laliga/valenciaLogo.png';
import RealValladolidLogo from '/FLMP/flmp_frontend/src/Image/Laliga/realValladolidLogo.png';
import LasPalmasLogo from '/FLMP/flmp_frontend/src/Image/Laliga/lasPalmasLogo.png';

// kit
import RealMadridKit1 from '../../../Image/Kit/LaLiga/RealMadrid/RealMadridKit1.png';
import RealMadridKit2 from '../../../Image/Kit/LaLiga/RealMadrid/RealMadridKit2.png';
import RealMadridKit3 from '../../../Image/Kit/LaLiga/RealMadrid/RealMadridKit3.png';

// chairman
import RealMadridChairman from '../../../Image/Chairman/LaLiga/RealMadrid/RealMadridChairman.jpg';

import TeamCard from './TeamCard';
import LaligaPattern from '/FLMP/flmp_frontend/src/Image/Laliga/laligaPattern.png';

import AOS from 'aos';
import { Link } from 'react-router-dom';

const ListTeamLaLiga = ({colorTheme, lightColor, darkColor, setupTeamId, setupTeamLogo, setupDetailLogoHeight, setupDetailLogoWidth, setupDetailLogoTop, setupDetailLogoLeft, setupDetailNameBottom, setupTeamVideoTitles, setupTeamKits, setupTeamChairman}) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])

  const RealMadridId = 21;

  const RealMadridKits = [RealMadridKit1, RealMadridKit2, RealMadridKit3];
  
  const RealMadridVideoTitles = {
    "first": "HIGHLIGHTS | Girona 0-3 Real Madrid | LaLiga 2024/25", 
    "second": "HIGHLIGHTS | Real Madrid 2-0 Getafe | LaLiga 2024/25", 
    "third": "THIS is how the BERNABÉU PITCH is preserved | Real Madrid"
  }


  const handleClick = (id, logo, height, width, top, left, nameBottom, titles, kits, chairman) => {
    setupTeamLogo(logo);
    setupTeamId(id);
    setupDetailLogoHeight(height);
    setupDetailLogoWidth(width);
    setupDetailLogoTop(top);
    setupDetailLogoLeft(left);
    setupDetailNameBottom(nameBottom);
    setupTeamVideoTitles(titles);
    setupTeamKits(kits);
    setupTeamChairman(chairman);
  }
  return (
    <div className = "relative" style = {{backgroundColor: colorTheme === lightColor ? "" : "#171447", height: "60rem", top: "18rem"}} data-aos = "zoom-out-up">
      <img src = {LaligaLogo} alt = "La Liga Logo" className = "w-72 h-32 relative" style = {{left: "4rem", top: "2rem"}}/>
      <div className = "relative top-16 flex" style = {{flexFlow: "row wrap"}}>
        <Link to = "/team/real-madrid">
          <TeamCard TeamLogo = {RealMadridLogo} TeamName = {"Real Madrid"} addStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#e9f2f5"} hoverImage={LaligaPattern} hoverTeamLogo={RealMadridLogo} hoverStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "2rem"}} handleClick={() => handleClick(RealMadridId, RealMadridLogo, 14, 22, 3, 2, 2.5, RealMadridVideoTitles, RealMadridKits, RealMadridChairman)}/>
        </Link>

        <TeamCard TeamLogo = {BarcelonaLogo} TeamName = {"Barcelona"} addStyle={{top: "0.9rem", right: "0.5rem", height: "4.5rem", width: "6.8rem"}} addStyleText = {{right: "0rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#570a2d"} hoverImage={LaligaPattern} hoverTeamLogo={BarcelonaLogo} hoverStyle={{top: "0.9rem", right: "0.5rem", height: "4.5rem", width: "6.8rem"}} hoverStyleText={{right: "0rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {AleticoMadridLogo} TeamName = {"Atlético Madrid"} addStyle={{top: "0.8rem", right: "1.5rem", height: "4.5rem", width: "9rem"}} addStyleText = {{right: "2.2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e01013"} hoverImage={LaligaPattern} hoverTeamLogo={AleticoMadridLogo} hoverStyle={{top: "0.8rem", right: "1.5rem", height: "4.5rem", width: "9rem"}} hoverStyleText={{right: "2.2rem", top: "1.8rem", color: "white"}}/>

        <TeamCard TeamLogo = {VillarrealLogo} TeamName = {"Villarreal"} addStyle={{top: "0.6rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.8rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#d7e605"} hoverImage={LaligaPattern} hoverTeamLogo={VillarrealLogo} hoverStyle={{top: "0.6rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.8rem", top: "1.9rem"}}/>

        <TeamCard TeamLogo = {OsasunaLogo} TeamName = {"Osasuna"} addStyle={{bottom: "0.1rem", right: "1.8rem", height: "6rem", width: "9.5rem"}} addStyleText = {{right: "3rem", top: "2.1rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e01013"} hoverImage={LaligaPattern} hoverTeamLogo={OsasunaLogo} hoverStyle={{bottom: "0.1rem", right: "1.8rem", height: "6rem", width: "9.5rem"}} hoverStyleText={{right: "3rem", top: "2.1rem", color: "white"}}/>

        <TeamCard TeamLogo = {AthleticBilbaoLogo} TeamName = {"Athletic Bilbao"} addStyle={{top: "0.9rem", left: "0.2rem", height: "4.5rem", width: "5.5rem"}} addStyleText = {{left: "1.3rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e01013"} hoverImage={LaligaPattern} hoverTeamLogo={AthleticBilbaoLogo} hoverStyle={{top: "0.9rem", left: "0.2rem", height: "4.5rem", width: "5.5rem"}} hoverStyleText={{left: "1.3rem", top: "1.8rem", color: "white"}}/>

        <TeamCard TeamLogo = {RealMallorcaLogo} TeamName = {"Real Mallorca"} addStyle={{top: "0.5rem", right: "1.3rem", height: "5rem", width: "9rem"}} addStyleText = {{right: "2.1rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#6e0a16"} hoverImage={LaligaPattern} hoverTeamLogo={RealMallorcaLogo} hoverStyle={{top: "0.5rem", right: "1.3rem", height: "5rem", width: "9rem"}} hoverStyleText={{right: "2.1rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {RayoVallecanoLogo} TeamName = {"Rayo Vallecano"} addStyle={{top: "0.7rem", left: "0.5rem", height: "5rem", width: "5.5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"white"} hoverImage={LaligaPattern} hoverTeamLogo={RayoVallecanoLogo} hoverStyle={{top: "0.7rem", left: "0.5rem", height: "5rem", width: "5.5rem"}} hoverStyleText={{left: "1.5rem", top: "1.8rem"}}/>

        <TeamCard TeamLogo = {CeltaVigoLogo} TeamName = {"Celta Vigo"} addStyle={{top: "0.1rem", right: "0.3rem", height: "6rem", width: "6.5rem"}} addStyleText = {{left: "0rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#12a4cc"} hoverImage={LaligaPattern} hoverTeamLogo={CeltaVigoLogo} hoverStyle={{top: "0.1rem", right: "0.3rem", height: "6rem", width: "6.5rem"}} hoverStyleText={{left: "0rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {RealBetisLogo} TeamName = {"Real Betis"} addStyle={{top: "0.7rem", right: "0.5rem", height: "4.5rem", width: "7rem"}} addStyleText = {{right: "0.3rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0e5c25"} hoverImage={LaligaPattern} hoverTeamLogo={RealBetisLogo} hoverStyle={{top: "0.7rem", right: "0.5rem", height: "4.5rem", width: "7rem"}} hoverStyleText={{right: "0.3rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {GironaLogo} TeamName = {"Girona FC"} addStyle={{bottom: "0.2rem", right: "0.5rem", height: "6.5rem", width: "7.5rem"}} addStyleText = {{right: "0.6rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e01013"} hoverImage={LaligaPattern} hoverTeamLogo={GironaLogo} hoverStyle={{bottom: "0.2rem", right: "0.5rem", height: "6.5rem", width: "7.5rem"}} hoverStyleText={{right: "0.6rem", top: "2rem", color: "white"}}/>

        <TeamCard TeamLogo = {SevillaLogo} TeamName = {"Sevilla FC"} addStyle={{top: "1.2rem", left: "1.2rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "3rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"white"} hoverImage={LaligaPattern} hoverTeamLogo={SevillaLogo} hoverStyle={{top: "1.2rem", left: "1.2rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "3rem", top: "1.9rem"}}/>

        <TeamCard TeamLogo = {DeportivoAlavesLogo} TeamName = {"Deportivo Alaves"} addStyle={{bottom: "0.3rem", right: "0.7rem", height: "6.5rem", width: "7.5rem"}} addStyleText = {{right: "1rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0b1987"} hoverImage={LaligaPattern} hoverTeamLogo={DeportivoAlavesLogo} hoverStyle={{bottom: "0.3rem", right: "0.7rem", height: "6.5rem", width: "7.5rem"}} hoverStyleText={{right: "1rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {EspanyolLogo} TeamName = {"Espanyol"} addStyle={{top: "0.7rem", left: "1rem", height: "4.5rem", width: "3.5rem"}} addStyleText = {{left: "3.2rem", top: "2.2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#12a4cc"} hoverImage={LaligaPattern} hoverTeamLogo={EspanyolLogo} hoverStyle={{top: "0.7rem", left: "1rem", height: "4.5rem", width: "3.5rem"}} hoverStyleText={{left: "3.2rem", top: "2.2rem", color: "white"}}/>

        <TeamCard TeamLogo = {RealSociedadLogo} TeamName = {"Real Sociedad"} addStyle={{top: "0.8rem", right: "0.5rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0b1987"} hoverImage={LaligaPattern} hoverTeamLogo={RealSociedadLogo} hoverStyle={{top: "0.8rem", right: "0.5rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {GetafeLogo} TeamName = {"Getafe"} addStyle={{top: "0.8rem", left: "1.2rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2.4rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0b1987"} hoverImage={LaligaPattern} hoverTeamLogo={GetafeLogo} hoverStyle={{top: "0.8rem", left: "1.2rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2.4rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {DeportivoLeganesLogo} TeamName = {"Deportivo Leganes"} addStyle={{top: "1rem", left: "0.1rem", height: "4.5rem", width: "6rem"}} addStyleText = {{left: "0.5rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#12a4cc"} hoverImage={LaligaPattern} hoverTeamLogo={DeportivoLeganesLogo} hoverStyle={{top: "1rem", left: "0.1rem", height: "4.5rem", width: "6rem"}} hoverStyleText={{left: "0.5rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {ValenciaLogo} TeamName = {"Valencia"} addStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} addStyleText = {{left: "2.1rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"white"} hoverImage={LaligaPattern} hoverTeamLogo={ValenciaLogo} hoverStyle={{top: "0.8rem", left: "0.8rem", height: "4.5rem", width: "4.5rem"}} hoverStyleText={{left: "2.1rem", top: "1.9rem"}}/>

        <TeamCard TeamLogo = {RealValladolidLogo} TeamName = {"Real Valladolid"} addStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "5rem"}} addStyleText = {{left: "1.9rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#440578"} hoverImage={LaligaPattern} hoverTeamLogo={RealValladolidLogo} hoverStyle={{top: "0.8rem", left: "1rem", height: "4.5rem", width: "5rem"}} hoverStyleText={{left: "1.9rem", top: "1.9rem", color: "white"}}/>

        <TeamCard TeamLogo = {LasPalmasLogo} TeamName = {"Las Palmas"} addStyle={{top: "0.8rem", left: "1.6rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "3rem", top: "1.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#d7e605"} hoverImage={LaligaPattern} hoverTeamLogo={LasPalmasLogo} hoverStyle={{top: "0.8rem", left: "1.6rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "3rem", top: "1.9rem"}}/>
      </div>
    </div>
  )
}

export default ListTeamLaLiga
