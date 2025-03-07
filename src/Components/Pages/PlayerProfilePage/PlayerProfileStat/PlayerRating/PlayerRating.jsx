import React from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const PlayerRating = ({player}) => {
  return (
    <div>
      {/* header */}
      <div className = "w-full h-[2rem] bg-[#060433] font-ubuntu text-lg text-white font-bold text-center">
          <p>Player Rating</p>
      </div>
      <div className = "w-full h-[30rem] bg-gray-300">
        <div className = "relative top-[2rem]">
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={player?.playerRatings}>
              <PolarGrid stroke = "white" strokeWidth={3} gridType='polygon'/>
              <PolarAngleAxis 
                dataKey="ratingField" 
                tick = {{fontWeight: "bold", fill: "black"}}
              />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar name="Player Stats" dataKey="ratingPoint" stroke="#c94f59" fill="#c94f59" fillOpacity={0.6} strokeWidth={2}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className = "relative top-[5rem]">
          <p className = "text-center font-changa"><b>{player?.name}</b>'s rating based on all performances</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerRating
