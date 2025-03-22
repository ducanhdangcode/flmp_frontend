import AOS from 'aos'
import React, { useEffect } from 'react'
import WebFont from 'webfontloader'

const Chairman = ({teamId, team}) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Space Grotesk"]
      }
    })
  }, [])
  return (
    <div className = "absolute w-full" style = {{top: "112.5rem"}}>
      <div className = "bg-hardGreen w-full relative left-[0rem] bottom-[1rem]">
        <p className = "text-[25px] font-teko font-bold relative left-[2rem] text-[white] py-[0.4rem] top-[0.2rem]">CHAIRMAN</p>
      </div>
      <div className='flex relative top-[-1rem]'>
        <img src = {team?.chairmanImage} alt = "" className = "relative w-[40rem] h-[23rem]" style = {{borderRight: "1px solid white"}}/>
        <div className='block'>
            <div className = "bg-easeGreen w-[55.6rem] text-center h-[4rem]" style = {{borderBottom: "1px solid white"}}>
              <p className = "text-4xl font-space-grotesk font-bold relative top-[0.2rem]">{team?.chairmanName}</p>
            </div>
            <div className = "bg-easeWhite h-[19rem]">
              <p className = "font-space-grotesk relative w-[52rem] left-[1rem] top-[0.5rem]" style = {{fontSize: "1rem"}}>{team?.chairmanDescription}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chairman
