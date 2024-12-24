import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';


const Trophies = ({teamId, teamList}) => {
    const PremierLeagueTeamTrophies = [
        "UEFA Champions League", 
        "Premier League", 
        "FA Cup", 
        "Carabao Cup", 
        "Community Shield", 
        "UEFA Super Cup", 
        "Club World Cup", 
        "Europa League", 
        "Inter Continental Cup",
        "EFL Championship Cup",
        "UEFA Conference Cup"
    ]

    const LaLigaTeamTrophies = [
        "UEFA Champions League", 
        "La Liga Cup", 
        "Spanish Cup Winner", 
        "Spanish Super Cup Winner", 
        "UEFA Super Cup", 
        "Club World Cup", 
        "Europa League", 
        "Inter Continental Cup",
        "La Liga 2 Cup",
        "UEFA Conference Cup"
    ]

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    }, [])

  return (
    <div className = "absolute block bg-[white]" style = {{left: "0rem", width: "70.2rem", top: "23.5rem"}}>
        <div className = "bg-[#000B58] relative bottom-[0.5rem] w-[70.2rem] h-[3rem]">
            <p className = "text-2xl font-ubuntu font-bold relative text-white top-[0.4rem]" style = {{left: "2rem"}}>TROPHIES WON</p>
        </div>
        {(teamId > 0 && teamId <= 20) && 
            <div className = "flex">
                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[35.35rem]">
                    {PremierLeagueTeamTrophies.map((trophy, index) => {
                        if (index < 6) {
                            return <div className = {index % 2 === 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid white", borderRight: "1px solid white"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>

                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[34.85rem]">
                    {PremierLeagueTeamTrophies.map((trophy, index) => {
                        if (index >= 6) {
                            return <div className = {index % 2 !== 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid white"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>
            </div>
        }

        {(teamId >= 21 && teamId <= 40) && 
            <div className = "flex">
                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[35.35rem]">
                    {LaLigaTeamTrophies.map((trophy, index) => {
                        if (index < 6) {
                            return <div className = {index % 2 === 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid black", borderRight: "1px solid black"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>

                <div className = "block relative bottom-[0.5rem] left-[0rem] w-[34.85rem]">
                    {LaLigaTeamTrophies.map((trophy, index) => {
                        if (index >= 6) {
                            return <div className = {index % 2 !== 0 ? "bg-[white] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]" : "bg-[#d6d6d4] flex h-[3.65rem] bottom-[0.5rem] left-[0.5rem]"} style = {{borderBottom: "1px solid black"}}>
                                <p className = "font-space-grotesk text-2xl relative left-[0.5rem] top-[0.7rem] font-bold">{trophy}</p>
                                <p className = "font-space-grotesk text-3xl absolute left-[30rem] mt-[0.3rem] font-bold">{teamList[teamId-1]?.trophies[index]}</p>
                            </div>
                        }
                    })}
                </div>
            </div>
        }
    </div>
  )
}

export default Trophies
