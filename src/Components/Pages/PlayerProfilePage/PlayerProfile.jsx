import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import { usePlayerContext } from '../../../Context/PlayerContext';
import { getPlayerByName, getPlayerContractByTeamName } from '../../../APIService/PlayerService';
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getTeamById } from '../../../APIService/TeamService';
import PlayerProfileHeader from './PlayerProfileHeader/PlayerProfileHeader';

const PlayerProfile = () => {
  const {playerName} = usePlayerContext();
  const [player, setPlayer] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);

  const {storedTeamLogo, detailLogoWidth, detailLogoHeight, teamId} = useTeamHeaderContext();

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
    </div>
  )
}

export default PlayerProfile
