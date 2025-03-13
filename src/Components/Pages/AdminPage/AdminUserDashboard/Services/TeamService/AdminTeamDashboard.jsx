import React from 'react'
import AdminNavbar from '../../../AdminNavbar/AdminNavbar'
import AdminCreateTeam from './AdminCreateTeam'

const AdminTeamDashboard = () => {
  return (
    <div className = "pb-[1rem]">
        {/* navbar */}
        <div>
            <AdminNavbar />
        </div>

        {/* title */}
        <div className = "w-full h-[7rem] text-center bg-gray-300">
        <p className = "text-5xl font-ubuntu font-bold relative top-[1rem]"><span className = "text-[#ebc94e]">FLMP </span>Team Management</p>
        </div>

        {/* content */}
        <div className = "">
            {/* content */}
            <div className = "w-full h-full bg-gray-100">
                {/* create team */}
                <AdminCreateTeam />
            </div>
        </div>
    </div> 
  )
}

export default AdminTeamDashboard
