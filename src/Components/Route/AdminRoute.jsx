import React from 'react'
import { useUserContext } from '../../Context/UserContext'
import { getUserByUsername } from '../../APIService/UserService.';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const {loginUsername} = useUserContext();
    const checkAdmin = () => {
        getUserByUsername(loginUsername).then((response) => {
            if (response.data.roles.includes("Admin")) {
                return true;
            }
        })
        return false;
    }
  return (
    checkAdmin() === true ? <Outlet /> : <Navigate to = "/unauthorized" />
  )
}

export default AdminRoute
