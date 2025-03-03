import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import { usePlayerContext } from '../../../Context/PlayerContext';
import { getPlayerByName, getPlayerContractByTeamName, getStatBySeason } from '../../../APIService/PlayerService';
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getTeamById } from '../../../APIService/TeamService';
import PlayerProfileHeader from './PlayerProfileHeader/PlayerProfileHeader';
import PlayerProfileStat from './PlayerProfileStat/PlayerProfileStat';

const PlayerProfile = () => {
  const {playerName} = usePlayerContext();
  const [player, setPlayer] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);

  const {storedTeamLogo, detailLogoWidth, detailLogoHeight, teamId} = useTeamHeaderContext();

  const [viewOption, setViewOption] = useState("stat");

  const [selectedSeason, setSelectedSeason] = useState("24-25");
  const [seasonStat, setSeasonStat] = useState([]);

  const [dataError, setDataError] = useState("");

  useEffect(() => {
    getPlayerByName(playerName).then((response) => {
      setPlayer(response.data);
    }).catch(err => console.error(err));

    getTeamById(teamId).then((response) => {
      setCurrentTeam(response.data);

      getPlayerContractByTeamName(playerName, response.data.name).then((curResponse) => {
        setCurrentContract(curResponse.data);
      }).catch(curErr => console.error(curErr));

    }).catch(err => console.error(err));
  }, []);

  useEffect(() => {
    getStatBySeason(playerName, selectedSeason).then((response) => {
        setSeasonStat(response.data);
        console.log("stat season: ", response.data);
    }).catch(err => console.error(err));
  }, [])

  const setupSelectedSeason = (season) => {
    setSelectedSeason(season);
  }

  const changeStatBySeason = () => {
      setDataError("");
      getStatBySeason(playerName, selectedSeason).then((response) => {
          setSeasonStat(response.data);
          console.log("stat season: ", response.data);
      }).catch(err => {
        setDataError("No data found!")
      });
  }
  return (
    <div className = "mt-[6rem]">
      {/* breadcrumb */}
      <div className = "relative left-[2rem] top-[1rem]">
        <Breadcrumb 
          pageName={"Player Profile"}
        />
      </div>

      {/* header */}
      <PlayerProfileHeader 
        player = {player}
        storedTeamLogo = {storedTeamLogo}
        detailLogoWidth = {detailLogoWidth}
        detailLogoHeight = {detailLogoHeight}
        currentContract = {currentContract}
        currentTeam = {currentTeam}
      />

      {/* options */}
      <div className = "flex relative left-[2rem] mt-[2rem] font-roboto font-bold text-lg text-white hover:cursor-pointer">
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "stat" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("stat")}>
          <p className = "relative top-[0.2rem]">STATS</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "marketValue" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("marketValue")}>
          <p className = "relative top-[0.2rem]">MARKET VALUE</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "transfers" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("transfers")}>
          <p className = "relative top-[0.2rem]">TRANSFERS</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "rumours" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("rumours")}>
          <p className = "relative top-[0.2rem]">RUMOURS</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "nationalTeam" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("nationalTeam")}>
          <p className = "relative top-[0.2rem]">NATIONAL TEAM</p>
        </div>
        <div className = "h-[2rem] px-[5.5%] hover:bg-[#3d3b6e]" style = {{backgroundColor: viewOption === "news" ? "#3d3b6e" : "#060433"}} onClick = {() => setViewOption("news")}>
          <p className = "relative top-[0.2rem]">NEWS</p>
        </div>
      </div>

      {/* stats */}
      <div className = "relative left-[2rem] mt-[0.5rem]">
        <PlayerProfileStat 
          player = {player}
          setupSelectedSeason = {setupSelectedSeason}
          seasonStat = {seasonStat}
          changeStatBySeason = {changeStatBySeason}
          dataError = {dataError}
        />
      </div>
    </div>
  )
}

export default PlayerProfile
