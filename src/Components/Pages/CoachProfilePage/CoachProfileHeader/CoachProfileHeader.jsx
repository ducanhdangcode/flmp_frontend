import React from 'react'
import { useTeamHeaderContext } from '../../../../Context/TeamHeaderContext'

const CoachProfileHeader = ({coach}) => {
    
  return (
    <div>
      <div className = "flex">
            {/* coach profile */}
            <div className = "mt-[2rem] relative left-[2rem] bg-mediumGreen w-[50%] h-[18rem] rounded-[5px] flex">
                {/* image */}
                <img src = {coach?.imageLink} alt = "" className = "w-[25%] h-[15rem] relative left-[1rem] top-[1.5rem]" />

                {/* other information */}
                <div className = "relative left-[2.5rem] top-[1.2rem]">
                    {/* name */}
                    <p className = "font-alfa font-bold text-2xl">{coach?.name}</p>
                    <div className = "flex relative top-[0.5rem] bg-easeGreen h-[12.5rem] right-[1rem] w-[35vw] rounded-[5px]">
                        {/* first col */}
                        <div className = "font-ubuntu relative top-[1.5rem] left-[1rem]">
                            {/* date of birth */}
                            <p>Date of birth: <span className = "font-bold"></span></p>
                            {/* height */}
                            <p className = "relative top-[1rem]">Height: <b></b></p>
                            {/* birth place */}
                            <div className = "flex relative top-[2rem]">
                            <p className = "">Place of birth: <b></b></p>
                            {/* <img src = {} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" /> */}
                            </div>
                            {/* nationality */}
                            <div className = "flex relative top-[3rem]">
                            <p>Nationality: <b></b></p>
                            {/* <img src = {player?.nationalityImageLink} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" /> */}
                            </div>
                        </div>

                        {/* second col */}
                        <div className = "font-ubuntu relative top-[1.5rem] left-[4rem]">
                        {/* position */}
                        <p>Coaching licence: <b></b></p>
                        {/* other position */}
                        <p className = "relative top-[1rem]">Avg. term as coach:<b></b></p>
                        {/* preferred foot */}
                        <p className = "relative top-[2rem]">Preferred formation: <b></b></p>
                        {/* former international */}
                        <p className = "relative top-[3rem]">Agent:<b></b></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CoachProfileHeader
