import React from 'react'
import PlayerProfileTransfersHistory from './PlayerProfileTransfersHistory'

const PlayerProfileTransfers = ({player}) => {
  return (
    <div>
        {/* transfer history */}
        <div className = "mt-[1.5rem]">
            <PlayerProfileTransfersHistory 
                player = {player}
            />
        </div>
    </div>
  )
}

export default PlayerProfileTransfers
