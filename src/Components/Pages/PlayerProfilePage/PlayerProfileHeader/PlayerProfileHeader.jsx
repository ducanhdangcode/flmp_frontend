import React from 'react'

const PlayerProfileHeader = ({player, storedTeamLogo, detailLogoHeight, detailLogoWidth, currentContract, currentTeam}) => {
  return (
    <div>
      <div className = "flex">
        {/* player info */}
        <div className = "mt-[2rem] relative left-[2rem] bg-gray-300 w-[50%] h-[18rem] rounded-[5px] flex">
          {/* image */}
          <img src = {player?.imageLink} alt = "" className = "w-[25%] h-[15rem] relative left-[1rem] top-[1.5rem]"/>

          {/* shirt number */}
          <p className = "absolute right-[0.5rem] top-0 font-alfa text-5xl">{`${player?.shirtNumber.toString().padStart(2, "0")}`}</p>

          {/* other information */}
          <div className = "relative left-[2.5rem] top-[1.2rem]">
            {/* name */}
            <p className = "font-alfa font-bold text-2xl">{player?.name}</p>
            <div className = "flex relative top-[0.5rem] bg-[#ededed] h-[12.5rem] right-[1rem] w-[35vw] rounded-[5px]">
              {/* first col */}
              <div className = "font-ubuntu relative top-[1.5rem] left-[1rem]">
                {/* date of birth */}
                <p>Date of birth: <span className = "font-bold">{player?.birthDate}</span></p>
                {/* height */}
                <p className = "relative top-[1rem]">Height: <b>{`${player?.height}cm`}</b></p>
                {/* birth place */}
                <div className = "flex relative top-[2rem]">
                  <p className = "">Place of birth: <b>{player?.birthPlace}</b></p>
                  <img src = {player?.nationalityImageLink} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" />
                </div>
                {/* nationality */}
                <div className = "flex relative top-[3rem]">
                  <p>Nationality: <b>{player?.nationality}</b></p>
                  <img src = {player?.nationalityImageLink} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" />
                </div>
              </div>

              {/* second col */}
              <div className = "font-ubuntu relative top-[1.5rem] left-[4rem]">
                {/* position */}
                <p>Position: <b>{player?.detailPosition}</b></p>
                {/* other position */}
                <p className = "relative top-[1rem]">Other position: <b>{player?.otherPosition}</b></p>
                {/* preferred foot */}
                <p className = "relative top-[2rem]">Preferred Foot: <b>{player?.preferredFoot}</b></p>
                {/* former international */}
                <p className = "relative top-[3rem]">Former International: <b>{player?.formerInternational}</b></p>
              </div>
            </div>
          </div>
        </div>

        {/* team contract info */}
        <div className = "w-[40%] h-[18rem] bg-gray-300 mt-[2rem] left-[5rem] relative rounded-[5px] flex">
          {/* current club logo */}
          <div>
            <img src = {storedTeamLogo} className = "relative right-[2rem] top-[2rem]" alt = "" style = {{width: `${detailLogoWidth/1.2}rem`, height: `${detailLogoHeight/1.2}rem`}} />
            <p className = "relative top-[3rem] left-[2.3rem] font-changa text-lg font-bold">{currentTeam?.name}</p>
          </div>

          {/* contract info */}
          <div className = "w-[55%] h-[15rem] bg-[#ededed] relative right-[2rem] top-[1.5rem] rounded-[7px] font-ubuntu">
            <div className = "mt-[1.5rem]">
              <p className = "text-lg relative left-[1rem]">Join club at: <b>{currentContract?.startContractDate}</b></p>
              <p className = "text-lg relative left-[1rem] top-[1rem]">Contract expires at: <b>{currentContract?.endContractDate}</b></p>
              <p className = "text-lg relative left-[1rem] top-[2rem]">Contract type: <b>{currentContract?.contractType}</b></p>
              <p className = "text-lg relative left-[1rem] top-[3rem]">Transfer fee: <b className = "">{`€${currentContract?.contractValue.toFixed(2)}M`}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfileHeader
