import React, { useEffect, useState } from 'react'
import { getUserByUsername, updatePersonalSpecifiedFormation } from '../../../../../../APIService/UserService.';
import { useUserContext } from '../../../../../../Context/UserContext';
import { toast, ToastContainer } from 'react-toastify';

const ChangePersonalFormation = ({team, teamId, filteredFormations, activePersonalFormationIndex, user, formationIndex, disableChangePersonalFormation, applyViewPersonalFormation, setupFilteredFormations, formation}) => {
    const [personalMainSquad, setPersonalMainSquad] = useState([]);
    const [personalSubSquad, setPersonalSubSquad] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    const {loginUsername} = useUserContext();

    useEffect(() => {
        InitMainSquad();
        InitSubSquad();
    }, []);

    const InitMainSquad = () => {
        let updatedMainSquad = [];
        filteredFormations[activePersonalFormationIndex-1]?.mainSquad.map((player) => {
            updatedMainSquad.push({
                number: player?.number, 
                name: player?.name,
                position: player?.position
            });
        });
        setPersonalMainSquad(updatedMainSquad);
    }

    const InitSubSquad = () => {
        let updatedSubSquad = [];
        filteredFormations[activePersonalFormationIndex-1]?.substitutions.map((player) => {
            updatedSubSquad.push({
                number: player?.number, 
                name: player?.name,
                position: player?.position
            })
        })
        setPersonalSubSquad(updatedSubSquad);
    }

    const handleChangePlayer = (index, selectedName, baseName) => {
        const curPlayer = personalMainSquad.find(player => player?.name === baseName);
        const subPlayer = personalSubSquad.find(player => player?.name === selectedName);

        if (!subPlayer) {
            console.error(`Player with name "${selectedName}" not found in substitutions.`);
            return; // Prevent further execution if subPlayer is undefined
        }
    
        if (!curPlayer) {
            console.error(`Player with name "${baseName}" not found in formation squad.`);
            return; // Prevent further execution if curPlayer is undefined
        }

        setPersonalMainSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, name: subPlayer.name, number: subPlayer.number} : player;
            })
        )

        setPersonalSubSquad(prevSub => 
            prevSub.map((player, idx) => {
                return player === subPlayer ? {...player, name: curPlayer.name, number: curPlayer.number} : player;
            })
        )
        setTableKey(prev => prev + 1);
    }

    const applyNewSquad = () => {
        const payload = {
            "teamName": filteredFormations[activePersonalFormationIndex - 1]?.teamName, 
            "formationName": filteredFormations[activePersonalFormationIndex - 1]?.formationName,
            "mainSquad": personalMainSquad,
            "substitutions": personalSubSquad,
            "formationDescription": filteredFormations[activePersonalFormationIndex - 1]?.formationDescription
        }
        updatePersonalSpecifiedFormation(user?.id, activePersonalFormationIndex-1, payload);

        getUserByUsername(loginUsername).then((response) => {
            setupFilteredFormations(formation, response.data);
        })

        toast("Change players successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "bg-green-500 text-white font-bold p-4 rounded-lg shadow-lg",
            progressClassName: "bg-white",
        })
        
        setTimeout(() => {
            applyViewPersonalFormation(formationIndex);
            disableChangePersonalFormation();
        }, 1500);
    }
  return (
    <div>
        <table className = "font-changa" key = {tableKey}>
            <thead className = "text-white">
                <tr className = "h-[2.5rem]" style = {{backgroundColor: team?.color}}>
                    <th className = "w-[18.5rem] pb-[0.2rem]">Shirt number</th>
                    <th className = "w-[18.5rem] pb-[0.2rem]">Name</th>
                    <th className = "w-[18rem] pb-[0.2rem]">Position</th>
                </tr>
            </thead>
            <tbody className = "overflow-y-scroll" style = {{height: "15rem", width: "55rem"}}>
                {personalMainSquad.map((player, index) => {
                    if (index % 2 === 0) {
                        return (
                            <tr className = "bg-gray-300 text-center h-[2rem]">
                                <td className = "w-[18.5rem] pb-[0.2rem]">{player.number}</td>
                                <td className = "w-[18.5rem] pb-[0.2rem]">
                                    <select
                                        className = "w-[18.5rem] text-center"
                                        onChange = {(e) => handleChangePlayer(index, e.target.value, player.name)}
                                    >
                                        <option value = {player.name}>
                                            {player.name}
                                        </option>
                                        {personalSubSquad.filter(val => val.position === player.position).map((subPlayer) => {
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
                            <tr className = "bg-gray-400 text-center h-[2rem]">
                                <td className = "w-[18.5rem] pb-[0.2rem]">{player.number}</td>
                                <td className = "w-[18.5rem] pb-[0.2rem]">
                                    <select
                                        className = "w-[18.5rem] text-center"
                                        onChange = {(e) => handleChangePlayer(index, e.target.value, player.name)}
                                    >
                                        <option value = {player.name}>
                                            {player.name}
                                        </option>
                                        {personalSubSquad.filter(val => val.position === player.position).map((subPlayer) => {
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
            <button className = "w-[10rem] h-[2rem] bg-red-500 text-white font-bold rounded-[5px] relative left-[3rem] top-[1.5rem]" onClick = {() => {
                disableChangePersonalFormation();
                applyViewPersonalFormation(formationIndex);
            }}>Cancel</button>
        </div>

        {/* toast */}
        <ToastContainer />
    </div>
  )
}

export default ChangePersonalFormation
