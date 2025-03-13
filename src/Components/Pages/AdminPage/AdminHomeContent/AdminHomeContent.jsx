import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import Asset1 from './image.png';
import Asset2 from './barcelona.webp';
import Asset3 from './juventus.webp';
import Asset4 from './bayern.png';
import { Link } from 'react-router-dom';

const AdminHomeContent = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Ubuntu']
            }
        })
    })
  return (
    <div>
      {/* title */}
      <div className = "w-full h-[7rem] text-center">
        <p className = "text-5xl font-ubuntu font-bold relative top-[1rem]"><span className = "text-[#ebc94e]">FLMP </span>Admin Dashboard</p>
      </div>

      {/* home content */}
      <div className = "bg-gray-300 pb-[2rem] pt-[2rem]">
        <div className = "flex">
            {/* user */}
            <div className = "w-[40%] h-[35rem] bg-gray-200 relative left-[5%] rounded-[10px]">
                <img src = {Asset1} alt = "" className = "w-full h-[70%] rounded-tl-[10px] rounded-tr-[10px]" />
                <p className = "font-ubuntu text-lg w-[96%] relative left-[2%] top-[2%] font-bold">At FLMP Admin Dashboard, you can manage the Users, including create new User, change information of User or promote their account level. You can also change User's password when having a request.</p>
                <Link to = "/admin/user">
                    <button className = "h-[2rem] bg-[#ebc94e] text-white font-ubuntu font-bold px-[2rem] float-right relative top-[2rem] right-[2rem] rounded-[8px]">
                        Go to user dashboard
                    </button>
                </Link>
            </div>

            {/* teams */}
            <div className = "w-[40%] h-[35rem] bg-gray-200 rounded-[10px] relative left-[15%]">
                <img src = {Asset2} alt = "" className = "w-full h-[70%] rounded-tl-[10px] rounded-tr-[10px]" />
                <p className = "font-ubuntu text-lg w-[96%] relative left-[2%] top-[2%] font-bold">At FLMP Admin Dashboard, you can manage the Teams: stats, fixtures, squads,.... You can change the team detail such as stadium, market value, logo,...</p>
                <Link to = "/admin/team">
                    <button className = "h-[2rem] bg-[#ebc94e] text-white font-ubuntu font-bold px-[2rem] float-right relative top-[2rem] right-[2rem] rounded-[8px]">
                        Go to team dashboard
                    </button>
                </Link>
            </div>
        </div>

        <div className = "flex">
            {/* players */}
            <div className = "w-[40%] h-[35rem] bg-gray-200 relative left-[5%] rounded-[10px] mt-[3rem]">
                <img src = {Asset3} alt = "" className = "w-full h-[70%] rounded-tl-[10px] rounded-tr-[10px]" />
                <p className = "font-ubuntu text-lg w-[96%] relative left-[2%] top-[2%] font-bold">At FLMP Admin Dashboard, you can manage the Players, you can change their information, update their transfer history, update their stats,...</p>
                <button className = "h-[2rem] bg-[#ebc94e] text-white font-ubuntu font-bold px-[2rem] float-right relative top-[2rem] right-[2rem] rounded-[8px]">
                    Go to player dashboard
                </button>
            </div>

            {/* formations */}
            <div className = "w-[40%] h-[35rem] bg-gray-200 rounded-[10px] relative left-[15%] mt-[3rem]">
                <img src = {Asset4} alt = "" className = "w-full h-[70%] rounded-tl-[10px] rounded-tr-[10px]" />
                <p className = "font-ubuntu text-lg w-[96%] relative left-[2%] top-[2%] font-bold">At FLMP Admin Dashboard, you can manage the Formations, you can add new formation, change formation squad, delete formation, let user to create their own formations.</p>
                <button className = "h-[2rem] bg-[#ebc94e] text-white font-ubuntu font-bold px-[2rem] float-right relative top-[2rem] right-[2rem] rounded-[8px]">
                    Go to formation dashboard
                </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AdminHomeContent
