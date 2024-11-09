import React from 'react'

const Chairman = ({teamId, teamList, teamChairman}) => {
  return (
    <div className = "relative" style = {{bottom: "16rem"}}>
      <p className = "text-2xl font-ubuntu font-bold relative" style = {{left: "2rem", bottom: "0.2rem"}}>CHAIRMAN</p>
      <div className='flex'>
        <img src = {teamChairman} alt = "" className = "relative rounded-2xl" style = {{width: "25rem", height: "20rem", left: "2rem", top: "1rem", boxShadow: `0.3rem 0.3rem 0.5rem ${teamList[teamId-1]?.color}`}}/>
        <div className='block'>
            <p className = "text-4xl font-roboto font-bold relative" style = {{left: "5rem"}}>{teamList[teamId-1]?.chairmanName}</p>
            <p className = "text-lg font-roboto relative" style = {{left: "5rem", width: "50rem", top: "1rem"}}>{teamList[teamId-1]?.chairmanDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Chairman
