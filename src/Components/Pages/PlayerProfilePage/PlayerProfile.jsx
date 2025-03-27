import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import { usePlayerContext } from '../../../Context/PlayerContext';
import { getAllPlayerStats, getPlayerByName, getPlayerContractByTeamName, getStatBySeason } from '../../../APIService/PlayerService';
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getTeamById } from '../../../APIService/TeamService';
import PlayerProfileHeader from './PlayerProfileHeader/PlayerProfileHeader';
import PlayerProfileStat from './PlayerProfileStat/PlayerProfileStat';
import PlayerProfileTransfers from './PlayerProfileTransfers/PlayerProfileTransfers';
import PlayerProfileMarketValue from './PlayerProfileMarketValue/PlayerProfileMarketValue';

const PlayerProfile = () => {
  const {playerName} = usePlayerContext();
  const [player, setPlayer] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);

  const {storedTeamLogo, detailLogoWidth, detailLogoHeight, teamId, detailLogoLeft} = useTeamHeaderContext();

  const [viewOption, setViewOption] = useState("stat");

  const [selectedSeason, setSelectedSeason] = useState("24-25");
  const [seasonStat, setSeasonStat] = useState([]);

  const [dataError, setDataError] = useState("");

  const [allStatsGroupByTeam, setAllStatsGroupByTeam] = useState([]);

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
    }).catch(err => console.error(err));
  }, [])

  useEffect(() => {
    getAllPlayerStats(playerName).then((response) => {
        setAllStatsGroupByTeam(groupByTeam(response.data));
        console.log(response.data);
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

  const groupByTeam = (stats) => {
      const teamStats = {};

      stats.forEach(stat => {
          if (!teamStats[stat.teamName]) {
              teamStats[stat.teamName] = {
                  teamName: stat.teamName,
                  appearances: 0,
                  goals: 0,
                  assists: 0,
                  yellowCards: 0,
                  redCards: 0,
                  minutePlayed: 0,
                  saves: 0,
                  cleanSheets: 0
              };
          }

          teamStats[stat.teamName].appearances += stat.appearances;
          teamStats[stat.teamName].goals += stat.goals;
          teamStats[stat.teamName].assists += stat.assists;
          teamStats[stat.teamName].yellowCards += stat.yellowCards;
          teamStats[stat.teamName].redCards += stat.redCards;
          teamStats[stat.teamName].minutePlayed += stat.minutePlayed;
          teamStats[stat.teamName].saves += stat.saves;
          teamStats[stat.teamName].cleanSheets += stat.cleanSheets;
      });

      return Object.values(teamStats);
  };
  return (
    <div className = "mt-[6rem] pb-[2rem]">
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
        detailLogoLeft = {detailLogoLeft}
      />

      {/* options */}
      <div className = "flex relative left-[2rem] mt-[2rem] font-roboto font-bold text-lg text-white hover:cursor-pointer ">
        <div className = "h-[2rem] px-[5%] font-teko text-xl" style = {{backgroundColor: viewOption === "stat" ? "#27391C" : "#CAE0BC", color: viewOption === 'stat' ? 'white' : 'black'}} onClick = {() => setViewOption("stat")}>
          <p className = "relative top-[0.2rem]">STATS</p>
        </div>
        <div className = "h-[2rem] px-[5%] font-teko text-xl" style = {{backgroundColor: viewOption === "marketValue" ? "#27391C" : "#CAE0BC", color: viewOption === 'marketValue' ? 'white' : 'black'}} onClick = {() => setViewOption("marketValue")}>
          <p className = "relative top-[0.2rem]">MARKET VALUE</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e] font-teko text-xl" style = {{backgroundColor: viewOption === "transfers" ? "#27391C" : "#CAE0BC", color: viewOption === 'transfers' ? 'white' : 'black'}} onClick = {() => setViewOption("transfers")}>
          <p className = "relative top-[0.2rem]">TRANSFERS</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e] font-teko text-xl" style = {{backgroundColor: viewOption === "rumours" ? "#27391C" : "#CAE0BC", color: viewOption === 'rumours' ? 'white': 'black'}} onClick = {() => setViewOption("rumours")}>
          <p className = "relative top-[0.2rem]">RUMOURS</p>
        </div>
        <div className = "h-[2rem] px-[5%] hover:bg-[#3d3b6e] font-teko text-xl" style = {{backgroundColor: viewOption === "nationalTeam" ? "#27391C" : "#CAE0BC", color: viewOption === 'nationalTeam' ? 'white' : 'black'}} onClick = {() => setViewOption("nationalTeam")}>
          <p className = "relative top-[0.2rem]">NATIONAL TEAM</p>
        </div>
        <div className = "h-[2rem] px-[5.5%] hover:bg-[#3d3b6e] font-teko text-xl" style = {{backgroundColor: viewOption === "news" ? "#27391C" : "#CAE0BC", color: viewOption === 'news' ? 'white' : 'black'}} onClick = {() => setViewOption("news")}>
          <p className = "relative top-[0.2rem]">NEWS</p>
        </div>
      </div>

      {/* stats */}
      {viewOption === 'stat' && 
        <div className = "relative left-[2rem] mt-[0.5rem]">
          <PlayerProfileStat 
            player = {player}
            setupSelectedSeason = {setupSelectedSeason}
            seasonStat = {seasonStat}
            changeStatBySeason = {changeStatBySeason}
            dataError = {dataError}
            allStatsGroupByTeam = {allStatsGroupByTeam}
          />
        </div>
      }

      {/* transfer */}
      {viewOption === 'transfers' && 
        <PlayerProfileTransfers 
            player = {player}
        />
      }

      {/* market value */}
      {viewOption === 'marketValue' && 
        <PlayerProfileMarketValue 
            player = {player}
        />
      }
    </div>
  )
}

export default PlayerProfile
