import React from 'react'
import ReactPlayer from 'react-player'

const TeamVideo = ({teamId, team}) => {
  return (
    <div className = "absolute z-10" style = {{left: "73.5rem", top: "25rem", width: "30%"}}>
        {team ? <p className = "font-teko text-2xl font-bold relative text-easeYellow">{`${team?.name.toUpperCase()} VIDEOS`}</p> 
        : <p className = "font-roboto text-2xl font-bold" style = {{color: team?.color}}>Cannot load the content!</p> }
        <div className = "relative" style = {{top: "1rem"}}>
            <ReactPlayer 
                url = {team?.videoLinks[0]}
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
            <p className = "relative font-teko text-lg font-bold text-easeYellow" style = {{width: "65%", top: "0.5rem"}}>{team?.videoTitles[0]}</p>
        </div>
        <div className = "relative" style = {{top: "3rem"}}>
            <ReactPlayer 
                url = {team?.videoLinks[1]}
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
            <p className = "relative font-teko text-lg font-bold text-easeYellow" style = {{width: "65%", top: "0.5rem"}}>{team?.videoTitles[1]}</p>
        </div>
        <div className = "relative" style = {{top: "5rem"}}>
            <ReactPlayer 
                url = {team?.videoLinks[2]}
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
            <p className = "relative font-teko text-lg font-bold text-easeYellow" style = {{width: "65%", top: "0.5rem"}}>{team?.videoTitles[2]}</p>
        </div>
    </div>
  )
}

export default TeamVideo
