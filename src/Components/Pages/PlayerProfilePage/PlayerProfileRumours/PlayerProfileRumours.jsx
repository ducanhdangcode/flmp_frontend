import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";

const PlayerProfileRumours = ({player}) => {
  return (
    <div className = "relative left-[2rem] mt-[1.5rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">Some Rumours</p>
        </div>

        {/* rumours */}
        <div className = "mt-[1.5rem] w-[93%]">
            {player?.rumours.map((rumour) => {
                return (
                    <div className = "w-full bg-mediumGreen rounded-[5px] flex py-[2rem] relative mb-[1rem]">
                        {/* club left */}
                        <div className = "w-[20%] text-center">
                            <img src = {rumour?.clubLeftLogoLink} alt = "" className = "w-[50%] h-[8rem] relative left-[25%]" />
                            <p className = "font-teko text-xl font-bold mt-[1rem]">{rumour?.clubLeftName}</p>
                        </div>

                        {/* arrow */}
                        <div className = "w-[8%]" style = {{color: 'white'}}>
                            <TiArrowRightThick className = "w-[8rem] h-[8rem]" />
                        </div>

                        {/* club join */}
                        <div className = "w-[20%] text-center">
                            <img src = {rumour?.clubJoinedLogoLink} alt = "" className = "w-[50%] h-[8rem] relative left-[25%]" />
                            <p className = "font-teko text-xl font-bold mt-[1rem]">{rumour?.clubJoinedName}</p>
                        </div>

                        {/* probability */}
                        <div className = "absolute right-[3rem] w-[10%] text-easeYellow top-[3rem]">
                            <p className = "font-teko font-bold text-3xl text-center">Probability</p>
                            <p className = "font-teko font-bold text-[5rem] text-center">{`${rumour?.probability}%`}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayerProfileRumours
