import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminHomeContent from './AdminHomeContent/AdminHomeContent'
import { useUserContext } from '../../../Context/UserContext'
import { getUserByUsername } from '../../../APIService/UserService.'
import UnauthorizedPage from '../UnauthorizedPage/UnauthorizedPage'

const AdminPage = () => {
  const {loginUsername} = useUserContext();
  const [hasAdminRole, setHasAdminRole] = useState("");

  useEffect(() => {
    checkAdminRole();
  }, []);

  const checkAdminRole = () => {
    getUserByUsername(loginUsername).then((response) => {
        if (response.data.roles.includes("Admin")) {
          setHasAdminRole("true");
        } else {
          setHasAdminRole("false");
        }
    })
  }
  return (
    <div>
      {hasAdminRole === "true" ? 
        <div>
            {/* header */}
            <div>
                <AdminNavbar />
            </div>
            {/* home content */}
            <div>
                <AdminHomeContent />
            </div>
        </div> : 
        <div>
          <UnauthorizedPage />
        </div>
      }
    </div>
  )
}

export default AdminPage
