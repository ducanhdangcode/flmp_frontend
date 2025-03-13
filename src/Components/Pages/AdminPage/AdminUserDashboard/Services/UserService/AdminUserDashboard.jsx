import React from 'react'
import AdminNavbar from '../../../AdminNavbar/AdminNavbar'
import AdminDeleteUserById from './AdminDeleteUserById'
import AdminUpdateUserByUsername from './AdminUpdateUserByUsername'
import AdminGetUserByUsername from './AdminGetUserByUsername'


const AdminUserDashboard = () => {
  return (
    <div className = "pb-[1rem]">
        {/* navbar */}
        <div>
            <AdminNavbar />
        </div>

        {/* title */}
        <div className = "w-full h-[7rem] text-center bg-gray-300">
        <p className = "text-5xl font-ubuntu font-bold relative top-[1rem]"><span className = "text-[#ebc94e]">FLMP </span>User Management</p>
        </div>

        {/* content */}
        <div className = "">
            {/* content */}
            <div className = "w-full h-full bg-gray-100">
                {/* get user by username */}
                <div>
                    <AdminGetUserByUsername />
                </div>
                {/* update user by username */}
                <div className = "">
                    <AdminUpdateUserByUsername />
                </div>
                {/* delete user by username */}
                <div>
                    <AdminDeleteUserById />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminUserDashboard
