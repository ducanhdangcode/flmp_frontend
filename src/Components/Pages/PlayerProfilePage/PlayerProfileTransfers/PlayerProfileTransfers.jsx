import React from 'react'
import PlayerProfileTransfersHistory from './PlayerProfileTransfersHistory'
import PlayerProfileTransfersYouthClub from './PlayerProfileTransfersYouthClub'

const PlayerProfileTransfers = ({player}) => {
  return (
    <div>
        {/* transfer history */}
        <div className = "mt-[1.5rem]">
            <PlayerProfileTransfersHistory 
                player = {player}
            />
        </div>

        {/* transfer youth clubs */}
        <div className = "mt-[1.5rem]">
            <PlayerProfileTransfersYouthClub 
              player={player}
            />
        </div>
    </div>
  )
}

export default PlayerProfileTransfers
