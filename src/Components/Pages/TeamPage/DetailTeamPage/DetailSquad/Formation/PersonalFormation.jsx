import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { useUserContext } from '../../../../../../Context/UserContext';
import { getUserByUsername } from '../../../../../../APIService/UserService.';
import SpeficPersonalFormation from './SpeficPersonalFormation';

const PersonalFormation = ({drawFormation, teamList, teamId, activePersonalFormationIndex, handleChangeActivePersonalFormationIndex, handleSetNextActiveIndex, handleSetPreviousActiveIndex, startPaginationIndex, handleChangeGroupIndex, disableViewPersonalFormation, formation, filteredFormations}) => {
    const {loginUsername} = useUserContext();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserByUsername(loginUsername).then((response) => {
            setUser(response.data);
        }).catch(err => console.error(err));

        console.log("active index after apply: " + activePersonalFormationIndex);
        console.log("filter formations: " + filteredFormations);
    });
  return (
    <div>
      <div>
        <SpeficPersonalFormation 
            user = {user}
            drawFormation = {drawFormation}
            teamList = {teamList}
            teamId = {teamId}
            activePersonalFormationIndex = {activePersonalFormationIndex}
            handleChangeActivePersonalFormationIndex = {handleChangeActivePersonalFormationIndex}
            handleSetNextActiveIndex = {handleSetNextActiveIndex}
            handleSetPreviousActiveIndex = {handleSetPreviousActiveIndex}
            startPaginationIndex = {startPaginationIndex}
            handleChangeGroupIndex = {handleChangeGroupIndex}
            disableViewPersonalFormation = {disableViewPersonalFormation}
            formation = {formation}
            filteredFormations = {filteredFormations}
        />
      </div>
    </div>
  )
}

export default PersonalFormation
