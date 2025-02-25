import React, {} from 'react'
import PlayerCard from './PlayerCard';

const DetailSquadGoalkeeper = ({teamId, team, playerList}) => {
  return (
    <div className = "relative w-full">
        <div className = "bg-[#112f54] h-[3rem]">
            <p className = "font-ubuntu text-3xl font-bold relative left-[2rem] text-white">Goalkeepers</p>
        </div>
        <div className = "flex relative left-[12.5rem] bottom-[2rem]" style = {{flexFlow: "row wrap"}}>
            {playerList.map((player) => {
                if (player?.teamId == teamId && player?.position == "Goalkeeper") {
                    return <PlayerCard teamId = {teamId} team = {team} player = {player} statisticTitle1 = {"Appearances"} statisticTitle2 = {"Clean Sheets"} statisticTitle3 = {"Goals Conceded"} statisticTitle4 = {"Saves"} statistic1 = {player?.appearances} statistic2 = {player?.cleanSheets} statistic3 = {player?.goalConceded} statistic4 = {player?.saves} name = {player?.name} shirtNumber = {player?.shirtNumber} position = {"Goalkeeper"} nationality = {player?.nationality} nationalityImageLink = {player?.nationalityImageLink}/>
                }
            })}
        </div>
    </div>
  )
}

export default DetailSquadGoalkeeper
