import React from 'react'
import ViewProfile from './ViewProfile'

const DetailSquadCoach = ({teamId, teamList, coachList}) => {
  return (
    <div className = "relative bg-[#c7daf2] h-[33rem]">
        <div className = "bg-[#112f54] h-[3rem]">
            <p className = "font-ubuntu text-3xl font-bold relative left-[2rem] top-[0.1rem] text-white">Head Coach</p>
        </div>
        <div className = "relative left-[2rem] top-[2rem]" style = {{width: "23rem", height: "25rem", backgroundColor: "white", borderRadius: "11px", boxShadow: `0.3rem 0.3rem 0.4rem ${teamList[teamId-1]?.color}`}}>
            <div className = "flex">
                <div className = "relative" style = {{width: "8rem", height: "16rem", backgroundColor: "#c4bcc3", borderTopLeftRadius: "11px"}}>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.5rem"}}>Total Matches</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.5rem"}}>{coachList[teamId-1]?.totalMatches}</p>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "1rem"}}>This season</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "1rem"}}>{coachList[teamId-1]?.currentMatches}</p>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "1.5rem"}}>Point per match</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "1.5rem"}}>{coachList[teamId-1]?.pointPerMatch}</p>
                </div>
                <div className = "relative" style = {{width: "15rem", height: "16rem", backgroundColor:`${teamList[teamId-1]?.color}`, borderTopRightRadius: "11px"}}>
                    <img src = {coachList[teamId-1]?.imageLink} alt = "" className = "" style = {{width: "15rem", height: "16rem", borderTopRightRadius: "11px"}} />
                </div>
            </div>

            <div className = "block" style = {{height: "9rem"}}>
                <div className = "relative" style = {{left: "1rem", top: "0.5rem"}}>
                    <p className = "text-3xl font-alfa font-bold relative">{coachList[teamId-1]?.name}</p>
                    <p className = "text-lg font-noticia-text font-bold relative" style = {{bottom: "0.2rem"}}>Manager</p>
                </div>
                <div className = "relative flex" style = {{top: "2rem", left: "1rem"}}>
                    <img src = {coachList[teamId-1]?.nationalityImage} alt = "" className = "" style = {{width: "3rem", height: "2rem"}} />
                    <p className = "font-ubuntu text-lg relative" style = {{left: "0.5rem"}}>{coachList[teamId-1]?.nationality}</p>
                    <div className = "absolute" style = {{left: "13rem"}}>
                        <ViewProfile />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailSquadCoach
