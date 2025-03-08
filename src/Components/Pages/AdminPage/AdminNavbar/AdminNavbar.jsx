import React from 'react'
import Logo from './darkLogoNobg.png';

const AdminNavbar = () => {
  return (
    <div>
        {/* nav bar */}
        <div className = "w-full h-[5rem] bg-white flex">
            <img src = {Logo} alt = "" className = "w-[12%] h-[4rem] relative left-[1%] top-[0.5rem]" />
            <div className = "flex relative left-[4%] top-[1.7rem] font-roboto w-full">
                <div className = "text-xl font-bold hover:cursor-pointer">
                    <p>USER</p>
                </div>
                <div className = "text-xl font-bold relative left-[5%] hover:cursor-pointer">
                    <p>TEAMS</p>
                </div>
                <div className = "text-xl font-bold relative left-[10%] hover:cursor-pointer">
                    <p>PLAYERS</p>
                </div>
                <div className = "text-xl font-bold relative left-[15%] hover:cursor-pointer">
                    <p>FORMATIONS</p>
                </div>
                <div>
                    <p className = "text-xl relative left-[40vw] font-bold"><span className = "text-[#ebc94e]">Welcome, </span>admin!</p>
                </div>
                <div>
                    <p className = "text-xl relative left-[45vw] font-bold">Logout</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar
