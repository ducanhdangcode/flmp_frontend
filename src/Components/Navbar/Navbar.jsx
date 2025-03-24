import React, { useEffect, useReducer, useRef, useState } from 'react'
import appLogo from './logo-no-background.png';
import './Navbar.css';
import WebFont from 'webfontloader';
import { FaSearch } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserDropdown from '../Dropdowns/UserDropdown/UserDropdown';
import { useThemeContext } from '../../Context/ThemeContext';
import { getUserByUsername } from '../../APIService/UserService.';
import { useUserContext } from '../../Context/UserContext';
import DefaultAvatar from './defaultAvatar.png';

const Navbar = ({loginState, displayUserDropdown, handleChangeUserDropdown, disableLoginState, disableDropdown}) => {

    const darkNavBarStyle = "bg-white border-gray-200 dark:bg-gray-900 max-h-24 fixed z-30 w-full";
    const lightNavBarStyle = "border-gray-200 bg-greenFootball max-h-24 fixed z-30 w-full";

    const dropdownRef = useRef(null);

    const {theme, darkColor, lightColor, setTheme} = useThemeContext();

    const {loginUsername, userToken, avatar} = useUserContext();

    const [user, setUser] = useState(null);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto Condensed', 'Kanit']
            }
        })
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleChangeUserDropdown();
            }
        };

        if (displayUserDropdown === true) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [displayUserDropdown]);

    useEffect(() => {
        getUserByUsername(loginUsername).then((response) => {
            setUser(response.data);
        })
    }, []);
  return (
    <header>
        <nav className = {theme === lightColor ? lightNavBarStyle : darkNavBarStyle}>
            <div className = "flex">
                {/* logo */}
                <Link to = "/">
                    <img className = "w-44 h-20 ml-5 mt-2 mb-2 inline-block" src = {appLogo} alt = "FLMP Logo"/>
                </Link>
                {/* options */}
                <div>
                    <ul>
                        <Link to = "/team">
                            <li className = "float-left relative left-10">
                                <p className = "block text-center text-white mt-[2rem] text-[25px] hover:opacity-100 font-teko font-bold">TEAMS</p>
                            </li>
                        </Link>
                        <li className = "float-left relative left-20">
                            <p className = "block text-center text-white mt-[2rem] text-[25px] hover:opacity-100 font-teko font-bold">LEAGUES</p>
                        </li>
                        <li className = "float-left relative" style = {{left: "7.5rem"}}>
                            <p className = "block text-center text-white mt-[2rem] text-[25px] hover:opacity-100 font-teko font-bold">TRANSFERS</p>
                        </li>
                        <li className = "float-left relative" style = {{left: "10rem"}}>
                            <p className = "block text-center text-white mt-[2rem] text-[25px] hover:opacity-100 font-teko font-bold">STATISTICS</p>
                        </li>
                        <li className = "float-left relative" style = {{left: "12.5rem"}}>
                            <p className = "block text-center text-white mt-[2rem] text-[25px] hover:opacity-100 font-teko font-bold">ABOUT US</p>
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
                {loginState === "failed" ? 
                    (<Link to = "/login">
                        <div className = "flex mt-[2rem] ml-[0.5rem]">
                            <div>
                                <Link to = "/login">
                                    <p className = "font-teko text-xl font-bold text-white relative top-[0.2rem]">Login</p>
                                </Link>
                            </div>
                            <div className = "relative left-[40%] top-[0.2rem]">
                                <Link to = "/register">
                                    <p className = "font-teko text-xl font-bold text-white">Register</p>
                                </Link>
                            </div>
                        </div>
                    </Link>) : 
                    (
                        <div>
                            <img src = {user?.avatar ? JSON.parse(user?.avatar) : DefaultAvatar} alt = "User Logo" className = "w-12 h-12 border-[yellow] mt-6 hover:cursor-pointer ml-[5rem]" style = {{borderRadius: "50%", borderWidth: "3px"}} onClick = {handleChangeUserDropdown}/>
                        </div>
                    )
                }

                {/* login dropdown */}
                <div ref = {dropdownRef}>
                    {displayUserDropdown === true && 
                        <div className = "absolute z-10 top-[7rem] right-[11rem]">
                            <UserDropdown 
                                disableLoginState = {disableLoginState} 
                                disableDropdown = {disableDropdown}
                            />
                        </div>
                    }
                </div>

                {/* change theme button */}
                {theme === darkColor ?
                    <FaSun className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[3rem]" style = {{color: "white"}} onClick = {() => {
                        setTheme(lightColor);
                        localStorage.setItem("theme", lightColor);
                    }}/> : 
                    <FaMoon className = "w-9 h-9 mt-8 hover:cursor-pointer absolute right-[3rem]" style = {{color: "white"}} onClick = {() => {
                        setTheme(darkColor);
                        localStorage.setItem("theme", darkColor);
                    }}/>
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
