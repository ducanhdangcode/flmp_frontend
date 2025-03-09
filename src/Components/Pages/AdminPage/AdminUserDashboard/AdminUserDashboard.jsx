import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AdminGetUserByUsername from './Services/AdminGetUserByUsername'

const AdminUserDashboard = () => {
  return (
    <div>
        {/* navbar */}
        <div>
            <AdminNavbar />
        </div>

        {/* title */}
        <div className = "w-full h-[7rem] text-center bg-gray-300">
        <p className = "text-5xl font-ubuntu font-bold relative top-[1rem]"><span className = "text-[#ebc94e]">FLMP </span>User Management</p>
        </div>

        {/* content */}
        <div className = "flex">
            {/* content */}
            <div className = "w-full h-full bg-gray-100">
                <AdminGetUserByUsername />
            </div>
        </div>
    </div>
  )
}

export default AdminUserDashboard
