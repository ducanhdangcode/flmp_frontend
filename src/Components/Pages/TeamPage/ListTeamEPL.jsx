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

import BournemouthKit1 from '../../../Image/Kit/Bournemouth/bournemouthKit1.png';
import BournemouthKit2 from '../../../Image/Kit/Bournemouth/bournemouthKit2.png';
import BournemouthKit3 from '../../../Image/Kit/Bournemouth/bournemouthKit3.png';

import NottinghamKit1 from '../../../Image/Kit/NottinghamForest/nottinghamKit1.png';
import NottinghamKit2 from '../../../Image/Kit/NottinghamForest/nottinghamKit2.png';
import NottinghamKit3 from '../../../Image/Kit/NottinghamForest/nottinghamKit3.png';

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
import BournemouthChairman from '../../../Image/Chairman/Bournemouth/bournemouthChairman.jpg';
import NottinghamChairman from '../../../Image/Chairman/NottinghamForest/nottinghamChairman.jpg';

import TeamCard from './TeamCard';

import AOS from 'aos';
import { Link } from 'react-router-dom';

const ListTeamEPL = ({colorTheme, lightColor, darkColor, setupTeamId, setupTeamLogo, setupDetailLogoHeight, setupDetailLogoWidth, setupDetailLogoTop, setupDetailLogoLeft, setupDetailNameBottom, setupTeamVideoTitles, setupTeamKits, setupTeamChairman}) => {
  
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

  const ManCityVideoTitles = {
    "first": "HIGHLIGHTS | BRIGHTON 2-1 CITY | Haaland, Pedro & O’Riley Goals | Premier League",
    "second": "Smiley Tattoo Mystery & UFC Fighter!? Ederson Finally Speaks!", 
    "third": "HIGHLIGHTS! Man City 5-0 Sparta Prague | Haaland wonder goal as super City hit five!"
  }

  const ManCityKits = [ManCityKit1, ManCityKit2, ManCityKit3];

  const ManUnitedVideoTitles = {
    "first": "WHAT A PERFORMANCE! 🤩 | Southampton 0-3 United",
    "second": "Leny Yoro Returns To Team Training! 👊",
    "third": "De Ligt x Mazraoui Meet Football Leadership, See Old Trafford + MORE!",
  };

  const ManUnitedKits = [ManUnitedKit1, ManUnitedKit2, ManUnitedKit3];

  const LiverpoolVideoTitles = {
    "first": "Luis Diaz HAT-TRICK! Liverpool 4-0 Bayer Leverkusen | Champions League Highlights", 
    "second": "INSIDE: Arsenal 2-2 Liverpool | BEST view of action-packed draw", 
    "third": "Nunez Goal the Difference in Germany! | RB Leipzig 0-1 Liverpool | UEFA Champions League Highlights"
  }

  const LiverpoolKits = [LiverpoolKit1, LiverpoolKit2, LiverpoolKit3];

  const ArsenalVideoTitles = {
    "first": "NWANERI WITH A WORLDIE! | Preston vs Arsenal (0-3) | Carabao Cup | Jesus, Nwaneri, Havertz",
    "second": "HIGHLIGHTS | Inter Milan vs Arsenal (1-0) | Champions League", 
    "third": "INSIDE TRAINING | Preparing for Preston North End in the Carabao Cup"
  }

  const ArsenalKits = [ArsenalKit1, ArsenalKit2, ArsenalKit3];
  
  const ChelseaVideoTitles = {
    "first": "Newcastle 2-0 Chelsea | HIGHLIGHTS - Extended | Carabao Cup 24/25", 
    "second": "Chelsea 8-0 FC Noah | BLUES crush Noah! | HIGHLIGHTS | UEFA Europa Conference League 24/25",
    "third": "Newcastle 2-0 Chelsea | HIGHLIGHTS - Extended | Carabao Cup 24/25",
  }

  const ChelseaKits = [ChelseaKit1, ChelseaKit2, ChelseaKit3];

  const TottenhamVideoTitles = {
    "first": "Tottenham Hotspur 2-1 Man City | Carabao Cup Highlights | Werner and Sarr send Spurs into quarters", 
    "second": "Galatasaray 3-2 Tottenham Hotspur | Europa League Highlights", 
    "third": "Tottenham Hotspur 4-1 Aston Villa | Extended Premier League Highlights",
  }

  const TottenhamKits = [TottenhamKit1, TottenhamKit2, TottenhamKit3];

  const NewcastleVideoTitles = {
    "first": "Newcastle United 2 Chelsea 0 | EXTENDED Carabao Cup Highlights", 
    "second": "Eddie Howes Newcastle United | The Story So Far", 
    "third": "EVERY ANGLE Alexander Isak's Winner Against Arsenal"
  }

  const NewcastleKits = [NewcastleKit1, NewcastleKit2, NewcastleKit3];

  const AstonVillaVideoTitles = {
    "first": "BITESIZE HIGHLIGHTS | Club Brugge v Aston Villa", 
    "second": "POST MATCH | Unai Emery on defeat to Liverpool", 
    "third": "The best in the world for a reason 💫 | Emi Martínez"
  }

  const AstonVillaKits = [AstonVillaKit1, AstonVillaKit2, AstonVillaKit3];

  const BrightonVideoTitles = {
    "first": "POST-MATCH | Hurzeler, Pedro & O'Riley | Brighton v Man City", 
    "second": "EXTENDED HIGHLIGHTS | Liverpool v Brighton | Premier League", 
    "third": "Arsenal Post-Match | Vidosic And Losada React To Defeat On The Road"
  }

  const BrightonKits = [BrightonKit1, BrightonKit2, BrightonKit3];

  const BrentfordVideoTitles = {
    "first": "YOANE WISSA AT THE DOUBLE 🇨🇩💪 | Brentford 3-2 AFC Bournemouth | Premier League Highlights", 
    "second": "Janelt scores in derby defeat | Fulham 2-1 Brentford | Premier League Highlights",
    "third": "CRAZY late scenes against Ipswich 🤯 Featuring Wissa, Mbeumo + Thomas Frank 🗯 INSIDE BRENTFORD EP.4" 
  }

  const BrentfordKits = [BrentfordKit1, BrentfordKit2, BrentfordKit3];

  const CrystalPalaceVideoTitles = {
    "first": "MATCH HIGHLIGHTS | Crystal Palace 0-2 Fulham | Premier League", 
    "second": "IT'S A DISGRACE! | Maxence Lacroix wins October Player of The Month",
    "third": "Selhurst Park - the OLDEST PROFESSIONAL LEAGUE CLUB stadium on 16mm film | This is our church"
  }

  const CrystalPalaceKits = [CrystalPalaceKit1, CrystalPalaceKit2, CrystalPalaceKit3];

  const EvertonVideoTitles = {
    "first": "WEST HAM V EVERTON | Sean Dyche's press conference | GW11", 
    "second": "EXTENDED HIGHLIGHTS: IPSWICH TOWN 0-2 EVERTON", 
    "third": "LANDMARK MOMENT AS GRASS GROWS 🌱 | Update from Everton Stadium"
  }

  const EvertonKits = [EvertonKit1, EvertonKit2, EvertonKit3];

  const FulhamVideoTitles = {
    "first": "EXTENDED HIGHLIGHTS | Crystal Palace 0-2 Fulham | Back-To-Back 😄", 
    "second": "EXTENDED HIGHLIGHTS | Fulham 2-1 Brentford | Wilson Magic Seals Win 🏴󠁧󠁢󠁷󠁬󠁳󠁿", 
    "third": "ALL ANGLES | Harry Wilson Heroics Against Brentford"
  }

  const FulhamKits = [FulhamKit1, FulhamKit2, FulhamKit3];

  const LeicesterCityVideoTitles = {
    "first": "Old Trafford Assessment 🔜 | Steve Cooper Speaks Pre- Man Utd", 
    "second": "Crazy Moment! 😃 | Jordan Ayew After Scoring Late At Ipswich Town", 
    "third": "Ricardo Pereira & Odsonne Édouard At The African Caribbean Centre! 🤩 | Love Our Community"
  }

  const LeicesterCityKits = [LeicesterCityKit1, LeicesterCityKit2, LeicesterCityKit3];

  const IpswichTownVideoTitles = {
    "first": "HIGHLIGHTS | TOWN 0 EVERTON 2", 
    "second": "MARK ASHTON AND KIERAN McKENNA INTERVIEW", 
    "third": "HIGHLIGHTS | TOWN 2 VILLA 2"
  }

  const IpswichTownKits = [IpswichKit1, IpswichKit2, IpswichKit3];

  const SouthamptonVideoTitles = {
    "first": "PRESS CONFERENCE: Martin on Wolves trip | Premier League", 
    "second": "HIGHLIGHTS: Southampton 3-2 Stoke City | Carabao Cup", 
    "third": "EXTENDED HIGHLIGHTS: Southampton 2-3 Leicester City | Premier League"
  }

  const SouthamptonKits = [SouthamptonKit1, SouthamptonKit2, SouthamptonKit3];

  const WesthamVideoTitles = {
    "first": "West Ham 0-0 Everton | Premier League Highlights", 
    "second": "It Was A Tough Game | West Ham 0-0 Everton | Emerson Palmieri | Post Match Reaction", 
    "third": "Extended Highlights | Nottingham Forest 3-0 West Ham | Premier League"
  }

  const WesthamKits = [WesthamKit1, WesthamKit2, WesthamKit3];

  const WolverhamptonVideoTitles = {
    "first": "Hwang back in training, Semedo wins Player of the Month and Foundation gala dinner", 
    "second": "Pedro Neto stunner, Raul Jimenez comeback goal and Joao Gomes debut strike against Southampton!", 
    "third": "Podence, Ait-Nouri and Adama! | Wolves top goals against Crystal Palace"
  }

  const WolverhamptonKits = [WolverhamptonKit1, WolverhamptonKit2, WolverhamptonKit3];

  const BournemouthVideoTitles = {
    "first": "Kluivert scores another set piece goal in defeat | Brentford 3-2 AFC Bournemouth", 
    "second": "Cherries END Man City's 32-game unbeaten run | AFC Bournemouth 2-1 Manchester City", 
    "third": "Press conference: Andoni on chances against Man City, Travers form and injury news on Ouattara"
  }

  const BournemouthKits = [BournemouthKit1, BournemouthKit2, BournemouthKit3];

  const NottinghamForestTitles = {
    "first": "Forest 1-3 Newcastle United | Premier League Highlights", 
    "second": "Nuno Espírito Santo Press Conference 🎙️ | Forest vs Newcastle United | Premier League", 
    "third": "Up to THIRD! 🔥 | Forest 3-0 West Ham | Extended Highlights | Premier League"
  }

  const NottinghamKits = [NottinghamKit1, NottinghamKit2, NottinghamKit3];

  const handleClick = (id, logo, height, width, top, left, nameBottom, titles, kits, chairman) => {
    setupTeamLogo(logo);
    setupTeamId(id);
    setupDetailLogoHeight(height);
    setupDetailLogoWidth(width);
    setupDetailLogoTop(top);
    setupDetailLogoLeft(left);
    setupDetailNameBottom(nameBottom);
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
              <TeamCard TeamLogo = {ManchesterCityLogo} TeamName = {"Manchester City"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#05c1f0"} hoverImage={EPLPattern} hoverTeamLogo = {ManchesterCityLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterCityId, ManchesterCityLogo, 14, 22, 3, 2, 2.5, ManCityVideoTitles, ManCityKits, ManCityChairman)}/>
            </Link>

            <Link to = "/team/manchester-united">
              <TeamCard TeamLogo = {ManchesterUnitedLogo} TeamName = {"Manchester United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo = {ManchesterUnitedLogo} hoverStyle = {{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ManchesterUnitedId, ManchesterUnitedLogo, 14, 22, 3, 2, 2.5, ManUnitedVideoTitles, ManUnitedKits, ManUnitedChairman)}/>
            </Link>

            <Link to = "/team/liverpool">
              <TeamCard TeamLogo = {LiverpoolLogo} TeamName = {"Liverpool"} addStyle={{top: "0.5rem", right: "0.8rem", height: "5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={LiverpoolLogoWhite} hoverStyle = {{bottom: "0.5rem", right: "1rem", height: "7rem", width: "8.5rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(LiverpoolId, LiverpoolLogo, 14, 22, 3, 2, 2.5, LiverpoolVideoTitles, LiverpoolKits, LiverpoolChairman)}/>
            </Link>

            <Link to = "/team/arsenal">
              <TeamCard TeamLogo = {ArsenalLogo} TeamName = {"Arsenal"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage = {EPLPattern} hoverTeamLogo={ArsenalLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ArsenalId, ArsenalLogo, 14, 22, 3, 2, 2.5, ArsenalVideoTitles, ArsenalKits, ArsenalChairman)}/>
            </Link>

            <Link to = "/team/chelsea">
              <TeamCard TeamLogo = {ChelseaLogo} TeamName = {"Chelsea"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#0026ff"} hoverImage = {EPLPattern} hoverTeamLogo={ChelseaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(ChelseaId, ChelseaLogo, 14, 22, 3, 2, 2.5, ChelseaVideoTitles, ChelseaKits, ChelseaChairman)}/>
            </Link>

            <Link to = "/team/tottenham-hotspur">
              <TeamCard TeamLogo = {TottenhamLogo} TeamName = {"Tottenham"} addStyle={{top: "1rem", left: "0.5rem", height: "4.2rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#07155c"} hoverImage = {EPLPattern} hoverTeamLogo={TotthenhamLogoWhite} hoverStyle={{top: "0rem", right: "0.5rem", height: "6rem", width: "7rem"}} hoverStyleText={{right: "0.3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(TottenhamId, TottenhamLogo, 14, 18, 3, 4, 2.5, TottenhamVideoTitles, TottenhamKits, TottenhamChairman)}/>
            </Link>

            <Link to = "/team/newcastle-united">
              <TeamCard TeamLogo = {NewcastleLogo} TeamName = {"Newcastle"} addStyle={{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} addStyleText = {{left: "1.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#41434d"} hoverImage = {EPLPattern} hoverTeamLogo={NewcastleLogo} hoverStyle = {{top: "0.8rem", left: "0.5rem", height: "4.5rem", width: "5rem"}} hoverStyleText={{left: "1.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(NewCastleId, NewcastleLogo, 14, 14, 3, 6, 2.5, NewcastleVideoTitles, NewcastleKits, NewcastleChairman)}/>
            </Link>

            <Link to = "/team/aston-villa">
              <TeamCard TeamLogo = {AstonVillaLogo} TeamName = {"Aston Villa"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#9e184d"} hoverImage = {EPLPattern} hoverTeamLogo={AstonVillaLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(AstonVillaId, AstonVillaLogo, 14, 22, 3, 2, 2.5, AstonVillaVideoTitles, AstonVillaKits, AstonVillaChairman)}/>
            </Link>

            <Link to = "/team/brighton">
              <TeamCard TeamLogo = {BrightonLogo} TeamName = {"Brighton & Hove Albion"} addStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} addStyleText = {{right: "2.5rem", top: "0.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={BrightonLogo} hoverStyle={{top: "0rem", right: "1.5rem", height: "6rem", width: "9rem"}} hoverStyleText={{right: "2.5rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(BrightonId, BrightonLogo, 14, 22, 3, 2, 2.5, BrightonVideoTitles, BrightonKits, BrightonChairman)}/>
            </Link>

            <Link to = "/team/brentford">
              <TeamCard TeamLogo = {BrentfordLogo} TeamName = {"Brentford"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={BrentfordLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BrentfordId, BrentfordLogo, 14, 14, 3, 6, 2.5, BrentfordVideoTitles, BrentfordKits, BrentfordChairman)}/>
            </Link>

            <Link to = "/team/crystal-palace">
              <TeamCard TeamLogo = {CrystalPalaceLogo} TeamName = "Crystal Palace" addStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={CrystalPalaceLogo} hoverStyle={{top: "0.9rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(CrystalPalaceId, CrystalPalaceLogo, 14, 14, 3, 6, 2.5, CrystalPalaceVideoTitles, CrystalPalaceKits, CrystalPalaceChairman)}/>
            </Link>

            <Link to = "/team/everton">
              <TeamCard TeamLogo = {EvertonLogo} TeamName = {"Everton"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={EvertonLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => {
                handleClick(EvertonId, EvertonLogo, 14, 23, 3, 2, 2.5, EvertonVideoTitles, EvertonKits, EvertonChairman)
              }}/>
            </Link>

            <Link to = "/team/fulham">
              <TeamCard TeamLogo = {FulhamLogo} TeamName = {"Fulham"} addStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "2rem", top: "2rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor = {"#686a6e"} hoverImage={EPLPattern} hoverTeamLogo={FulhamLogo} hoverStyle={{top: "1.2rem", left: "0.8rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "2rem", top: "2rem", color: "white"}} handleClick={() => handleClick(FulhamId, FulhamLogo, 14, 16, 3, 5, 2.5, FulhamVideoTitles, FulhamKits, FulhamChairman)}/>
            </Link>

            <Link to = "/team/leicester-city">
              <TeamCard TeamLogo = {LeicesterCityLogo} TeamName = {"Leicester City"} addStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} addStyleText = {{left: "2.5rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#4478c7"} hoverImage={EPLPattern} hoverTeamLogo={LeicesterCityLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4rem", width: "4rem"}} hoverStyleText={{left: "2.5rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(LeicesterCityId, LeicesterCityLogo, 14, 14, 3, 6, 2.5, LeicesterCityVideoTitles, LeicesterCityKits, LeicesterCityChairman)}/>
            </Link>

            <Link to = "/team/ispwich-town">
              <TeamCard TeamLogo = {IspwichTownLogo} TeamName = {"Ispwich Town"} addStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} addStyleText = {{left: "2.2rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#0026ff"} hoverImage={EPLPattern} hoverTeamLogo={IspwichTownLogo} hoverStyle={{top: "1rem", left: "1rem", height: "4.5rem", width: "4rem"}} hoverStyleText={{left: "2.2rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(IspwichTownId, IspwichTownLogo, 14, 14, 3, 6, 2.5, IpswichTownVideoTitles, IpswichTownKits, IpswichChairman)}/>
            </Link>

            <Link to = "/team/southampton">
              <TeamCard TeamLogo = {SouthamptonLogo} TeamName = {"Southampton"} addStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} addStyleText = {{right: "3rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={SouthamptonLogo} hoverStyle={{top: "0.8rem", right: "1.6rem", height: "4.3rem", width: "9.5rem"}} hoverStyleText={{right: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(SouthamptonId, SouthamptonLogo, 14, 22, 3, 2, 2.5, SouthamptonVideoTitles, SouthamptonKits, SouthamptonChairman)}/>
            </Link>

            <Link to = "/team/west-ham">
              <TeamCard TeamLogo = {WesthamLogo} TeamName = {"West Ham United"} addStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} addStyleText = {{right: "1.5rem", top: "1.7rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9e184d"} hoverImage={EPLPattern} hoverTeamLogo={WesthamLogo} hoverStyle={{top: "0.8rem", right: "1rem", height: "4.5rem", width: "8rem"}} hoverStyleText={{right: "1.5rem", top: "1.7rem", color: "white"}} handleClick={() => handleClick(WestHamId, WesthamLogo, 14, 23, 3, 2, 2.5, WesthamVideoTitles, WesthamKits, WesthamChairman)}/>
            </Link>

            <Link to = "/team/wolverhampton-wanderers">
              <TeamCard TeamLogo = {WolverhamptonLogo} TeamName = {"Wolverhampton Wanderers"} addStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} addStyleText = {{left: "1.8rem", top: "0.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#e67f09"} hoverImage={EPLPattern} hoverTeamLogo={WolverhamptonLogo} hoverStyle={{top: "1rem", left: "0.7rem", height: "4rem", width: "4.5rem"}} hoverStyleText={{left: "1.8rem", top: "0.8rem", color: "white"}} handleClick={() => handleClick(WolverhamptonId, WolverhamptonLogo, 14, 14, 3, 6, 2.5, WolverhamptonVideoTitles, WolverhamptonKits, WolverhamptonChairman)}/>
            </Link>

            <Link to = "/team/bournemouth">
              <TeamCard TeamLogo = {BournemouthLogo} TeamName = {"Bournemouth"} addStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} addStyleText = {{left: "3rem", top: "1.8rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#9c1017"} hoverImage={EPLPattern} hoverTeamLogo={BournemouthLogo} hoverStyle={{top: "1.2rem", left: "1.5rem", height: "4rem", width: "3.5rem"}} hoverStyleText={{left: "3rem", top: "1.8rem", color: "white"}} handleClick={() => handleClick(BournemouthId, BournemouthLogo, 14, 14, 3, 6, 2.5, BournemouthVideoTitles, BournemouthKits, BournemouthChairman)}/>
            </Link>

            <Link to = "/team/nottingham-forest">
              <TeamCard TeamLogo = {NottinghamForestLogo} TeamName = {"Nottingham Forest"} addStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} addStyleText = {{right: "2.2rem", top: "0.9rem"}} colorTheme = {colorTheme} lightColor = {lightColor} darkColor = {darkColor} hoverColor={"#f23f48"} hoverImage={EPLPattern} hoverTeamLogo={NottinghamForestLogo} hoverStyle={{top: "0.6rem", right: "1rem", height: "4.5rem", width: "9rem"}} hoverStyleText={{right: "2.2rem", top: "0.9rem", color: "white"}} handleClick={() => handleClick(NottinghamForestId, NottinghamForestLogo, 14, 22, 3, 2, 2.5, NottinghamForestTitles, NottinghamKits, NottinghamChairman)}/>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default ListTeamEPL
