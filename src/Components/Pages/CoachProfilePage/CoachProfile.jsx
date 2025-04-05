import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import CoachProfileHeader from './CoachProfileHeader/CoachProfileHeader'
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getCoachByTeamName, getContractByTeamName } from '../../../APIService/CoachService';

const CoachProfile = () => {
    const {teamName, storedTeamLogo, detailLogoHeight, detailLogoWidth, detailLogoLeft} = useTeamHeaderContext();
    const [coach, setCoach] = useState(null);
    const [currentContract, setCurrentContract] = useState(null);

    useEffect(() => {
        getCoachByTeamName(teamName).then((response) => {
            setCoach(response.data);
            getContractByTeamName(response.data.name, teamName).then((contractResponse) => {
                setCurrentContract(contractResponse.data);
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    })
  return (
    <div className = "pb-[2rem] bg-white mt-[6rem]">
      <div className = "relative left-[2rem] top-[0rem]">
            {/* header */}
            <CoachProfileHeader 
                coach = {coach}
                storedTeamLogo = {storedTeamLogo}
                detailLogoHeight = {detailLogoHeight}
                detailLogoWidth = {detailLogoWidth}
                detailLogoLeft = {detailLogoLeft}
                currentContract = {currentContract}
            />
      </div>
    </div>
  )
}

export default CoachProfile
