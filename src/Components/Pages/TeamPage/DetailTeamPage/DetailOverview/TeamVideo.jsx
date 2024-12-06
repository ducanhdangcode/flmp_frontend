import React from 'react'
import ReactPlayer from 'react-player'

const TeamVideo = ({teamId, teamList, teamVideoTitles}) => {
  return (
    <div className = "absolute z-10" style = {{left: "73.5rem", top: "25rem", width: "30%"}}>
        {teamList.length > 0 ? <p className = "font-roboto text-2xl font-bold relative" style = {{color: teamList[teamId - 1]?.color}}>{`${teamList[teamId - 1]?.name.toUpperCase()} VIDEOS`}</p> 
        : <p className = "font-roboto text-2xl font-bold" style = {{color: teamList[teamId - 1]?.color}}>Cannot load the content!</p> }
        <div className = "relative" style = {{top: "1rem"}}>
            <ReactPlayer 
                url = {teamList[teamId-1]?.videoLinks[0]}
                width = "65%"
                height = "30%"
                controls = {true}
                muted = {true}
                style = {{border: "5px solid gray", borderRadius: "10px"}}
                config={{
                    youtube: {
                        playerVars: {
                            showInfo: 0, 
                            autoplay: 1, 
                            modestbranding: 1, 
                            iv_load_policy: 3
                        }
                    }
                }}
            />
            <p className = "relative font-roboto text-lg font-bold text-white" style = {{width: "65%", top: "0.5rem"}}>{teamVideoTitles.first}</p>
        </div>
        <div className = "relative" style = {{top: "3rem"}}>
            <ReactPlayer 
                url = {teamList[teamId-1]?.videoLinks[1]}
                width = "65%"
                height = "30%"
                controls = {true}
                muted = {true}
                style = {{border: "5px solid gray", borderRadius: "10px"}}
                config={{
                    youtube: {
                        playerVars: {
                            showInfo: 0, 
                            autoplay: 1, 
                            modestbranding: 1, 
                            iv_load_policy: 3
                        }
                    }
                }}
            />
            <p className = "relative font-roboto text-lg font-bold text-white" style = {{width: "65%", top: "0.5rem"}}>{teamVideoTitles.second}</p>
        </div>
        <div className = "relative" style = {{top: "5rem"}}>
            <ReactPlayer 
                url = {teamList[teamId-1]?.videoLinks[2]}
                width = "65%"
                height = "30%"
                controls = {true}
                muted = {true}
                style = {{border: "5px solid gray", borderRadius: "10px"}}
                config={{
                    youtube: {
                        playerVars: {
                            showInfo: 0, 
                            autoplay: 1, 
                            modestbranding: 1, 
                            iv_load_policy: 3
                        }
                    }
                }}
            />
            <p className = "relative font-roboto text-lg font-bold text-white" style = {{width: "65%", top: "0.5rem"}}>{teamVideoTitles.third}</p>
        </div>
    </div>
  )
}

export default TeamVideo
