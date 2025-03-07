import React from 'react'
import FootballField from './Football_field.svg';

const PlayerPriorityPosition = ({player}) => {
    const PositionCoordinate = [
        {
            "position": "GK",
            "coordinate": {"x": 21, "y": 42} // y: %
        }, 
        {
            "position": "CB", 
            "coordinate": {"x": 17, "y": 41}
        }, 
        {
            "position": "RB", 
            "coordinate": {"x": 17, "y": 77}
        }, 
        {
            "position": "LB", 
            "coordinate": {"x": 17, "y": 4}
        }, 
        {
            "position": "DMF", 
            "coordinate": {"x": 14, "y": 41}
        }, 
        {
            "position": "CMF", 
            "coordinate": {"x": 11, "y": 41}
        }, 
        {
            "position": "AMF", 
            "coordinate": {"x": 7, "y": 41}
        }, 
        {
            "position": "RMF", 
            "coordinate": {"x": 8, "y": 77}
        }, 
        {
            "position": "LMF", 
            "coordinate": {"x": 8, "y": 4}
        }, 
        {
            "position": "CF", 
            "coordinate": {"x": 4, "y": 41}
        }, 
        {
            "position": "SS", 
            "coordinate": {"x": 3, "y": 60}
        }, 
        {
            "position": "RWF", 
            "coordinate": {"x": 4, "y": 77}
        }, 
        {
            "position": "LWF", 
            "coordinate": {"x": 4, "y": 4}
        }, 
        {
            "position": "ST", 
            "coordinate": {"x": 0, "y": 41}
        }
    ]
  return (
    <div>
        {/* header */}
        <div className = "w-full h-[2rem] bg-[#060433] font-ubuntu text-lg text-white font-bold text-center">
            <p>Player Positions</p>
        </div>
        {/* content */}
        <div className = "w-full h-[30rem] bg-gray-300 flex">
            <div className = "relative top-[2rem] left-[5%]">
                <div className = "flex">
                    <div className = "rounded-[50%] bg-red-500 border-solid border-[3px] border-black w-[3rem] h-[3rem] text-center" ></div>
                    <p className = "font-ubuntu font-bold relative left-[5%] top-[0.7rem]">Position usually played at</p>
                </div>
                <div className = "flex relative top-[2rem]">
                    <div className = "rounded-[50%] bg-blue-500 border-solid border-[3px] border-black w-[3rem] h-[3rem] text-center" ></div>
                    <p className = "font-ubuntu font-bold relative left-[5%] top-[0.7rem]">Position sometimes played at</p>
                </div>
            </div>
            <div className = "relative top-[2.5rem] left-[15%]">
                <img src = {FootballField} alt = "" className = "h-[25rem] opacity-80"/>
                {player?.priorityPositions.map((data, index) => {
                    const currentCoordinate = PositionCoordinate.filter(pc => pc.position === data.position);
                    if (data.priority === "Usually") {
                        return (
                            <div 
                                className = "rounded-[50%] bg-red-500 border-solid border-[3px] border-black w-[3rem] h-[3rem] text-center" 
                                style = {{position: "absolute", top: `${currentCoordinate[0].coordinate.x}rem`, left: `${currentCoordinate[0].coordinate.y}%`}}
                                >
                                    <span className = "text-white relative top-[0.6rem] font-bold">{data.position}</span>
                            </div>
                        )
                    } else if (data.priority === "Sometimes") {
                        return (
                            <div 
                                className = "rounded-[50%] bg-blue-500 border-solid border-[3px] border-black w-[3rem] h-[3rem] text-center" 
                                style = {{position: "absolute", top: `${currentCoordinate[0].coordinate.x}rem`, left: `${currentCoordinate[0].coordinate.y}%`}}
                                >
                                    <span className = "text-white relative top-[0.6rem] font-bold">{data.position}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default PlayerPriorityPosition
