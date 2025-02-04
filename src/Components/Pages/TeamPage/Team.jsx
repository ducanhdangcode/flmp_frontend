import React, { useEffect, useRef, useState } from 'react'
import 'animate.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

// import slides
import PremierLeagueBackground from '/FLMP/flmp_frontend/src/Image/premierLeagueBackground.jpg';
import LaligaBackground from '/FLMP/flmp_frontend/src/Image/laligaBackground.jpg';
import BundesligaBackground from '/FLMP/flmp_frontend/src/Image/bundesligaBackground.jpg';
import SerieABackground from '/FLMP/flmp_frontend/src/Image/serieABackground.jpg';
import Ligue1Background from '/FLMP/flmp_frontend/src/Image/ligue1Background.jpg';
import LigaPortugalBackground from '/FLMP/flmp_frontend/src/Image/ligaPortugalBackground.jpg';

import WebFont from "webfontloader";
import ListTeamEPL from './ListTeamEPL';
import ListTeamLaLiga from './ListTeamLaLiga';
import ListTeamBundesliga from './ListTeamBundesliga';
import ListTeamLigue1 from './ListTeamLigue1';
import ListTeamSerieA from './ListTeamSerieA';

import AOS from 'aos';

import { FaArrowRight } from 'react-icons/fa';
import { useThemeContext } from '../../../Context/ThemeContext';

const Team = ({setupTeamId, setupTeamLogo, setupDetailLogoHeight, setupDetailLogoWidth, setupDetailLogoTop, setupDetailLogoLeft, setupDetailNameBottom}) => {
  const slideShowImages = [PremierLeagueBackground, LaligaBackground, BundesligaBackground, SerieABackground, Ligue1Background, LigaPortugalBackground];
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const slideShowLength = slideShowImages.length -1;
  const [hoverSeeMoreTeam, setHoverSeeMoreTeam] = useState(false);

  // context for theme
  const {theme, lightColor, darkColor} = useThemeContext();
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Ubuntu']
      }
    })
  })

  useEffect(() => {
    const sliderRun = setInterval(() => {
      toNextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderRun);
    }
  }, [slideShowIndex]);

  const toNextSlide = () => {
    setSlideShowIndex(slideShowIndex === slideShowLength ? 0 : slideShowIndex + 1);
  }

  const toPreviousSlide = () => {
    setSlideShowIndex(slideShowIndex === 0 ? slideShowLength : slideShowIndex - 1);
  }
  return (
    <div className = "w-full relative" style = {{backgroundColor: theme === lightColor ? "#eaebe8" : darkColor}}>
      {/* slide images of leagues */}
      <div className = "mt-24">
        {slideShowImages.map((path, index) => {
            return slideShowIndex === index && (
              <img src = {path} alt = "" className = "w-full animate__animated animate__fadeInRight hover:cursor-pointer" style = {{height: "40rem"}}/>
            )
        })}
        <FaArrowAltCircleLeft className = "absolute w-16 h-16 z-10 opacity-60 hover:cursor-pointer hover:opacity-90" style = {{top: "20rem", color: "gray"}} onClick = {toPreviousSlide}/>
        <FaArrowAltCircleRight className = "absolute w-16 h-16 z-10 opacity-60 hover:cursor-pointer hover:opacity-90" style = {{top: "20rem", right: "1rem", color: "gray"}} onClick = {toNextSlide}/>
      </div>

      {/* list team EPL */}
      <div className = "mt-24">
        <ListTeamEPL theme = {theme} lightColor = {lightColor} darkColor = {darkColor} setupTeamId = {setupTeamId} setupTeamLogo = {setupTeamLogo} setupDetailLogoHeight = {setupDetailLogoHeight} setupDetailLogoWidth = {setupDetailLogoWidth} setupDetailLogoTop = {setupDetailLogoTop} setupDetailLogoLeft = {setupDetailLogoLeft} setupDetailNameBottom = {setupDetailNameBottom}/>
      </div>
      
      {/* list team la liga */}
      <div className = "mt-24">
        <ListTeamLaLiga theme = {theme} lightColor = {lightColor} darkColor = {darkColor} setupTeamId = {setupTeamId} setupTeamLogo = {setupTeamLogo} setupDetailLogoHeight = {setupDetailLogoHeight} setupDetailLogoWidth = {setupDetailLogoWidth} setupDetailLogoTop = {setupDetailLogoTop} setupDetailLogoLeft = {setupDetailLogoLeft} setupDetailNameBottom = {setupDetailNameBottom}/>
      </div>
      
      {/* list team bundesliga */}
      <div className = "mt-24">
        <ListTeamBundesliga theme = {theme} lightColor = {lightColor} darkColor = {darkColor}/>
      </div>
      
      {/* list team ligue 1 */}
      <div className = "mt-24">
        <ListTeamLigue1 theme = {theme} lightColor = {lightColor} darkColor = {darkColor}/>
      </div>
      
      {/* list team serie A */}
      <div className = "mt-24">
        <ListTeamSerieA theme = {theme} lightColor = {lightColor} darkColor = {darkColor}/>
      </div>

      <div className = "relative float-right" style = {{right: "8rem"}} data-aos = "fade-left">
        <p className = {"hover:cursor-pointer text-3xl font-ubuntu underline hover:-translate-x-8 transition ease-in-out"} onMouseEnter = {() => setHoverSeeMoreTeam(true)} onMouseLeave = {() => setHoverSeeMoreTeam(false)}>See more teams</p>
        {hoverSeeMoreTeam === true && <FaArrowRight className = "w-8 h-8 relative" style = {theme === lightColor ? {bottom: "2.2rem", left: "12rem"} : {bottom: "2.2rem", left: "12rem", color: "white"}}/>}
      </div>
    </div>
  )
}

export default Team;
