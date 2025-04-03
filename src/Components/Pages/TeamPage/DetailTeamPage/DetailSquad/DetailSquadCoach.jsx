import React from 'react'
import ViewProfile from './ViewProfile'
import { Link } from 'react-router-dom'

const DetailSquadCoach = ({teamId, team, coach}) => {
    const toSlug = (text) => {
        if (text) {
          return text.toLowerCase().replace(/\s+/g, '-'); 
        }
      };
  return (
    <div className = "relative">
        <div className = "bg-hardGreen">
            <p className = "font-teko text-3xl font-bold relative left-[2rem] text-white">Head Coach</p>
        </div>
        <div className = "relative left-[2rem] top-[2rem] bg-moreEaseYellow" style = {{width: "23rem", height: "25rem", borderRadius: "11px", boxShadow: `0.3rem 0.3rem 0.4rem #1F7D53`}}>
            <div className = "flex">
                <div className = "relative bg-easeGreen" style = {{width: "8rem", height: "16rem", borderTopLeftRadius: "11px"}}>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.5rem"}}>Total Matches</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.5rem"}}>{coach?.totalMatches}</p>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "1rem"}}>This season</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "1rem"}}>{coach?.currentMatches}</p>
                    <p className = "text-base font-noticia-text font-bold relative" style = {{textAlign: "center", top: "1.5rem"}}>Point per match</p>
                    <p className = "text-3xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "1.5rem"}}>{coach?.pointPerMatch}</p>
                </div>
                <div className = "relative" style = {{width: "15rem", height: "16rem", backgroundColor:`${team?.color}`, borderTopRightRadius: "11px"}}>
                    <img src = {coach?.imageLink} alt = "" className = "" style = {{width: "15rem", height: "16rem", borderTopRightRadius: "11px"}} />
                </div>
            </div>

            <div className = "block" style = {{height: "9rem"}}>
                <div className = "relative" style = {{left: "1rem", top: "0.5rem"}}>
                    <p className = "text-3xl font-alfa font-bold relative">{coach?.name}</p>
                    <p className = "text-lg font-noticia-text font-bold relative" style = {{bottom: "0.2rem"}}>Manager</p>
                </div>
                <div className = "relative flex" style = {{top: "2rem", left: "1rem"}}>
                    <img src = {coach?.nationalityImage} alt = "" className = "" style = {{width: "3rem", height: "2rem"}} />
                    <p className = "font-ubuntu text-lg relative" style = {{left: "0.5rem"}}>{coach?.nationality}</p>
                    <div className = "absolute" style = {{left: "13rem"}}>
                        <Link to = {`/team/${toSlug(team?.name)}/coach/${toSlug(coach?.name)}`}>
                            <ViewProfile />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailSquadCoach
