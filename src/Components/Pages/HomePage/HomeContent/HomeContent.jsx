import React, { useEffect } from 'react'
import './HomeContent.css';
import CardBg from './playerHomeCard.jpg';
import WebFont from 'webfontloader';
import LeagueBg from './leagueHomeCard.jpg';
import TransferBg from './transferHomeCard.avif';
import StatsBg from './statsHomeCard.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import { useThemeContext } from '../../../../Context/ThemeContext';

const HomeContent = ({disableDropdown}) => {
  // theme context
  const {theme, lightColor, darkColor} = useThemeContext();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, [])
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Titillium Web', 'Ubuntu']
      }
    })
  }, [])

  const changeFontBaseOnTheme = {
    color: theme === lightColor ? "black" : "white"
  }
  return (
    <main className = "w-full" onClick = {disableDropdown}>
      {/* first section */}
      <div className = "mr-0 ml-0 relative top-24">
        <div className = "w-full relative h-[30rem]" style = {{backgroundColor: theme === lightColor ? "#cfcac4" : "#252166"}} data-aos = "fade-right">
          <div className = "ml-80">
            <h2 className = {theme === lightColor ? "text-center relative top-11 font-titillium text-4xl font-bold mr-4": "text-center relative top-11 font-titillium text-4xl font-bold mr-4 text-white"}>Provide information about players all around the world.</h2>

            <p className = "text-left relative top-16 right-7 ml-52 text-lg font-titillium" style = {{width: "52rem", color: theme === lightColor ? "black" : "white"}}>FLMP will provide you all kinds of information about the players around the world. You can find player's age, height, weight, league,... in our web. There are over 20 leagues and over 1000 players available for you to discover. The information are up-to-date and legit.</p>

            <button className = "ml-48 relative top-28 bg-blue-600 pl-4 pr-16 py-2 text-2xl font-ubuntu rounded-2xl hover:shadow-blue-shadow" type = "button">
              <span className = "relative top-3">Get Started</span>
              <span><FaArrowRight className = "relative w-7 h-7" style = {{left: "8.5rem", bottom: "1.1rem"}}/></span>
            </button>
          </div>
          <img src = {CardBg} alt = "Player Cards Logo" className = "h-96 w-96 rounded-2xl shadow-2xl ml-24 relative" style = {{bottom: "10rem"}}/>
        </div>

        {/* second section */}
        <div className = "w-full" data-aos = "fade-left" style = {{height: "30rem", backgroundColor: theme === darkColor ? "#171447" : ""}}>
          <h2 className = "text-center font-titillium text-4xl font-bold relative top-11 right-44" style = {{color: theme === lightColor ? "black" : "white"}}>Provide information about 20+ leagues around the world.</h2>

          <p className = "text-left relative top-16 font-titillium text-lg" style = {{width: "55rem", left: "9.5rem", color: theme === lightColor ? "black" : "white"}}>FLMP will provide you all the information and news about many leagues around the world such as: Premier League, League 1, La Liga,.... You can get the scoreboard, history and other news of the league with quick response and legit access.</p>

          <button className = "ml-48 relative top-28 bg-yellow-400 pl-4 pr-16 py-2 text-2xl font-ubuntu rounded-2xl hover:shadow-yellow-shadow" type = "button" style = {{left: "38rem"}}>
              <span className = "relative top-3">Get Started</span>
              <span><FaArrowRight className = "relative w-7 h-7" style = {{left: "8.5rem", bottom: "1.1rem"}}/></span>
          </button>
          <img src = {LeagueBg} alt = "League Cards Logo" className = "h-96 w-96 rounded-2xl shadow-2xl mr-24 float-right relative bottom-20"/>
        </div>

        {/* third section */}
        <div className = "w-full" style = {{backgroundColor: theme === lightColor ? "#cfcac4" : "#252166", height: "30rem"}} data-aos = "fade-right">
          <img src = {TransferBg} alt = "Transfer Cards Logo" className = "h-96 w-96 rounded-2xl shadow-2xl ml-24 float-left relative mt-[3.5rem]"/>
          <div className = "ml-80">
            <p className = "pt-14 font-titillium text-4xl font-bold relative left-[3rem] w-[100rem]" style={{color: theme === lightColor ? "black" : "white"}}>Provide information about remarkable transfer news.</p>
            <p className = "text-lg font-titillium relative left-[3rem] pt-[1rem] w-[60rem]" style = {{color: theme === lightColor ? "black" : "white"}}>FLMP will provide you up-to-date transfer news from many legit journalist all around the world. You can update the state of your favorite players and you can also see their price in transfer market.</p>
            <button className = "bg-red-500 pl-4 pr-16 py-2 text-2xl font-ubuntu rounded-2xl hover:shadow-red-shadow relative left-[3rem] top-[4rem]" type = "button">
              <span className = "relative top-3">Get Started</span>
              <span><FaArrowRight className = "relative w-7 h-7" style = {{left: "8.5rem", bottom: "1.1rem"}}/></span>
            </button>
          </div>
        </div>

        {/* fourth section */}
        <div className = "w-full" style = {{height: "32.5rem", backgroundColor: theme === darkColor ? "#171447" : ""}} data-aos = "fade-left">
          <img src = {StatsBg} alt = "Statistic Cards Logo" className = "h-96 w-96 rounded-2xl shadow-2xl mr-24 float-right relative mt-[3.5rem]" />
          <div>
            <p className = "ml-[14rem] font-titillium text-4xl font-bold relative top-11" style = {{color: theme === lightColor ? "black" : "white"}}>Provide the statistics of players, leagues, awards,....</p>

            <p className = "text-left relative top-16 font-titillium text-lg ml-[14rem]" style = {{width: "49rem", color: theme === lightColor ? "black" : "white"}}>FLMP will provide you all the statistics of leagues, players, awards,... all around the world. You can get the data of goal each player has per season or awards he has for over 10 years,... You can get the up-to-date data for your business and article without paid.</p>

            <button className = "ml-48 relative top-[9rem] bg-green-500 pl-4 pr-16 py-2 text-2xl font-ubuntu rounded-2xl hover:shadow-green-shadow" type = "button" style = {{left: "38rem"}}>
              <span className = "relative top-3">Get Started</span>
              <span><FaArrowRight className = "relative w-7 h-7" style = {{left: "8.5rem", bottom: "1.1rem"}}/></span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeContent
