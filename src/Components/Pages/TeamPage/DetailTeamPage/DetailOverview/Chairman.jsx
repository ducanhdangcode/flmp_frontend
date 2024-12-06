import AOS from 'aos'
import React, { useEffect } from 'react'
import WebFont from 'webfontloader'

const Chairman = ({teamId, teamList, teamChairman}) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Space Grotesk"]
      }
    })
  }, [])
  return (
    <div className = "absolute w-full" style = {{top: "112.5rem"}}>
      <div className = "bg-[#000B58] w-full relative left-[0rem] bottom-[1rem] h-[3rem]">
        <p className = "text-2xl font-ubuntu font-bold relative left-[2rem] text-[white] top-[0.4rem]">CHAIRMAN</p>
      </div>
      <div className='flex relative top-[-1rem]'>
        <img src = {teamChairman} alt = "" className = "relative w-[40rem] h-[23rem]" style = {{borderRight: "1px solid white"}}/>
        <div className='block'>
            <div className = "bg-[#deded4] w-[55.6rem] text-center h-[4rem]" style = {{borderBottom: "1px solid white"}}>
              <p className = "text-4xl font-space-grotesk font-bold relative top-[0.2rem]">{teamList[teamId-1]?.chairmanName}</p>
            </div>
            <div className = "bg-[white] h-[19rem]">
              <p className = "font-space-grotesk relative w-[52rem] left-[1rem] top-[0.5rem]" style = {{fontSize: "1rem"}}>{teamList[teamId-1]?.chairmanDescription}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chairman
