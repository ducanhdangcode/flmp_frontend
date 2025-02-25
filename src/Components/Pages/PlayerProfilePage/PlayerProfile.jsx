import React from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import { useParams } from 'react-router-dom'
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';

const PlayerProfile = () => {
  const playerName = useParams();
  const {teamList, teamId} = useTeamHeaderContext();
  return (
    <div className = "mt-[6rem]">
      <div className = "relative left-[2rem] top-[1rem]">
        <Breadcrumb 
          pageName={"Player Profile"}
        />
      </div>
    </div>
  )
}

export default PlayerProfile
