import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../BreadCrumb/Breadcrumb'
import CoachProfileHeader from './CoachProfileHeader/CoachProfileHeader'
import { useTeamHeaderContext } from '../../../Context/TeamHeaderContext';
import { getCoachByTeamName } from '../../../APIService/CoachService';

const CoachProfile = () => {
    const {teamName} = useTeamHeaderContext();
    const [coach, setCoach] = useState(null);

    useEffect(() => {
        getCoachByTeamName(teamName).then((response) => {
            setCoach(response.data);
        }).catch(err => console.error(err));
    })
  return (
    <div className = "pb-[2rem] bg-white mt-[6rem]">
      <div className = "relative left-[2rem] top-[0rem]">
            {/* header */}
            <CoachProfileHeader 
                coach = {coach}
            />
      </div>
    </div>
  )
}

export default CoachProfile
