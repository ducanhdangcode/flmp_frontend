import React, { useEffect, useReducer, useRef, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoHelpCircle } from 'react-icons/io5'
import { FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WebFont from 'webfontloader';
import { getUserByUsername } from '../../../APIService/UserService.'
import { useUserContext } from '../../../Context/UserContext'
import DefaultAvatar from './defaultAvatar.png';

const UserDropdown = ({disableLoginState, disableDropdown}) => {
  const [user, setUser] = useState(null);

  const {loginUsername, userToken, avatar} = useUserContext();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lilita One']
      }
    })
  }, [])

  useEffect(() => {
    getUserByUsername(loginUsername).then(response => {
      setUser(response.data);
      console.log(response.data);
    }).catch(err => console.error(err))
    console.log(loginUsername);
  }, []);
  
  return (
    <div className = "bg-white font-changa text-2xl rounded-lg font-semibold w-[20rem]">
      {/* username */}
      <div>
        <p className = "text-lg absolute left-[5rem] top-[1rem]">{user?.username}</p>
      </div>
      {/* user profile */}
      <Link to = "/user-profile">
        <div className = "flex pt-[1rem] pl-[1rem] border-solid border-b-[1px] border-b-gray-500 pb-3" onClick = {disableDropdown}>
            <img src = {user?.avatar ? JSON.parse(user?.avatar) : DefaultAvatar} alt = "" className = "w-[3rem] h-[3rem] rounded-[50%] border-solid border-[3px] border-[#e80560]" />
            <div className = "flex ml-[0.5rem] mt-[2rem]">
              {user?.roles.map((role) => {
                  return (
                    <div className = "bg-red-500 text-white px-1 rounded-[5px] ml-[0.5rem]">
                      <p className = "text-lg mt-[0.2rem]">{role}</p>
                    </div>
                  )
              })}
            </div>
        </div>
      </Link>

      <div className = "h-12 flex relative hover:bg-gray-400 hover:cursor-pointer">
        <span>
            <IoHelpCircle className = "relative w-8 h-8" style = {{top: "0.1rem", left: "0.15rem", color: "gray"}}/>
        </span>
        <p className = "ml-3 relative" style = {{bottom: "0.07rem"}}>Help</p>
      </div>

      <Link to = "/login">
        <div className = "h-12 flex relative hover:bg-gray-400 hover:cursor-pointer rounded-bl-lg rounded-br-lg" onClick = {disableLoginState}>
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
