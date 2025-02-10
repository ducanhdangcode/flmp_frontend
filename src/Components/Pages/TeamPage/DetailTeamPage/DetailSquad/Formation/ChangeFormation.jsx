import React, { useEffect, useState } from 'react'
import { getFormationByTeamName, updateFormationSquad } from '../../../../../../APIService/FormationService';

const ChangeFormation = ({formation, teamList, teamId, disableChangeFormation, handleChangeFormationDisplay}) => {
    const [formationSquad, setFormationSquad] = useState([]);
    const [formationSubstitutions, setFormationSubstitutions] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    useEffect(() => {
        InitSquad();
        InitSub();
    }, [])

    // init main squad
    const InitSquad = () => {
        let updatedSquad = [];
    
        formation?.detailSquad.forEach((player) => {
            updatedSquad.push({
                number: player?.number,
                name: player?.name,
                position: player?.position
            });
        });
    
        setFormationSquad(updatedSquad); 
    };

    // init substitutions
    const InitSub = () => {
        let updatedSub = [];
        formation?.substitutions.forEach((player) => {
            updatedSub.push({
                number: player?.number,
                name: player?.name,
                position: player?.position
            });
        });
    
        setFormationSubstitutions(updatedSub); 
    }

    // handle when change the player
    const handlePlayerChange = (index, selectedName, baseName) => {
        const curPlayer = formationSquad.find(player => player?.name === baseName);
        const subPlayer = formationSubstitutions.find(player => player?.name === selectedName);

        if (!subPlayer) {
            console.error(`Player with name "${selectedName}" not found in substitutions.`);
            return; // Prevent further execution if subPlayer is undefined
        }
    
        if (!curPlayer) {
            console.error(`Player with name "${baseName}" not found in formation squad.`);
            return; // Prevent further execution if curPlayer is undefined
        }

        setFormationSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, name: subPlayer.name, number: subPlayer.number} : player;
            })
        )

        setFormationSubstitutions(prevSub => 
            prevSub.map((player, idx) => {
                return player === subPlayer ? {...player, name: curPlayer.name, number: curPlayer.number} : player;
            })
        )

        console.log(formationSquad);
        console.log(formationSubstitutions);

        setTableKey(prev => prev + 1);
    };

    // filter by position in substitutions
    const filterByPosition = (targetPosition) => {
        return formationSubstitutions.filter(player => player.position.includes(targetPosition));
    }

    // handle when apply new squad
    const applyNewSquad = () => {
        const payload = {
            "mainSquad": formationSquad,
            "substitutions": formationSubstitutions
        }
        updateFormationSquad(formation?.id, payload);

        getFormationByTeamName(teamList[teamId-1]?.name).then((response) => {
            handleChangeFormationDisplay(response.data);
        })
        disableChangeFormation();
    }
  return (
    <div className = "">
      <table className = "font-changa" key = {tableKey}>

        <thead className = "text-white">
            <tr className = "h-[2.5rem" style = {{backgroundColor: teamList[teamId-1]?.color}}>
                <th className = "w-[18.5rem] pb-[0.2rem]">Shirt number</th>
                <th className = "w-[18.5rem] pb-[0.2rem]">Name</th>
                <th className = "w-[18rem] pb-[0.2rem]">Position</th>
            </tr>
        </thead>

        <tbody className = "overflow-y-scroll" style = {{height: "15rem", width: "55rem"}}>
            {formationSquad.map((player, index) => {
                if (index % 2 === 0) {
                    return (
                        <tr className = "bg-gray-300 text-center h-[2rem]">
                            <td className = "w-[18.5rem] pb-[0.2rem]">{player.number}</td>
                            <td className = "w-[18.5rem] pb-[0.2rem]">
                                <select
                                    onChange = {(e) => handlePlayerChange(index, e.target.value, player.name)}
                                    className = "w-[18.5rem] text-center"
                                >
                                    <option value = {player.name}>
                                        {player.name}
                                    </option>
                                    {formationSubstitutions.filter(val => val.position === player.position).map((subPlayer) => {
                                        return (
                                            <option value = {subPlayer.name}>
                                                {subPlayer.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </td>
                            <td className = "w-[18.5rem] pb-[0.2rem]">{player.position}</td>
                        </tr>
                    )
                } else {
                    return (
                        <tr className = "h-[2rem] bg-gray-400 text-center">
                            <td className = "w-[18.5rem] pb-[0.2rem]">{player.number}</td>
                            <td className = "w-[18.5rem] pb-[0.2rem]">
                                <select
                                    onChange = {(e) => handlePlayerChange(index, e.target.value, player.name)}
                                    className = "w-[18.5rem] text-center"
                                >
                                    <option value = {player.name}>
                                        {player.name}
                                    </option>
                                    {filterByPosition(player.position).map((subPlayer, idx) => {
                                        return (
                                            <option value = {subPlayer.name}>
                                                {subPlayer.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </td>
                            <td className = "w-[18.5rem] pb-[0.2rem]">{player.position}</td>
                        </tr>
                    )
                }
            })}
        </tbody>
      </table>

      {/* options */}
      <div>
        <button className = "w-[10rem] h-[2rem] bg-green-500 text-white font-bold rounded-[5px] relative left-[1rem] top-[1.5rem]" onClick = {applyNewSquad}>Apply</button>
        <button className = "w-[10rem] h-[2rem] bg-red-500 text-white font-bold rounded-[5px] relative left-[3rem] top-[1.5rem]" onClick = {disableChangeFormation}>Cancel</button>
      </div>
    </div>
  )
}

export default ChangeFormation
