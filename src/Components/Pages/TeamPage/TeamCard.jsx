import React, { useState } from 'react'
import './TeamCard.css';


const TeamCard = ({TeamLogo, TeamName, addStyle, addStyleText, colorTheme, lightColor, darkColor, hoverColor, hoverImage, hoverTeamLogo, hoverStyle, hoverStyleText, teamId, setupTeamId, setupTeamLogo, handleClick}) => {
  const [colorHover, setColorHover] = useState("")
  // const handleClick = () => {
  //   setupTeamId(teamId);
  //   setupTeamLogo(TeamLogo);
  // }
  return (
    <div id = "card" className = "h-24 relative rounded-2xl flex hover:cursor-pointer" style = {{backgroundColor: !colorHover ? (colorTheme === lightColor ? "#9fa19d" : "#110645") : hoverColor, left: "1rem", width: "21rem", marginRight: "2rem", marginTop: "2.5rem", backgroundImage: colorHover && `url("${hoverImage}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}} onMouseEnter={() => setColorHover("blue")} onMouseLeave={() => setColorHover("")} onClick = {handleClick}>
      <img src = {colorHover ? hoverTeamLogo : TeamLogo} alt = "Team Logo" className = "relative" style = {!colorHover ? addStyle : hoverStyle}/>
      <p className = {!colorHover ? (colorTheme === lightColor ? "text-2xl font-ubuntu font-bold relative" : "text-2xl font-ubuntu font-bold relative text-white") : "text-2xl font-ubuntu font-bold relative"} style = {!colorHover ? addStyleText : hoverStyleText}>{TeamName}</p>
    </div>
  )
}

export default TeamCard
