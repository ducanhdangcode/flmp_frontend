import React from 'react'
import GoalkeeperTableStat from './GoalkeeperTableStat'
import OtherPlayerTableStat from './OtherPlayerTableStat'

const PlayerProfileStat = ({player, setupSelectedSeason, seasonStat}) => {
    
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
            <button className = "w-[5rem] h-[1.5rem] bg-[#09048a] text-white font-ubuntu relative top-[0.75rem] left-[32%]">Show</button>
        </div>

        {/* stats table */}
        {player?.position === "Goalkeeper" ? 
            <div className = "mt-[1rem]">
                <GoalkeeperTableStat /> 
            </div> : 
            <div className = "mt-[1rem]">
                <OtherPlayerTableStat 
                    player = {player}
                    seasonStat = {seasonStat}
                />
            </div>
        }
    </div>
  )
}

export default PlayerProfileStat
