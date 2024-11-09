import React, { useEffect } from 'react'

// import logo
import EPLLogo from '/FLMP/flmp_frontend/src/Image/EPL/EPLLogo.png';
import EPLPattern from '/FLMP/flmp_frontend/src/Image/EPL/EPLPattern.png';
import EPLLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/premierLeagueWhite.png';
import ManchesterCityLogo from '/FLMP/flmp_frontend/src/Image/EPL/manchesterCityLogo.png';
import ManchesterUnitedLogo from '/FLMP/flmp_frontend/src/Image/EPL/manchesterUnitedLogo.png';
import LiverpoolLogo from '/FLMP/flmp_frontend/src/Image/EPL/liverpoolLogo.png';
import ArsenalLogo from '/FLMP/flmp_frontend/src/Image/EPL/arsenalLogo.png';
import ChelseaLogo from '/FLMP/flmp_frontend/src/Image/EPL/chelseaLogo.png';
import TottenhamLogo from '/FLMP/flmp_frontend/src/Image/EPL/tottenhamLogo1.png';
import NewcastleLogo from '/FLMP/flmp_frontend/src/Image/EPL/newcastleNewLogo.png';
import AstonVillaLogo from '/FLMP/flmp_frontend/src/Image/EPL/aston.png';
import BrightonLogo from '/FLMP/flmp_frontend/src/Image/EPL/brightonLogo.png';
import BrentfordLogo from '/FLMP/flmp_frontend/src/Image/EPL/brentfordFinalLogo.png';
import CrystalPalaceLogo from '/FLMP/flmp_frontend/src/Image/EPL/crystalPalaceNewLogo.png';
import EvertonLogo from '/FLMP/flmp_frontend/src/Image/EPL/evertonLogo.png';
import FulhamLogo from '/FLMP/flmp_frontend/src/Image/EPL/fulhamNewLogo1.png';
import LeicesterCityLogo from '/FLMP/flmp_frontend/src/Image/EPL/leicesterCilyLogo.png';
import IspwichTownLogo from '/FLMP/flmp_frontend/src/Image/EPL/ispwichTownFinalLogo.png';
import SouthamptonLogo from '/FLMP/flmp_frontend/src/Image/EPL/southamptonNewLogo.png';
import WesthamLogo from '/FLMP/flmp_frontend/src/Image/EPL/westhamLogo.png';
import WolverhamptonLogo from '/FLMP/flmp_frontend/src/Image/EPL/wolverhamptonLogo.png';
import BournemouthLogo from '/FLMP/flmp_frontend/src/Image/EPL/bournemouthLogo.png';
import NottinghamForestLogo from '/FLMP/flmp_frontend/src/Image/EPL/nottinghamForestNewLogo.png';

import TotthenhamLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/tottenhamLogoWhite.png';
import LiverpoolLogoWhite from '/FLMP/flmp_frontend/src/Image/EPL/liverpoolLogoWhite.png';

// import video
import ManCityVideo1 from './Video/ManchesterCity/ManCityVideo1.mp4';
import ManCityVideo2 from './Video/ManchesterCity/ManCityVideo2.mp4';
import ManCityVideo3 from './Video/ManchesterCity/ManCityVideo3.mp4';

import ManUnitedVideo1 from './Video/ManchesterUnited/ManUnitedVideo1.mp4';
import ManUnitedVideo2 from './Video/ManchesterUnited/ManUnitedVideo2.mp4';
import ManUnitedVideo3 from './Video/ManchesterUnited/ManUnitedVideo3.mp4';

import LiverpoolVideo1 from './Video/Liverpool/LiverpoolVideo1.mp4';
import LiverpoolVideo2 from './Video/Liverpool/LiverpoolVideo2.mp4';
import LiverpoolVideo3 from './Video/Liverpool/LiverpoolVideo3.mp4';

import ArsenalVideo1 from './Video/Arsenal/arsenalNewVideo1.mp4';
import ArsenalVideo2 from './Video/Arsenal/ArsenalVideo2.mp4';
import ArsenalVideo3 from './Video/Arsenal/ArsenalVideo3.mp4';

import ChelseaVideo1 from './Video/Chelsea/ChelseaVideo1.mp4';
import ChelseaVideo2 from './Video/Chelsea/ChelseaVideo2.mp4';
import ChelseaVideo3 from './Video/Chelsea/ChelseaVideo3.mp4';

import TottenhamVideo1 from './Video/Tottenham/TottenhamVideo1.mp4';
import TottenhamVideo2 from './Video/Tottenham/TottenhamVideo2.mp4';
import TottenhamVideo3 from './Video/Tottenham/TottenhamVideo3.mp4';

import NewcastleVideo1 from './Video/Newcastle/NewcastleVideo1.mp4';
import NewcastleVideo2 from './Video/Newcastle/NewcastleVideo2.mp4';
import NewcastleVideo3 from './Video/Newcastle/NewcastleVideo3.mp4';

import AstonVillaVideo1 from './Video/AstonVilla/AstonVillaVideo1.mp4';
import AstonVillaVideo2 from './Video/AstonVilla/AstonVillaVideo2.mp4';
import AstonVillaVideo3 from './Video/AstonVilla/AstonVillaVideo3.mp4';

import BrightonVideo1 from './Video/Brighton/BrightonVideo1.mp4';
import BrightonVideo2 from './Video/Brighton/BrightonVideo2.mp4';
import BrightonVideo3 from './Video/Brighton/BrightonVideo3.mp4';

import BrentfordVideo1 from './Video/Brentford/BrentfordVideo1.mp4';
import BrentfordVideo2 from './Video/Brentford/BrentfordVideo2.mp4';
import BrentfordVideo3 from './Video/Brentford/BrentfordVideo3.mp4';

import CrystalPalaceVideo1 from './Video/CrystalPalace/CrystalPalaceVideo1.mp4';
import CrystalPalaceVideo2 from './Video/CrystalPalace/CrystalPalaceVideo2.mp4';
import CrystalPalaceVideo3 from './Video/CrystalPalace/CrystalPalaceVideo1.mp4';

import EvertonVideo1 from './Video/Everton/EvertonVideo1.mp4';
import EvertonVideo2 from './Video/Everton/EvertonVideo2.mp4';
import EvertonVideo3 from './Video/Everton/EvertonVideo3.mp4';

import FulhamVideo1 from './Video/Fulham/FulhamVideo1.mp4';
import FulhamVideo2 from './Video/Fulham/FulhamVideo2.mp4';
import FulhamVideo3 from './Video/Fulham/FulhamVideo3.mp4';

import LeicesterCityVideo1 from './Video/Leicester/LeicesterVideo1.mp4';
import LeicesterCityVideo2 from './Video/Leicester/LeicesterVideo2.mp4';
import LeicesterCityVideo3 from './Video/Leicester/LeicesterVideo3.mp4';

import IpswichVideo1 from './Video/IpswichTown/IpswichTownVideo2.mp4';
import IpswichVideo2 from './Video/IpswichTown/IpswichTownVideo1.mp4';
import IpswichVideo3 from './Video/IpswichTown/IpswichTownVideo3.mp4';

import SouthamptonVideo1 from './Video/Southampton/SouthamptonVideo1.mp4';
import SouthamptonVideo2 from './Video/Southampton/SouthamptonVideo2.mp4';
import SouthamptonVideo3 from './Video/Southampton/SouthamptonVideo3.mp4';

import WesthamVideo1 from './Video/WestHam/WesthamVideo1.mp4';
import WesthamVideo2 from './Video/WestHam/WesthamVideo2.mp4';
import WesthamVideo3 from './Video/WestHam/WesthamVideo3.mp4';

import WolverhamptonVideo2 from './Video/Wolverhampton/WolverhamptonVideo1.mp4';
import WolverhamptonVideo1 from './Video/Wolverhampton/WolverhamptonVideo2.mp4';
import WolverhamptonVideo3 from './Video/Wolverhampton/WolverhamptonVideo3.mp4';

// import kit
import ManCityKit1 from '../../../Image/Kit/ManchesterCity/manCityKit1.png';
import ManCityKit2 from '../../../Image/Kit/ManchesterCity/manCityKit2.png';
import ManCityKit3 from '../../../Image/Kit/ManchesterCity/manCityKit3.png';

import ManUnitedKit1 from '../../../Image/Kit/ManchesterUnited/MUKit1.png';
import ManUnitedKit2 from '../../../Image/Kit/ManchesterUnited/ManUnitedKit2.png';
import ManUnitedKit3 from '../../../Image/Kit/ManchesterUnited/ManUnitedKit3.png';

import LiverpoolKit1 from '../../../Image/Kit/Liverpool/LiverpoolKit1.png';
import LiverpoolKit2 from '../../../Image/Kit/Liverpool/LiverpoolKit2.png';
import LiverpoolKit3 from '../../../Image/Kit/Liverpool/LiverpoolKit3.png';

import ArsenalKit1 from '../../../Image/Kit/Arsenal/arsenalKit1.png';
import ArsenalKit2 from '../../../Image/Kit/Arsenal/arsenalKit2.png';
import ArsenalKit3 from '../../../Image/Kit/Arsenal/arsenalKit3.png';

import ChelseaKit1 from '../../../Image/Kit/Chelsea/ChelseaKit1.png';
import ChelseaKit2 from '../../../Image/Kit/Chelsea/ChelseaKit2.png';
import ChelseaKit3 from '../../../Image/Kit/Chelsea/ChelseaKit3.png';

import TottenhamKit1 from "../../../Image/Kit/Tottenham/TottenhamKit1.png";
import TottenhamKit2 from "../../../Image/Kit/Tottenham/TottenhamKit2.png";
import TottenhamKit3 from "../../../Image/Kit/Tottenham/TottenhamKit3.png";

import NewcastleKit1 from '../../../Image/Kit/Newcastle/newcastleKit1.png';
import NewcastleKit2 from '../../../Image/Kit/Newcastle/newcastleKit2Final.png';
import NewcastleKit3 from '../../../Image/Kit/Newcastle/newcastleKit3Final.png';

import AstonVillaKit1 from '../../../Image/Kit/AstonVilla/astonVillaKit1.png';
import AstonVillaKit2 from '../../../Image/Kit/AstonVilla/astonVillaKit2.png';
import AstonVillaKit3 from '../../../Image/Kit/AstonVilla/astonVillaKit3.png';

import BrightonKit1 from '../../../Image/Kit/Brighton/brightonKit1.png';
import BrightonKit2 from '../../../Image/Kit/Brighton/brightonKit2.png';
import BrightonKit3 from '../../../Image/Kit/Brighton/brightonKit3.png';

import BrentfordKit1 from '../../../Image/Kit/Brentford/brentfordKit1.png';
import BrentfordKit2 from '../../../Image/Kit/Brentford/brentfordKit2.png';
import BrentfordKit3 from '../../../Image/Kit/Brentford/brentfordKit3.png';

import CrystalPalaceKit1 from '../../../Image/Kit/CrystalPalace/crystalPalaceKit1.png';
import CrystalPalaceKit2 from '../../../Image/Kit/CrystalPalace/crystalPalaceKit2.png';
import CrystalPalaceKit3 from '../../../Image/Kit/CrystalPalace/crystalPalaceKit3.png';

import EvertonKit1 from '../../../Image/Kit/Everton/evertonKit1.png';
import EvertonKit2 from '../../../Image/Kit/Everton/evertonKit2.png';
import EvertonKit3 from '../../../Image/Kit/Everton/evertonKit3.png';

import FulhamKit1 from '../../../Image/Kit/Fulham/fulhamKit1.png';
import FulhamKit2 from '../../../Image/Kit/Fulham/fulhamKit2.png';
import FulhamKit3 from '../../../Image/Kit/Fulham/fulhamKit3.png';

import LeicesterCityKit1 from '../../../Image/Kit/Leicester/leicesterKit1Final.png';
import LeicesterCityKit2 from '../../../Image/Kit/Leicester/leicesterKit2Final.png';
import LeicesterCityKit3 from '../../../Image/Kit/Leicester/leicesterKit3Final.png';

import IpswichKit1 from '../../../Image/Kit/IpswichTown/ipswichKit1.png';
import IpswichKit2 from '../../../Image/Kit/IpswichTown/ipswichKit2.png';
import IpswichKit3 from '../../../Image/Kit/IpswichTown/ipswichKit3.png';

import SouthamptonKit1 from '../../../Image/Kit/Southampton/southamptonKit1.png';
import SouthamptonKit2 from '../../../Image/Kit/Southampton/southamptonKit2.png';
import SouthamptonKit3 from '../../../Image/Kit/Southampton/southamptonKit3.png';

import WesthamKit1 from '../../../Image/Kit/WestHam/westhamKit1.png';
import WesthamKit2 from '../../../Image/Kit/WestHam/westhamKit2.png';
import WesthamKit3 from '../../../Image/Kit/WestHam/westhamKit3.png';

import WolverhamptonKit1 from '../../../Image/Kit/Wolverhampton/wolverhamptonKit1.png';
import WolverhamptonKit2 from '../../../Image/Kit/Wolverhampton/wolverhamptonKit2.png';
import WolverhamptonKit3 from '../../../Image/Kit/Wolverhampton/wolverhamptonKit3.png';

// import chairman
import ManCityChairman from '../../../Image/Chairman/ManchesterCity/manCityChairman.png';
import ManUnitedChairman from '../../../Image/Chairman/ManchesterUnited/ManUnitedChairman.png';
import LiverpoolChairman from '../../../Image/Chairman/Liverpool/LiverpoolChairman.jpg';
import ArsenalChairman from '../../../Image/Chairman/Arsenal/arsenalChairman.jpg';
import ChelseaChairman from '../../../Image/Chairman/Chelsea/ChelseaChairman.jpg';
import TottenhamChairman from '../../../Image/Chairman/Tottenham/tottenhamChairman.jpg';
import NewcastleChairman from '../../../Image/Chairman/Newcastle/newcastleChairman.jpg';
import AstonVillaChairman from '../../../Image/Chairman/AstonVilla/astonVillaChairman.jpg';
import BrightonChairman from '../../../Image/Chairman/Brighton/brightonChairman.jpg';
import BrentfordChairman from '../../../Image/Chairman/Brighton/brightonChairman.jpg';
import CrystalPalaceChairman from '../../../Image/Chairman/CrystalPalace/crystalPalaceChairman.jpg';
import EvertonChairman from '../../../Image/Chairman/Everton/evertonChairman.jpg';
import FulhamChairman from '../../../Image/Chairman/Fulham/fulhamChairman.jpg';
import LeicesterCityChairman from '../../../Image/Chairman/Leicester/leicesterChairman.jpg';
import IpswichChairman from '../../../Image/Chairman/IpswichTown/ipswichTownChairman.jpg';
import SouthamptonChairman from '../../../Image/Chairman/Southampton/southamptonChairman.jpg';
import WesthamChairman from '../../../Image/Chairman/Westham/westhamChairman.jpg';
import WolverhamptonChairman from '../../../Image/Chairman/Wolverhampton/wolverhampronChairman.jpg';

import TeamCard from './TeamCard';

import AOS from 'aos';
import { Link } from 'react-router-dom';

const ListTeamEPL = ({colorTheme, lightColor, darkColor, setupTeamId, setupTeamLogo, setupDetailLogoHeight, setupDetailLogoWidth, setupDetailLogoTop, setupDetailLogoLeft, setupDetailNameBottom, setupTeamVideos, setupTeamVideoTitles, setupTeamKits, setupTeamChairman}) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  const ManchesterCityId = 1;
  const ManchesterUnitedId = 2;
  const LiverpoolId = 3;
  const ArsenalId = 4;
  const ChelseaId = 5;
  const TottenhamId = 6;
  const NewCastleId = 7;
  const AstonVillaId = 8;
  const BrightonId = 9;
  const BrentfordId = 10;
  const CrystalPalaceId = 11;
  const EvertonId = 12;
  const FulhamId = 13;
  const LeicesterCityId = 14;
  const IspwichTownId = 15;
  const SouthamptonId = 16;
  const WestHamId = 17;
  const WolverhamptonId = 18;
  const BournemouthId = 19;
  const NottinghamForestId = 20;

  const ManCityVideos = [
    ManCityVideo1,
    ManCityVideo2,
    ManCityVideo3,
  ];

  const ManCityVideoTitles = {
    "first": "EXTENDED HIGHLIGHTS | MAN CITY 1 - 0 SOUTHAMPTON | Early HAALAND goal earns three points!",
    "second": "Smiley Tattoo Mystery & UFC Fighter!? Ederson Finally Speaks!", 
    "third": "HIGHLIGHTS! Man City 5-0 Sparta Prague | Haaland wonder goal as super City hit five!"
  }

  const ManCityKits = [ManCityKit1, ManCityKit2, ManCityKit3];

  const ManUnitedVideos = [
    ManUnitedVideo1,
    ManUnitedVideo2, 
    ManUnitedVideo3
  ];

  const ManUnitedVideoTitles = {
    "first": "Hojlund & Garnacho Complete COMEBACK! | Man Utd 2-1 Brentford",
    "second": "Defeat In The Capital | West Ham 2-1 Man Utd",
    "third": "De Ligt x Mazraoui Meet Football Leadership, See Old Trafford + MORE!",
  };

  const ManUnitedKits = [ManUnitedKit1, ManUnitedKit2, ManUnitedKit3];

  const LiverpoolVideos = [LiverpoolVideo1, LiverpoolVideo2, LiverpoolVideo3];

  const LiverpoolVideoTitles = {
    "first": "BRILLIANT Gakpo Double & Diaz Goal! Brighton 2-3 Liverpool | Carabao Cup Highlights", 
    "second": "INSIDE: Arsenal 2-2 Liverpool | BEST view of action-packed draw", 
    "third": "Nunez Goal the Difference in Germany! | RB Leipzig 0-1 Liverpool | UEFA Champions League Highlights"
  }

  const LiverpoolKits = [LiverpoolKit1, LiverpoolKit2, LiverpoolKit3];

  const ArsenalVideos = [ArsenalVideo1, ArsenalVideo2, ArsenalVideo3];

  const ArsenalVideoTitles = {
    "first": "LIMBERING UP FOR LIVERPOOL! | INSIDE TRAINING | The Gunners prepare for Premier League clash in N5",
    "second": "NWANERI WITH A WORLDIE! | Preston vS Arsenal (0-3) | Carabao Cup | Jesus, Nwaneri, Havertz", 
    "third": "EXTENDED HIGHLIGHTS | Arsenal vs Liverpool (2-2) | Saka scores his 50th Premier League goal!"
  }

  const ArsenalKits = [ArsenalKit1, ArsenalKit2, ArsenalKit3];

  const ChelseaVideos = [ChelseaVideo1, ChelseaVideo2, ChelseaVideo3];
  
  const ChelseaVideoTitles = {
    "first": "Newcastle 2-0 Chelsea | HIGHLIGHTS - Extended | Carabao Cup 24/25", 
    "second": "Liverpool 2-1 Chelsea | HIGHLIGHTS - Extended | Premier League 2024/25",
    "third": "Chelsea 1-1 Nottingham Forest | MADUEKE levels in Forest deadlock | HIGHLIGHTS - Extended | PL 24/25",
  }

  const ChelseaKits = [ChelseaKit1, ChelseaKit2, ChelseaKit3];

  const TottenhamVideos = [TottenhamVideo1, TottenhamVideo2, TottenhamVideo3];

  const TottenhamVideoTitles = {
    "first": "Tottenham Hotspur 2-1 Man City | Carabao Cup Highlights | Werner and Sarr send Spurs into quarters", 
    "second": "Heung-Min Son and Richarlison return to Tottenham Hotspur training", 
    "third": "Crystal Palace 1-0 Tottenham Hotspur // PREMIER LEAGUE HIGHLIGHTS",
  }

  const TottenhamKits = [TottenhamKit1, TottenhamKit2, TottenhamKit3];

  const NewcastleVideos = [NewcastleVideo1, NewcastleVideo2, NewcastleVideo3];

  const NewcastleVideoTitles = {
    "first": "Newcastle United 1 Arsenal 0 | EXTENDED Premier League Highlights", 
    "second": "Newcastle United 2 Chelsea 0 | EXTENDED Carabao Cup Highlights", 
    "third": "PRESS CONFERENCE | Eddie Howe pre-Arsenal (H)"
  }

  const NewcastleKits = [NewcastleKit1, NewcastleKit2, NewcastleKit3];

  const AstonVillaVideos = [AstonVillaVideo1, AstonVillaVideo2, AstonVillaVideo3];

  const AstonVillaVideoTitles = {
    "first": "HIGHLIGHTS | Aston Villa 1-1 Bournemouth", 
    "second": "McGINN & DURAN ON TARGET | Aston Villa 2-0 Bologna", 
    "third": "JHON DURAN SCREAMER 🔥 | Aston Villa 3-2 Everton"
  }

  const AstonVillaKits = [AstonVillaKit1, AstonVillaKit2, AstonVillaKit3];

  const BrightonVideos = [BrightonVideo1, BrightonVideo2, BrightonVideo3];

  const BrightonVideoTitles = {
    "first": "HIGHLIGHTS | Liverpool v Brighton | Premier League", 
    "second": "POST-MATCH | Hurzeler And Kadioglu React To Liverpool Loss", 
    "third": "HIGHLIGHTS | Brighton v Wolves | Premier League"
  }

  const BrightonKits = [BrightonKit1, BrightonKit2, BrightonKit3];

  const BrentfordVideos = [BrentfordVideo1, BrentfordVideo2, BrentfordVideo3];

  const BrentfordVideoTitles = {
    "first": "FLEKKEN HEROICS in the Carabao Cup! | INSIDE BRENTFORD EP.5", 
    "second": "Wissa and Mbeumo on target AGAIN 🤩🤯 | Brentford 4-3 Ipswich Town | Premier League Highlights",
    "third": "Mbeumo strikes early again 🤯 | Brentford 1-1 West Ham United | Premier League Highlights" 
  }

  const BrentfordKits = [BrentfordKit1, BrentfordKit2, BrentfordKit3];

  const CrystalPalaceVideos = [CrystalPalaceVideo1, CrystalPalaceVideo2, CrystalPalaceVideo3];

  const CrystalPalaceVideoTitles = {
    "first": "DAICHI KAMADA SCORES WINNER!!! 🇯🇵🚀 | EFL Cup Match Action: Aston Villa 1-2 Crystal Palace", 
    "second": "CHALOBAH & GUÉHI SCORE 🎯🔥 | Premier League Highlights: Wolves 2-2 Crystal Palace",
    "third": "Premier League Highlights: Nottingham Forest 1-0 Crystal Palace"
  }

  const CrystalPalaceKits = [CrystalPalaceKit1, CrystalPalaceKit2, CrystalPalaceKit3];

  const EvertonVideos = [EvertonVideo1, EvertonVideo2, EvertonVideo3];

  const EvertonVideoTitles = {
    "first": "SOUTHAMPTON 1-0 EVERTON | Premier League highlights", 
    "second": "Liverpool U21s 0-2 Everton U21s | Premier League 2 highlights", 
    "third": "EVERTON 1-1 FULHAM | Premier League highlights"
  }

  const EvertonKits = [EvertonKit1, EvertonKit2, EvertonKit3];

  const FulhamVideos = [FulhamVideo1, FulhamVideo2, FulhamVideo3];

  const FulhamVideoTitles = {
    "first": "HIGHLIGHTS | Fulham 2-1 Brentford | Late Derby Day Drama 🔥", 
    "second": "HIGHLIGHTS | Everton 1-1 Fulham", 
    "third": "HIGHLIGHTS | Fulham 1-3 Aston Villa | Not Our Day At CC"
  }

  const FulhamKits = [FulhamKit1, FulhamKit2, FulhamKit3];

  const LeicesterCityVideos = [LeicesterCityVideo1, LeicesterCityVideo2, LeicesterCityVideo3];

  const LeicesterCityVideoTitles = {
    "first": "Disappointing Defeat 😑 | Leicester City 1 Nottingham Forest 3", 
    "second": "CRAZIEST COMEBACK EVER! 🤩 | Southampton 2 Leicester City 3", 
    "third": "Facundo FIRES WINNER! 🔥 | Leicester City 1 AFC Bournemouth 0"
  }

  const LeicesterCityKits = [LeicesterCityKit1, LeicesterCityKit2, LeicesterCityKit3];

  const IpswichTownVideos = [IpswichVideo1, IpswichVideo2, IpswichVideo3];

  const IpswichTownVideoTitles = {
    "first": "HIGHLIGHTS | SOUTHAMPTON 1 TOWN 1", 
    "second": "HIGHLIGHTS | TOWN 2 VILLA 2", 
    "third": "HIGHLIGHTS | TOWN 0 LIVERPOOL 2"
  }

  const IpswichTownKits = [IpswichKit1, IpswichKit2, IpswichKit3];

  const SouthamptonVideos = [SouthamptonVideo1, SouthamptonVideo2, SouthamptonVideo3];

  const SouthamptonVideoTitles = {
    "first": "HIGHLIGHTS: Manchester City 1-0 Southampton | Premier League", 
    "second": "HIGHLIGHTS: Southampton 1-0 Everton | Premier League", 
    "third": "HIGHLIGHTS: Southampton 3-2 Stoke City | Carabao Cup"
  }

  const SouthamptonKits = [SouthamptonKit1, SouthamptonKit2, SouthamptonKit3];

  const WesthamVideos = [WesthamVideo1, WesthamVideo2, WesthamVideo3];

  const WesthamVideoTitles = {
    "first": "Nottingham Forest 3-0 West Ham | Premier League Highlights", 
    "second": "West Ham 2-1 Manchester United | Late Penalty Secures The Three Points! | Premier League Highlights", 
    "third": "Tottenham Hotspur 4-1 West Ham | Premier League Highlights"
  }

  const WesthamKits = [WesthamKit1, WesthamKit2, WesthamKit3];

  const WolverhamptonVideos = [WolverhamptonVideo1, WolverhamptonVideo2, WolverhamptonVideo3];

  const WolverhamptonVideoTitles = {
    "first": "Points shared with Palace | Wolves 2-2 Crystal Palace | Highlights", 
    "second": "Cunha seals comeback in stoppage time! | Brighton & Hove Albion 2-2 Wolves | Highlights", 
    "third": "A bad defeat | Brentford 5-3 Wolves | Highlights"
  }

  const WolverhamptonKits = [WolverhamptonKit1, WolverhamptonKit2, WolverhamptonKit3];

  const handleClick = (id, logo, height, width, top, left, nameBottom, videos, titles, kits, chairman) => {
    setupTeamLogo(logo);
    setupTeamId(id);
    setupDetailLogoHeight(height);
    setupDetailLogoWidth(width);
    setupDetailLogoTop(top);
    setupDetailLogoLeft(left);
    setupDetailNameBottom(nameBottom);
    setupTeamVideos(videos);
    setupTeamVideoTitles(titles);
    setupTeamKits(kits);
    setupTeamChairman(chairman);
  }

  return (
    <div>
      <div className = "relative top-48" style = {{backgroundColor: colorTheme === lightColor ? "#c8ccc0" : "", height: "60rem"}} data-aos = "zoom-out-up">
          <img src = {colorTheme === lightColor ? EPLLogo : EPLLogoWhite} alt = "Premier League Logo" className = {colorTheme === lightColor ? "w-72 h-32 relative" : "w-96 h-64 relative"} style = {{left: "4rem", top: "2rem"}}/>
          <div className = {colorTheme === lightColor ? "relative top-16 flex" : "relative top-0 flex"} style = {{flexFlow: "row wrap"}}>
            <Link to = "/team/manchester-city">
              <TeamCard TeamLogo = {ManchesterCityLogo} TeamName = {"Manchester City"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#05c1f0"} hoverImage={EPLPattern} hoverTeamLogo = {ManchesterCityLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterCityId, ManchesterCityLogo, 14, 22, 3, 2, 2.5, ManCityVideos, ManCityVideoTitles, ManCityKits, ManCityChairman)}/>
            </Link>

            <Link to = "/team/manchester-united">
              <TeamCard TeamLogo = {ManchesterUnitedLogo} TeamName = {"Manchester United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo = {ManchesterUnitedLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterUnitedId, ManchesterUnitedLogo, 14, 22, 3, 2, 2.5, ManUnitedVideos, ManUnitedVideoTitles, ManUnitedKits, ManUnitedChairman)}/>
            </Link>

            <Link to = "/team/liverpool">
              <TeamCard TeamLogo = {LiverpoolLogo} TeamName = {"Liverpool"} addStyle={{top: "0.5rem", right: "0.8rem", height: "5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={LiverpoolLogoWhite} hoverStyle = {{bottom: "0.5rem", right: "1rem", height: "7rem", width: "8.5rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(LiverpoolId, LiverpoolLogo, 14, 22, 3, 2, 2.5, LiverpoolVideos, LiverpoolVideoTitles, LiverpoolKits, LiverpoolChairman)}/>
            </Link>

            <Link to = "/team/arsenal">
              <TeamCard TeamLogo = {ArsenalLogo} TeamName = {"Arsenal"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={ArsenalLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ArsenalId, ArsenalLogo, 14, 22, 3, 2, 2.5, ArsenalVideos, ArsenalVideoTitles, ArsenalKits, ArsenalChairman)}/>
            </Link>

            <Link to = "/team/chelsea">
              <TeamCard TeamLogo = {ChelseaLogo} TeamName = {"Chelsea"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#0026ff"} hoverImage = {EPLPattern} hoverTeamLogo={ChelseaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ChelseaId, ChelseaLogo, 14, 22, 3, 2, 2.5, ChelseaVideos, ChelseaVideoTitles, ChelseaKits, ChelseaChairman)}/>
            </Link>

            <Link to = "/team/tottenham-hotspur">
              <TeamCard TeamLogo = {TottenhamLogo} TeamName = {"Tottenham"} addStyle={{top: "1rem", left: "0.5rem", height: "4.2rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#07155c"} hoverImage = {EPLPattern} hoverTeamLogo={TotthenhamLogoWhite} hoverStyle={{top: "0rem", right: "0.5rem", height: "6rem", width: "7rem"}} hoverStyleText={{right: "0.3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(TottenhamId, TottenhamLogo, 14, 18, 3, 4, 2.5, TottenhamVideos, TottenhamVideoTitles, TottenhamKits, TottenhamChairman)}/>
            </Link>

            <Link to = "/team/newcastle-united">
              <TeamCard TeamLogo = {NewcastleLogo} TeamName = {"Newcastle"} addStyle={{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#41434d"} hoverImage = {EPLPattern} hoverTeamLogo={NewcastleLogo} hoverStyle = {{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} hoverStyleText={{left: "1.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(NewCastleId, NewcastleLogo, 14, 14, 3, 6, 2.5, NewcastleVideos, NewcastleVideoTitles, NewcastleKits, NewcastleChairman)}/>
            </Link>

            <Link to = "/team/aston-villa">
              <TeamCard TeamLogo = {AstonVillaLogo} TeamName = {"Aston Villa"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#9e184d"} hoverImage = {EPLPattern} hoverTeamLogo={AstonVillaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(AstonVillaId, AstonVillaLogo, 14, 22, 3, 2, 2.5, AstonVillaVideos, AstonVillaVideoTitles, AstonVillaKits, AstonVillaChairman)}/>
            </Link>

            <Link to = "/team/brighton">
              <TeamCard TeamLogo = {BrightonLogo} TeamName = {"Brighton & Hove Albion"} addStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} addStyleText = {{right: "2.5rem", top: "0.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={BrightonLogo} hoverStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} hoverStyleText={{right: "2.5rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(BrightonId, BrightonLogo, 14, 22, 3, 2, 2.5, BrightonVideos, BrightonVideoTitles, BrightonKits, BrightonChairman)}/>
            </Link>

            <Link to = "/team/brentford">
              <TeamCard TeamLogo = {BrentfordLogo} TeamName = {"Brentford"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={BrentfordLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BrentfordId, BrentfordLogo, 14, 14, 3, 6, 2.5, BrentfordVideos, BrentfordVideoTitles, BrentfordKits, BrentfordChairman)}/>
            </Link>

            <Link to = "/team/crystal-palace">
              <TeamCard TeamLogo = {CrystalPalaceLogo} TeamName = "Crystal Palace" addStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={CrystalPalaceLogo} hoverStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(CrystalPalaceId, CrystalPalaceLogo, 14, 14, 3, 6, 2.5, CrystalPalaceVideos, CrystalPalaceVideoTitles, CrystalPalaceKits, CrystalPalaceChairman)}/>
            </Link>

            <Link to = "/team/everton">
              <TeamCard TeamLogo = {EvertonLogo} TeamName = {"Everton"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={EvertonLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => {
                handleClick(EvertonId, EvertonLogo, 14, 23, 3, 2, 2.5, EvertonVideos, EvertonVideoTitles, EvertonKits, EvertonChairman)
              }}/>
            </Link>

            <Link to = "/team/fulham">
              <TeamCard TeamLogo = {FulhamLogo} TeamName = {"Fulham"} addStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#686a6e"} hoverImage={EPLPattern} hoverTeamLogo={FulhamLogo} hoverStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}} handleClick={() => handleClick(FulhamId, FulhamLogo, 14, 16, 3, 5, 2.5, FulhamVideos, FulhamVideoTitles, FulhamKits, FulhamChairman)}/>
            </Link>

            <Link to = "/team/leicester-city">
              <TeamCard TeamLogo = {LeicesterCityLogo} TeamName = {"Leicester City"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={LeicesterCityLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(LeicesterCityId, LeicesterCityLogo, 14, 14, 3, 6, 2.5, LeicesterCityVideos, LeicesterCityVideoTitles, LeicesterCityKits, LeicesterCityChairman)}/>
            </Link>

            <Link to = "/team/ispwich-town">
              <TeamCard TeamLogo = {IspwichTownLogo} TeamName = {"Ispwich Town"} addStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={IspwichTownLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(IspwichTownId, IspwichTownLogo, 14, 14, 3, 6, 2.5, IpswichTownVideos, IpswichTownVideoTitles, IpswichTownKits, IpswichChairman)}/>
            </Link>

            <Link to = "/team/southampton">
              <TeamCard TeamLogo = {SouthamptonLogo} TeamName = {"Southampton"} addStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} addStyleText = {{right: "3rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={SouthamptonLogo} hoverStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} hoverStyleText={{right: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(SouthamptonId, SouthamptonLogo, 14, 22, 3, 2, 2.5, SouthamptonVideos, SouthamptonVideoTitles, SouthamptonKits, SouthamptonChairman)}/>
            </Link>

            <Link to = "/team/west-ham">
              <TeamCard TeamLogo = {WesthamLogo} TeamName = {"West Ham United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9e184d"} hoverImage={EPLPattern} hoverTeamLogo={WesthamLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(WestHamId, WesthamLogo, 14, 23, 3, 2, 2.5, WesthamVideos, WesthamVideoTitles, WesthamKits, WesthamChairman)}/>
            </Link>

            <Link to = "/team/wolverhampton-wanderers">
              <TeamCard TeamLogo = {WolverhamptonLogo} TeamName = {"Wolverhampton Wanderers"} addStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "1.8rem", top: "0.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e67f09"} hoverImage={EPLPattern} hoverTeamLogo={WolverhamptonLogo} hoverStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "1.8rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(WolverhamptonId, WolverhamptonLogo, 14, 14, 3, 6, 2.5, WolverhamptonVideos, WolverhamptonVideoTitles, WolverhamptonKits, WolverhamptonChairman)}/>
            </Link>

            <Link to = "/team/bournemouth">
              <TeamCard TeamLogo = {BournemouthLogo} TeamName = {"Bournemouth"} addStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9c1017"} hoverImage={EPLPattern} hoverTeamLogo={BournemouthLogo} hoverStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BournemouthId, BournemouthLogo, 14, 14, 3, 6, 2.5)}/>
            </Link>

            <Link to = "/team/nottingham-forest">
              <TeamCard TeamLogo = {NottinghamForestLogo} TeamName = {"Nottingham Forest"} addStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} addStyleText = {{right: "2.2rem", top: "0.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={NottinghamForestLogo} hoverStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} hoverStyleText={{right: "2.2rem", top: "0.9rem", color: "white"}} handleClick={() => handleClick(NottinghamForestId, NottinghamForestLogo, 14, 22, 3, 2, 2.5)}/>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default ListTeamEPL
