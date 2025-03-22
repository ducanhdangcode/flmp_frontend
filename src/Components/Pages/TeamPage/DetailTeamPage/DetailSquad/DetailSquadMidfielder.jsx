import React, { } from 'react'
import PlayerCard from './PlayerCard'

const DetailSquadMidfielder = ({teamId, team, playerList}) => {
  return (
    <div className = "relative w-full">
        <div className = "bg-hardGreen">
            <p className = "font-teko text-3xl font-bold relative left-[2rem] text-white py-[0.4rem] top-[0.1rem]">Midfielders</p>
        </div>
        <div className = "flex relative left-[12.5rem] bottom-[2.5rem]" style = {{flexFlow: "row wrap"}}>
            {playerList.map((player) => {
                if (player?.teamId == teamId && player?.position === "Midfielder") {
                    return <div className = "relative">
                        <PlayerCard teamId = {teamId} team = {team} player = {player} statisticTitle1 = {"Appearances"} statisticTitle2 = {"Goals"} statisticTitle3 = {"Assists"} statisticTitle4 = {"Minutes Played"} statistic1 = {player?.appearances} statistic2 = {player?.goalQuantity} statistic3 = {player?.assist} statistic4 = {player?.minutePlayed} name = {player?.name} shirtNumber = {player?.shirtNumber} position = {"Midfielder"} nationality = {player?.nationality} nationalityImageLink = {player?.nationalityImageLink}/>
                    </div>
                }
            })}
        </div>
    </div>
  )
}

export default DetailSquadMidfielder
