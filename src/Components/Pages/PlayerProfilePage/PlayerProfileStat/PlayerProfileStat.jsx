import React, { useEffect } from 'react'
import GoalkeeperTableStat from './GoalkeeperTableStat'
import OtherPlayerTableStat from './OtherPlayerTableStat'
import WebFont from 'webfontloader'
import GoalkeeperStatTableByTeam from './PlayerStatByTeam/GoalkeeperStatTableByTeam'
import OtherPlayerStatTableByTeam from './PlayerStatByTeam/OtherPlayerStatTableByTeam'
import PlayerRating from './PlayerRating/PlayerRating'

const PlayerProfileStat = ({player, setupSelectedSeason, seasonStat, changeStatBySeason, dataError, allStatsGroupByTeam}) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Ubuntu", "Changa", "Roboto Condensed", "Alfa Slab One", "Space Grotesk"]
            }
        })
    }, [])
  return (
    <div>
        {/* filter option */}
        <div className = "bg-white h-[3rem] w-[93%] flex pl-[2rem]">
            <p className = "relative top-[0.8rem] font-ubuntu font-bold">Filter by season: </p>
            <select className = "h-[1.5rem] w-[15rem] relative top-[0.75rem] left-[30%] font-roboto" onChange = {(e) => setupSelectedSeason(e.target.value)}>
                <option value = "24-25">24/25</option>
                <option value = "23-24">23/24</option>
                <option value = "22-23">22/23</option>
            </select>
            <button className = "w-[5rem] h-[1.5rem] bg-[#09048a] text-white font-ubuntu relative top-[0.75rem] left-[32%]" onClick = {changeStatBySeason}>Show</button>
        </div>

        {/* stats table filtered by season */}
        {dataError === "" ? 
            <div>
                {player?.position === "Goalkeeper" ? 
                    <div className = "mt-[1rem]">
                        <GoalkeeperTableStat 
                            seasonStat = {seasonStat}
                        /> 
                    </div> : 
                    <div className = "mt-[1rem]">
                        <OtherPlayerTableStat 
                            player = {player}
                            seasonStat = {seasonStat}
                        />
                    </div>
                }
            </div> : 
            <div className = "font-space-grotesk text-red-500 relative left-[40%] top-[1rem] text-xl font-bold">{dataError}</div>
        }

        {/* stats table filtered by team */}
        <div>
            {player?.position === "Goalkeeper" ?
                <div>
                    <GoalkeeperStatTableByTeam 
                        allStatsGroupByTeam = {allStatsGroupByTeam}
                    />
                </div> : 
                <div>
                    <OtherPlayerStatTableByTeam 
                        allStatsGroupByTeam = {allStatsGroupByTeam}
                    />
                </div>
            }
        </div>

        {/* player rating */}
        <div className = "mt-[1rem]">
            <PlayerRating 
                player = {player}
            />
        </div>
    </div>
  )
}

export default PlayerProfileStat
