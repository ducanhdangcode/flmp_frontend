import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaUserEdit } from 'react-icons/fa'
import { IoHelpCircle } from 'react-icons/io5'
import { FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WebFont from 'webfontloader';

const UserDropdown = ({disableLoginState, disableDropdown}) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lilita One']
      }
    })
  }, [])
  return (
    <div className = "absolute top-24 z-10 bg-gray-300 font-changa text-2xl rounded-lg font-semibold" style = {{right: "4rem", width: "16rem"}}>
      <Link to = "/user-profile">
        <div className = "h-12 flex relative hover:bg-gray-400 rounded-lg hover:cursor-pointer" onClick = {disableDropdown}>
          <span>
              <FaUserCircle  className = "relative" style = {{top: "0.2rem", color: "gray", left: "0.15rem", width: "1.75rem", height: "1.75rem"}}/>
          </span>
          <p className = "ml-3 relative" style = {{bottom: "0.1rem"}}>View profile</p>
        </div>
      </Link>
      <div className = "h-12 flex relative hover:bg-gray-400 rounded-lg hover:cursor-pointer">
        <span>
            <IoHelpCircle className = "relative w-8 h-8" style = {{top: "0.1rem", left: "0.15rem", color: "gray"}}/>
        </span>
        <p className = "ml-3 relative" style = {{bottom: "0.07rem"}}>Help</p>
      </div>
      <Link to = "/login">
        <div className = "h-12 flex relative hover:bg-gray-400 rounded-lg hover:cursor-pointer" onClick = {disableLoginState}>
          <span>
              <FaSignOutAlt className = "relative" style = {{top: "0.17rem", left: "0.5rem", color: "gray", width: "1.75rem", height: "1.75rem"}}/>
          </span>
          <p className = "ml-3 relative" style = {{left: "0.3rem"}}>Sign out</p>
        </div>
      </Link>
    </div>
  )
}

export default UserDropdown
