import React, { useEffect, useState } from 'react'
import FootballField from './Football_field.svg';
import { useUserContext } from '../../../../../../Context/UserContext';
import { getUserByUsername } from '../../../../../../APIService/UserService.';
import SpeficPersonalFormation from './SpeficPersonalFormation';
import { MdViewAgenda } from 'react-icons/md';
import { IoMdAddCircle } from "react-icons/io";

const PersonalFormation = ({drawFormation, teamList, teamId, activePersonalFormationIndex, handleChangeActivePersonalFormationIndex, handleSetNextActiveIndex, handleSetPreviousActiveIndex, startPaginationIndex, handleChangeGroupIndex, disableViewPersonalFormation, formation, filteredFormations, formationIndex, handleChangeCreateFormation}) => {
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
      {filteredFormations.length > 0 ? 
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
        </div> : 
        <div className = "relative left-[15%] top-[12rem]">
          <p className = "text-2xl font-bold">You do not have any personal formation for this formation!</p>
          <div className = "flex">
              {/* create formation */}
              <button className = "flex w-[12rem] h-[2rem] bg-yellow-500 text-white font-bold relative left-[6rem] top-[2rem]">
                  <span><IoMdAddCircle className = "w-[1.5rem] h-[1.5rem] relative left-[0.8rem] top-[0.2rem]"/></span>
                  <span className = "relative left-[1.2rem] top-[0.2rem]" onClick = {() => {
                    disableViewPersonalFormation();
                    handleChangeCreateFormation(formationIndex);
                  }}>Create formation</span>
              </button>

              {/* view default formation */}
              <button className = "flex w-[10rem] h-[2rem] bg-gray-500 text-white font-bold relative left-[11rem] top-[2rem]">
                  <span><MdViewAgenda className = "w-[1.5rem] h-[1.5rem] relative left-[0.8rem] top-[0.2rem]"/></span>
                  <span className = "relative left-[1.2rem] top-[0.2rem]" onClick = {disableViewPersonalFormation}>View default</span>
              </button>
          </div>
        </div>
      }
    </div>
  )
}

export default PersonalFormation
