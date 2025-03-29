import React, { useEffect, useState } from 'react'
import PlayerProfileNationalCommonStats from './PlayerProfileNationalCommonStats'
import PlayerProfileNationalDetailMatchStats from './PlayerProfileNationalDetailMatchStats'

const PlayerProfileNationalTeam = ({player}) => {
    const [competitionNameSet, setCompetitionNameSet] = useState(new Set());

    useEffect(() => {
        player?.detailMatchStats.map((stat) => {
            setCompetitionNameSet(prevSet => new Set([...prevSet, stat.competitionName]));
        });
    }, []);
  return (
    <div>
        {/* common stats */}
        <div>
            <PlayerProfileNationalCommonStats 
                player={player}
            />
        </div>

        {/* detail stats */}
        <div>
            <PlayerProfileNationalDetailMatchStats 
                player = {player}
                competitionNameSet = {competitionNameSet}
            />
        </div>
    </div>
  )
}

export default PlayerProfileNationalTeam
