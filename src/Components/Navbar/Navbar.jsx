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
    const lightNavBarStyle = "bg-white border-gray-200 dark:bg-white max-h-24 fixed z-30 w-full"
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
                {/* logo */}
                <Link to = "/">
                    <img className = "w-44 h-20 ml-5 mt-2 mb-2 inline-block" src = {colorTheme === darkColor ? appLogo : darkAppLogo} alt = "FLMP Logo"/>
                </Link>
                {/* options */}
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
                            {colorTheme === darkColor ? <p className = "block text-center text-white mt-8 text-xl opacity-60 hover:opacity-100 ">ABOUT US</p> : <p className = "block text-center text-black mt-8 text-xl font-semibold opacity-100 hover:opacity-100 ">ABOUT US</p>}
                        </li>
                    </ul>
                </div>

                {/* search box */}
                <div className = "flex">
                    <input 
                        type = "text"
                        placeholder = "Search"
                        className = "w-64 h-9 mt-7 rounded-[8px] relative ml-[17rem] bg-gray-300 pl-[1rem]"
                    />
                    <div className = "relative">
                        <FaSearch className = "w-[1.4rem] h-[1.4rem] mt-[2.2rem] relative right-[1.8rem]"/>
                    </div>
                </div>

                {/* login area */}
                {!loginState ? 
                    (<Link to = "/login">
                        <div className = "flex mt-[2rem] ml-[0.5rem]">
                            <div>
                                <Link to = "/login">
                                    <p className = {`font-roboto text-xl font-bold ${colorTheme === lightColor ? "" : "text-white"}`}>Login</p>
                                </Link>
                            </div>
                            <div>
                                <Link to = "/register">
                                    <p className = {`font-roboto text-xl font-bold ml-[2.5rem] ${colorTheme === lightColor ? "" : "text-white"}`}>Register</p>
                                </Link>
                            </div>
                        </div>
                    </Link>) : 
                    (
                        <div>
                            <img src = {JSON.parse(recentAvatar)} alt = "User Logo" className = "w-12 h-12 border-[#e80560] mt-6 hover:cursor-pointer ml-[5rem]" style = {{borderRadius: "50%", borderWidth: "3px"}} onClick = {handleChangeUserDropdown}/>
                        </div>
                    )
                }

                {/* login dropdown */}
                {displayUserDropdown === true && <UserDropdown disableLoginState = {disableLoginState} disableDropdown = {disableDropdown}/>}

                {/* change theme button */}
                {colorTheme === darkColor ?
                    <FaSun className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[3rem]" style = {{color: "white"}} onClick = {onHandleChangeTheme}/> : 
                    <FaMoon className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[3rem]" style = {{color: "black"}} onClick = {onHandleChangeTheme}/>
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
