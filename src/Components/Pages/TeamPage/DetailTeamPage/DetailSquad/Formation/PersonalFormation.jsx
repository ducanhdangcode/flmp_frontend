import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { useUserContext } from '../../../../../../Context/UserContext';
import { getUserByUsername } from '../../../../../../APIService/UserService.';
import SpeficPersonalFormation from './SpeficPersonalFormation';

const PersonalFormation = ({drawFormation, teamList, teamId}) => {
    const {loginUsername} = useUserContext();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserByUsername(loginUsername).then((response) => {
            setUser(response.data);
        }).catch(err => console.error(err));
    });
  return (
    <div>
      <div>
        <SpeficPersonalFormation 
            user = {user}
            drawFormation = {drawFormation}
            personalFormationIndex = {0}
            teamList = {teamList}
            teamId = {teamId}
        />
      </div>
    </div>
  )
}

export default PersonalFormation
