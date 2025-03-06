import React from 'react'

const GoalkeeperStatTableByTeam = ({allStatsGroupByTeam}) => {
  return (
    <div>
        {/* title */}
        <div className = "w-[93.1%] h-[2rem] bg-[#060433] text-white font-ubuntu mt-[1rem] text-center text-lg font-bold">
            <p className = "relative top-[0.1rem]">Stats by team</p>
        </div>

        {/* table */}
        <div>
            <table className = "font-space-grotesk">
                <thead>
                    <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-gray-300">
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Team</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Appearances</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Saves</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Clean sheets</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Yellow cards</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Red cards</th>
                        <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">Minute played</th>
                    </tr>
                </thead>
                <tbody>
                    {allStatsGroupByTeam.map((teamStat, index) => {
                        return (
                            <tr className = "h-[2rem] bg-white text-center border-solid border-b-[1px] border-b-gray-500">
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.teamName}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.appearances > 0 ? teamStat.appearances : "-"}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.saves > 0 ? teamStat.saves : "-"}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.cleanSheets > 0 ? teamStat.cleanSheets : "-"}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.yellowCards > 0 ? teamStat.yellowCards : "-"}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.redCards > 0 ? teamStat.redCards : "-"}</td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{teamStat.minutePlayed > 0 ? `${teamStat.minutePlayed}'` : "-"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default GoalkeeperStatTableByTeam
