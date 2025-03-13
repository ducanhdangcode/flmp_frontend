import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader';


const Trophies = ({teamId, team}) => {
    

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed'],
            }
        })
    }, [])

  return (
    <div className = "bg-[white]" style = {{left: "0rem", width: "70.2rem"}}>
        <div className = "bg-[#000B58] w-[70.2rem]">
            <p className = "text-2xl font-ubuntu font-bold relative text-white py-[0.5rem]" style = {{left: "2rem"}}>TROPHIES WON</p>
        </div>
        {/* trophies */}
        <div className = "w-[70.2rem]">
            {team?.trophies.map((trophy, index) => {
                if (index % 2 === 0) {
                    return (
                        <div className = "w-full bg-gray-300 border-solid border-b-[1px] border-b-gray-500 flex">
                            <div className = "w-[50%] border-solid border-r-[1px] border-r-gray-500">
                                <p className = "py-[0.2rem] font-ubuntu text-lg font-bold pl-[5%]">{trophy?.titleName}</p>
                            </div>
                            <div className = "w-[50%]">
                                <p className = "py-[0.2rem] font-ubuntu text-lg font-bold pl-[5%]">{trophy?.quantity}</p>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className = "w-full bg-white border-solid border-b-[1px] border-b-gray-500 flex">
                            <div className = "w-[50%] border-solid border-r-[1px] border-r-gray-500">
                                <p className = "py-[0.2rem] font-ubuntu text-lg font-bold pl-[5%]">{trophy?.titleName}</p>
                            </div>
                            <div className = "w-[50%]">
                                <p className = "py-[0.2rem] font-ubuntu text-lg font-bold pl-[5%]">{trophy?.quantity}</p>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        {/* note */}
        <div className = "text-center">
            <p className = "font-ubuntu font-bold relative top-[0.5rem]">{`Total trophies won of ${team?.name} until now`}</p>
        </div>
    </div>
  )
}

export default Trophies
