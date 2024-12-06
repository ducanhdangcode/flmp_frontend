import React, { useEffect } from 'react'
import WebLogo from './logo-no-background - Copy.png';
import { FaCircle } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import './Footer.css';
import SnapDragonLogo from './snapdragon.png';
import TeamViewerLogo from './team-viewer.png';
import StandardCharteredLogo from './standard-chartered.png';
import EtihadLogo from './etihad.png';
import JeepLogo from './jeep.png';
import IliadLogo from './iliad.png';
import WebFont from 'webfontloader';

const Footer = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Titillium Web", "Ubuntu", "Changa"]
            }
        })
    })
  return (
    <div className = "w-full overflow-y-hidden overflow-x-clip relative" style = {{backgroundColor: "#041a36", height: "75rem"}}>
        <div className = "mb-0">
            <div>
                <img src = {WebLogo} alt = "Web Logo" className = "h-28 w-40 ml-40 mt-8 pt-8"/>
                <div className = "h-8 bg-neutral-500 relative" style = {{left: "22rem", width: "0.1rem", bottom: "3.5rem"}}></div>
                <p className = "text-white font-bold font-ubuntu relative md:text-2xl" style = {{left: "24rem", bottom: "5.5rem"}}>The informatic page about players, leagues, statistics, transfers all around the world.</p>
            </div>
            <div>
                <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Main Headquarter</p>
                <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No. 7, 82/208 alley, 290 cluster, Kim Ma street, Ba Dinh district, Hanoi.</p>
            </div>
            <div className = "relative" style = {{left: "41rem", bottom: "9.1rem"}}>
                <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                <IoMdMail className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Email Address</p>
                <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>nguyenducanh2925@gmail.com</p>
            </div>
            <div className = "relative float-right" style = {{right: "15rem", bottom: "18.4rem"}}>
                <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                <FaPhone className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Phone Number</p>
                <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>+84 868 682 973</p>
            </div>
            <div className = "relative bg-neutral-500 bottom-60" style = {{height: "0.01rem", width: "85rem", left: "3.5rem"}}></div>
            <div>
                <div className = "relative" style = {{bottom: "11rem", left: "7rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 2</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No.144, Xuan Thuy street, Cau Giay district, Hanoi.</p>
                </div>
                <div className = "relative" style = {{bottom: "13rem", left: "7rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 3</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>9 cluster, Nguyen Khuyen street, Dong Da district, Hanoi.</p>
                </div>
                <div className = "relative" style = {{bottom: "15rem", left: "7rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 4</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No. 14, 16 cluster, Ngoc Ha street, Ba Dinh district, Hanoi.</p>
                </div>
                <div className = "relative" style = {{bottom: "38.6rem", left: "55rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 5</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No. 62, Cao Thang street, Hai Chau district, DaNang.</p>
                </div>
                <div className = "relative" style = {{bottom: "40.6rem", left: "55rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 6</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No. 35, Yet Kieu street, Son Tra district, DaNang.</p>
                </div>
                <div className = "relative" style = {{bottom: "42.6rem", left: "55rem"}}>
                    <FaCircle className = "w-16 h-16 relative left-12 bottom-10" style = {{color: "gray"}}/>
                    <FaLocationDot className = "w-8 h-8 relative" style = {{color: "white", left: "3.95rem", bottom: "5.5rem"}}/>
                    <p className = "text-white text-xl font-semibold font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>Headquarter 6</p>
                    <p className = "text-white text-sm font-ubuntu relative" style = {{left: "8rem", bottom: "8.5rem"}}>No. 627, Truong Chinh street, Cam Le district, DaNang.</p>
                </div>
                <div className = "relative bg-neutral-500 bottom-60" style = {{height: "0.01rem", width: "85rem", left: "3.5rem", bottom: "46rem"}}></div>
                <div className = "relative" style = {{bottom: "43rem", left: "4rem"}}>
                    <img src = {SnapDragonLogo} alt = "SnapDragon Logo" className = "w-56 h-16"/>
                    <img src = {TeamViewerLogo} alt = "TeamViewer Logo" className = "w-72 h-10 relative" style = {{left: "21rem", bottom: "3.3rem"}}/>
                    <img src = {StandardCharteredLogo} alt = "Standard Chartered Logo" className = "w-72 h-28 relative" style = {{left: "44rem", bottom: "7.5rem"}}/>
                    <img src = {EtihadLogo} alt = "Etihad Logo" className = "float-right w-72 h-28 relative" style = {{right: "10rem", bottom: "14.7rem"}}/>
                    <img src = {JeepLogo} alt = "Jeep Logo" className = "w-64 h-52 relative" style = {{"left": "21rem", bottom: "7.3rem"}}/>
                    <img src = {IliadLogo} alt = "Iliad Logo" className = "w-64 h-32 relative" style = {{left: "46rem", bottom: "18.1rem"}}/>
                </div>
            </div>
            <div className = "relative text-center" style = {{bottom: "55rem", right: "2rem"}}>
                <p className = "text-xl text-white font-titillium font-bold">Developed by Duc Anh Nguyen</p>
                <p className = "text-xl text-white font-titilium"><span>&copy;</span>All right reserved 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
