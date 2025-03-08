import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import AdminUserSidebar from './AdminUserSidebar'

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
        <div>
            {/* sidebar */}
            <AdminUserSidebar />
        </div>
    </div>
  )
}

export default AdminUserDashboard
