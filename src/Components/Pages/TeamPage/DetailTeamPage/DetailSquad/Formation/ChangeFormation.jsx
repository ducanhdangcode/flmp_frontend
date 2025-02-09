import React, { useEffect, useState } from 'react'

const ChangeFormation = ({formation}) => {
    const [formationSquad, setFormationSquad] = useState([]);
    const [formationSubstitutions, setFormationSubstitutions] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    useEffect(() => {
        InitSquad();
        InitSub();
    }, [])

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

    const handlePlayerChange = (index, selectedName, baseName) => {
        let curPlayer = formationSquad.find(player => player.name === baseName);
        let subPlayer = formationSubstitutions.find(player => player.name === selectedName);

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
  return (
    <div className = "">
      <table className = "" key = {tableKey}>

        <thead>
            <tr className = "h-[2.5rem] bg-red-500">
                <th className = "w-[18.5rem] pb-[0.2rem]">Shirt number</th>
                <th className = "w-[18.5rem] pb-[0.2rem]">Name</th>
                <th className = "w-[18rem] pb-[0.2rem]">Position</th>
            </tr>
        </thead>

        <tbody className = "overflow-y-scroll" style = {{height: "15rem", width: "55rem"}}>
            {formationSquad.map((player, index) => {
                if (index % 2 === 0) {
                    return (
                        <tr className = "bg-gray-300 text-center">
                            <td className = "w-[18.5rem] pb-[0.2rem]">{player.number}</td>
                            <td className = "w-[18.5rem] pb-[0.2rem]">
                                <select
                                    onChange = {(e) => handlePlayerChange(index, e.target.value, player.name)}
                                    className = "w-[18.5rem] text-center"
                                >
                                    <option value = {player.name}>
                                        {player.name}
                                    </option>
                                    {formationSubstitutions.map((subPlayer) => {
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
                                    {formationSubstitutions.map((subPlayer) => {
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
    </div>
  )
}

export default ChangeFormation
