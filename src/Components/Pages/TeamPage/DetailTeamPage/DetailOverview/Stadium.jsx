import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import { RiArmchairFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';
import { getStadiumById } from '../../../../../APIService/StadiumService';

const Stadium = ({teamId}) => {
    const [stadium, setStadium] = useState(null);
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu', 'Roboto Condensed', 'Space Grotesk'],
            }
        })
    }, [])

    useEffect(() => {
        getStadiumById(teamId).then(response => {
            setStadium(response.data);
        }).catch(err => console.error(err));
    }, []);
  return (
    <div className = "absolute top-[47.9rem]">
      <div className = "bg-hardGreen w-[70.2rem]">
        <p className = "text-[25px] font-teko font-bold relative text-[white] left-[2rem] py-[0.4rem] top-[0.2rem]">STADIUM</p>
      </div>
      <div className = "flex relative top-[0rem]">
        <div>
            <img src = {stadium?.imageLink} alt = "" className = "relative w-[38rem] h-[27.6rem]" style = {{top: "0rem"}}/>
        </div>
        <div className = "block bg-green-500 relative h-[27.6rem] w-[32.2rem] top-[0rem]">
            <div className = "relative left-[0rem] top-[0rem]">
                <div className = "bg-easeWhite left-[0rem] relative h-[5.52rem] text-center">
                    <p className = "text-3xl font-space-grotesk font-bold relative left-[0rem] top-[1.2rem]">{stadium?.name}</p>
                </div>
                <div className = "flex bg-easeGreen h-[5.52rem] justify-center" style = {{borderTop: "0.5px solid white"}}>
                    <RiArmchairFill className = "relative w-[4rem] h-[4rem] right-[0.5rem] top-[0.8rem]"/>
                    <p className = "text-4xl font-space-grotesk relative font-semibold top-[1.2rem]">{stadium?.totalSeat}</p>
                </div>
                <div className = "flex bg-easeWhite h-[5.52rem] justify-center" style = {{borderTop: "0.5px solid white"}}>
                    <FaLocationDot className = "relative w-[3.2rem] h-[3.2rem] top-[1rem]"/>
                    <p className = "text-2xl font-space-grotesk relative font-bold left-[1rem] top-[1.6rem]">{stadium?.location}</p>
                </div>
                <div className = "flex bg-easeGreen h-[5.52rem] justify-center" style = {{borderTop: "0.5px solid white"}}>
                    <FaCalendarAlt className = "relative w-[3rem] h-[3rem] top-[1rem]"/>
                    <p className = "text-3xl font-space-grotesk relative font-bold top-[1.3rem] left-[1rem]">{stadium?.openDate}</p>
                </div>
                <div className = "flex bg-easeWhite h-[5.52rem] justify-center" style = {{borderTop: "0.5px solid white"}}>
                    <RiMoneyEuroCircleFill className = "relative w-[3.5rem] h-[3.5rem] top-[1rem]"/>
                    <p className = "text-3xl font-space-grotesk relative font-semibold left-[1rem] top-[1.3rem]">{stadium?.constructionCost}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stadium
