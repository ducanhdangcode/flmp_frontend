import React from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminHomeContent from './AdminHomeContent/AdminHomeContent'

const AdminPage = () => {
  return (
    <div>
        {/* header */}
        <div>
            <AdminNavbar />
        </div>
        {/* home content */}
        <div>
            <AdminHomeContent />
        </div>
    </div>
  )
}

export default AdminPage
