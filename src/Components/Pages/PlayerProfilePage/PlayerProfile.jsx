import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import { usePlayerContext } from '../../../Context/PlayerContext';
import { getPlayerByName } from '../../../APIService/PlayerService';

const PlayerProfile = () => {
  const {playerName} = usePlayerContext();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    getPlayerByName(playerName).then((response) => {
      setPlayer(response.data);
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
            <div className = "font-ubuntu relative top-[1.5rem] left-[5rem]">
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
    </div>
  )
}

export default PlayerProfile
