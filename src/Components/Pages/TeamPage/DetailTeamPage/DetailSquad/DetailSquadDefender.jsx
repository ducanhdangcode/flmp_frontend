import React, { useEffect } from 'react'
import PlayerCard from './PlayerCard'

const DetailSquadDefender = ({teamId, team, playerList}) => {
  return (
    <div className = "relative w-full" style = {{}}>
        <div className = "h-[3rem] bg-[#112f54]">
            <p className = "font-ubuntu text-3xl font-bold relative left-[2rem] text-white">Defenders</p>
        </div>
        <div className = "flex relative left-[12.5rem] bottom-[3rem]" style = {{flexFlow: "row wrap"}}>
            {playerList.map((player) => {
                if (player?.teamId == teamId && player?.position === "Defender") {
                    return <div className = "relative">
                        <PlayerCard teamId = {teamId} team = {team} player = {player} statisticTitle1 = {"Appearances"} statisticTitle2 = {"Goals"} statisticTitle3 = {"Assists"} statisticTitle4 = {"Minutes Played"} statistic1 = {player?.appearances} statistic2 = {player?.goalQuantity} statistic3 = {player?.assist} statistic4 = {player?.minutePlayed} name = {player?.name} shirtNumber = {player?.shirtNumber} position = {"Defender"} nationality = {player?.nationality} nationalityImageLink = {player?.nationalityImageLink}/>
                    </div>
                }
            })}
        </div>
    </div>
  )
}

export default DetailSquadDefender
