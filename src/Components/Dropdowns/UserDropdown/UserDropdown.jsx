import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoHelpCircle } from 'react-icons/io5'
import { FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WebFont from 'webfontloader';

const UserDropdown = ({disableLoginState, disableDropdown, recentAvatar}) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lilita One']
      }
    })
  }, [])
  
  return (
    <div className = "bg-white font-changa text-2xl rounded-lg font-semibold w-[20rem]">
      {/* user profile */}
      <Link to = "/user-profile">
        <div className = "flex pt-[1rem] pl-[1rem]" onClick = {disableDropdown}>
            <img src = {recentAvatar} alt = "" className = "w-[2.8rem] h-[2.8rem] rounded-[50%] border-solid border-[3px] border-[#e80560]" />
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
