import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
const Kit = ({teamId, teamList, teamKits}) => {
  const kitType = [
    "Home Kit", 
    "Away Kit", 
    "Third Kit"
  ]

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Space Grotesk"]
      }
    })
  }, [])
  return (
    <div className = "absolute top-[78.5rem]">
      <div className = "bg-[#000B58] w-[full] h-[3rem]">
        <p className = "text-2xl font-ubuntu font-bold relative text-[white] left-[2rem] top-[0.4rem]">2024/2025 KIT</p>
      </div>
      <div className = "relative flex">
        {teamKits.map((kit, index) => {
            return <div className = {index %2 === 0 ? "bg-[white] h-[30rem]" : "bg-[#deded4] h-[30rem]"} style = {{borderRight: "1px solid white"}}>
                <div className = "relative rounded-2xl mr-48 left-[6rem] top-[3.5rem] bg-[#8c8484] w-[20rem] h-[21rem]">
                  <img src = {kit} alt = "" className = "relative" style = {{width: "20rem", height: "20rem"}}/>
                </div>
                <div>
                  <p className = "text-3xl font-space-grotesk relative top-[5rem] left-[12rem] font-bold">{kitType[index]}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Kit
