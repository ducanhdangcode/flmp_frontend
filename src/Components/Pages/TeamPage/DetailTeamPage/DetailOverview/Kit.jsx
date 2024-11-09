import React from 'react'

import ManCityKit1 from '../../../../../Image/Kit/ManchesterCity/manCityKit1.png';

const Kit = ({teamId, teamList, teamKits}) => {
  return (
    <div className = "relative" style = {{bottom: "25rem"}}>
      <p className = "text-2xl font-ubuntu font-bold relative" style = {{left: "2rem", bottom: "0.2rem"}}>2024/2025 KIT</p>
      <div className = "relative left-8 top-8 flex">
        {teamKits.map((kit, index) => {
            return <div className = "relative rounded-2xl mr-32" style = {{backgroundColor: "#8c8484", width: "20rem", height: "21rem", boxShadow: `0.3rem 0.3rem 0.5rem ${teamList[teamId-1]?.kitColors[index]}`}}>
                <img src = {kit} alt = "" className = "relative" style = {{width: "20rem", height: "20rem"}}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default Kit
