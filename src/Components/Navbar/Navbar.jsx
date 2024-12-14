import React, { useEffect, useState } from 'react'
import appLogo from './logo-no-background.png';
import darkAppLogo from './darkLogoNobg.png';
import SpaceBackground from './space-bg.jpg';
import './Navbar.css';
import WebFont from 'webfontloader';
import { FaSearch } from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserDropdown from '../Dropdowns/UserDropdown/UserDropdown';

const Navbar = ({colorTheme, onHandleChangeTheme, lightColor, darkColor, loginState, displayUserDropdown, handleChangeUserDropdown, disableLoginState, disableDropdown, recentAvatar}) => {

    const darkNavBarStyle = "bg-white border-gray-200 dark:bg-gray-900 max-h-24 fixed z-30 w-full";
    const lightNavBarStyle = "bg-white border-gray-200 dark:bg-blue-400 max-h-24 fixed z-30 w-full"
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto Condensed', 'Kanit']
            }
        })
    }, [])
  return (
    <header>
        <nav className = {colorTheme === lightColor ? lightNavBarStyle : darkNavBarStyle}>
            <div className = "flex">
                <Link to = "/">
                    <img className = "w-44 h-20 ml-5 mt-2 mb-2 inline-block" src = {colorTheme === darkColor ? appLogo : darkAppLogo} alt = "FLMP Logo"/>
                </Link>
                <div>
                    <ul>
                        <Link to = "/team">
                            <li className = "float-left relative left-10">
                                {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100 font-roboto">TEAMS</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100">TEAMS</p>}
                            </li>
                        </Link>
                        <li className = "float-left relative left-20">
                            {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100">LEAGUES</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100">LEAGUES</p>}
                        </li>
                        <li className = "float-left relative" style = {{left: "7.5rem"}}>
                            {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100">TRANSFER MARKET</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100">TRANSFER MARKET</p>}
                        </li>
                        <li className = "float-left relative" style = {{left: "10rem"}}>
                            {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100 ">STATISTICS</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100 ">STATISTICS</p>}
                        </li>
                        <li className = "float-left relative" style = {{left: "12.5rem"}}>
                            {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100 ">STATISTICS</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100 ">ABOUT US</p>}
                        </li>
                    </ul>
                </div>
                <input 
                    type = "text"
                    placeholder = "Search"
                    className = "w-64 h-9 mt-7 rounded-2xl relative"
                    style = {{left: "17rem"}}
                />
                <div className = "relative">
                    <FaSearch className = "w-7 h-7 mt-8 absolute" style = {{left: "14.5rem"}}/>
                </div>
                {!loginState ? 
                    (<Link to = "/login">
                        {colorTheme === lightColor ? <FaUserAlt className = "w-10 h-10 mt-7 relative" style = {{color: "black", left: "20rem"}}/> : <FaUserAlt className = "w-10 h-10 mt-7 relative" style = {{color: "white", left: "20rem"}}/>}
                    </Link>) : 
                        (<img src = {JSON.parse(recentAvatar)} alt = "User Logo" className = "w-12 h-12 border-yellow-600 mt-6 hover:cursor-pointer absolute right-[14.2rem]" style = {{borderRadius: "50%", borderWidth: "3px"}} onClick = {handleChangeUserDropdown} onMouse/>)
                }
                {displayUserDropdown === true &&
                    <div className = "absolute bg-red-600 w-[1.5rem] h-[0.25rem] right-[14.85rem] top-[5rem] rounded-[20%]"></div>
                }
                {displayUserDropdown === true && <UserDropdown disableLoginState = {disableLoginState} disableDropdown = {disableDropdown}/>}
                {colorTheme === darkColor ?
                    <FaSun className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[5rem]" style = {{color: "white"}} onClick = {onHandleChangeTheme}/> : 
                    <FaMoon className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[5rem]" style = {{color: "black"}} onClick = {onHandleChangeTheme}/>
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
