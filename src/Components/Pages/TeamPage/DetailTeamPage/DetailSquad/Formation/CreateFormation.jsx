import React, { useEffect, useState } from 'react'
import { getUserByUsername, updatePersonalFormation } from '../../../../../../APIService/UserService.';
import { useUserContext } from '../../../../../../Context/UserContext';
import {ToastContainer, toast} from 'react-toastify';

const CreateFormation = ({formation, teamList, teamId, disableCreateFormation, applyViewPersonalFormation, formationIndex, handleChangeActivePersonalFormationIndex, user, setupFilteredFormations}) => {
    // initial personal main squad and substitutions
    const [personalMainSquad, setPersonalMainSquad] = useState([]);
    const [personalSubSquad, setPersonalSubSquad] = useState([]);

    // recent username
    const {loginUsername} = useUserContext();

    // error string of user when create
    const lackPlayerMessage = "Please fill all the players to apply formations";

    // error string of duplicate number
    const duplicateNumberMessage = "Cannot duplicate the shirt number. Try again!";

    // state to handle error
    const [lackError, setLackError] = useState(false);
    
    useEffect(() => {
      InitPersonalMainSquad();
      InitPersonalSubSquad();
    }, [])

    // init main squad
    const InitPersonalMainSquad = () => {
        let personalMainSquadTmp = [];
        formation?.detailSquad.forEach((player) => {
            personalMainSquadTmp.push({
                "number": null,
                "name": null,
                "position": player?.position
            })
        })

        setPersonalMainSquad(personalMainSquadTmp);
    }

    // init sub squad
    const InitPersonalSubSquad = () => {
        let personalSubSquadTmp = [];
        formation?.substitutions.map((player) => {
            personalSubSquadTmp.push({
                "number": null,
                "name": null,
                "position": player?.position
            })
        })
        setPersonalSubSquad(personalSubSquadTmp);
    }

    // add name of main squad
    const AddPlayerNameMainSquad = (index, addName) => {
        setPersonalMainSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, name: addName} : player;
            })
        )
    }

    // add number of main 
    const AddPlayerNumberMainSquad = (index, addNumber) => {
        setPersonalMainSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, number: addNumber} : player;
            })
        )
    }

    // add name of sub squad
    const AddPlayerNameSubSquad = (index, addName) => {
        setPersonalSubSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, name: addName} : player;
            })
        )
        console.log(personalMainSquad);
        console.log(personalSubSquad);
    }

    // add number of sub squad
    const AddPlayerNumberSubSquad = (index, addNumber) => {
        setPersonalSubSquad(prevSquad => 
            prevSquad.map((player, idx) => {
                return idx === index ? {...player, number: addNumber} : player;
            })
        )
    }

    // handle check duplicate number
    const CheckDuplicateNumber = () => {
        const seenNumber = new Set();

        for (const player of personalMainSquad) {
            if (seenNumber.has(player.number)) {
                return true;
            }
            seenNumber.add(player.number);
        }

        for (const subPlayer of personalSubSquad) {
            if (seenNumber.has(subPlayer.number)) {
                return true;
            }
            seenNumber.add(subPlayer.number);
        }

        return false;
    }

    // handle apply the personal squad
    const ApplyPersonalSquad = async () => {
        if (personalMainSquad.length + personalSubSquad.length < 18) {
            toast(lackPlayerMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            });
        } else if (CheckDuplicateNumber()) {
            toast(duplicateNumberMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: "bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg",
                progressClassName: "bg-white",
            })
        } else {
            const PersonalFormationPayload = {
                "teamName": teamList[teamId-1]?.name,
                "formationName": formation?.formationName,
                "mainSquad": personalMainSquad, 
                "substitutions": personalSubSquad,
                "formationDescription": ""
            }
            await updatePersonalFormation(user?.id, PersonalFormationPayload);
            getUserByUsername(loginUsername).then((response) => {
                setupFilteredFormations(formation, response.data);
                handleChangeActivePersonalFormationIndex(response.data.personalFormations.length);
                // handleChangeGroupIndex(response.data.personalFormations.length);
    
            })
    
            disableCreateFormation();
            applyViewPersonalFormation(formationIndex);
        }
    }

    // handle reset all errors
    const handleResetAllErrors = () => {
        setLackError(false);
    }
  return (
    <div>
      <table className = "font-changa">
        <thead className = "text-white">
            <tr className = "h-[2.5rem]" style = {{backgroundColor: teamList[teamId-1]?.color}}>
                <th className = "w-[18.5rem] pb-[0.2rem]">Shirt number</th>
                <th className = "w-[18.5rem] pb-[0.2rem]">Name</th>
                <th className = "w-[18rem] pb-[0.2rem]">Position</th>
            </tr>
        </thead>
        <tbody className = "text-center">
            <tr className = "h-[1.5rem] bg-[#0f1a2b] text-white">
                <td colSpan = "3">
                    Main Squad
                </td>
            </tr>
            {personalMainSquad.map((player, index) => {
                if (index % 2 === 0) {
                    return (
                        <tr className = "bg-gray-400 h-[1rem]">
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player number"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNumberMainSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player name"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNameMainSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>{player.position}</td>
                        </tr>
                    )
                } else {
                    return (
                        <tr className = "bg-gray-300 h-[1.5rem]">
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player number"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNumberMainSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player name"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNameMainSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>{player.position}</td>
                        </tr>
                    )
                }
            })}
            <tr className = "h-[1.5rem] bg-[#0f1a2b] text-white">
                <td colSpan = "3">
                    Substitutions
                </td>
            </tr>
            {personalSubSquad.map((player, index) => {
                if (index % 2 === 0) {
                    return (
                        <tr className = "bg-gray-400 h-[1rem]">
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player number" 
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNumberSubSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player name"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNameSubSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>{player.position}</td>
                        </tr>
                    )
                } else {
                    return (
                        <tr className = "bg-gray-300 h-[1.5rem]">
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player number" 
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNumberSubSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>
                                <input 
                                    type = "text"
                                    placeholder = "Player name"
                                    className = "w-full text-center bg-gray-200 text-black"
                                    onChange = {e => AddPlayerNameSubSquad(index, e.target.value)}
                                    onFocus = {handleResetAllErrors}
                                />
                            </td>
                            <td>{player.position}</td>
                        </tr>
                    )
                }
            })}
        </tbody>
      </table>

      {/* options */}
      <div className = "flex">
        {/* apply and cancel button */}
        <button className = "w-[10rem] h-[2rem] bg-green-500 text-white rounded-[5px] font-bold relative left-[2rem] top-[1.5rem]" onClick = {ApplyPersonalSquad}>Apply</button>
        <button className = "w-[10rem] h-[2rem] bg-red-500 text-white rounded-[5px] font-bold relative left-[4rem] top-[1.5rem]" onClick = {disableCreateFormation}>Cancel</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CreateFormation
