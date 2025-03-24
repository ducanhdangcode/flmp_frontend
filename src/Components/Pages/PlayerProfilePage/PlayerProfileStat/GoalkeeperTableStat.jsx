import React from 'react'

const GoalkeeperTableStat = ({seasonStat}) => {
    const totalStats = seasonStat.reduce(
        (acc, stat) => {
          acc.appearances += stat.appearances || 0;
          acc.saves += stat.saves || 0;
          acc.cleanSheets += stat.cleanSheets || 0;
          acc.yellowCards += stat.yellowCards || 0;
          acc.redCards += stat.redCards || 0;
          acc.minutePlayed += stat.minutePlayed || 0;
          return acc;
        },
        { appearances: 0, saves: 0, cleanSheets: 0, yellowCards: 0, redCards: 0, minutePlayed: 0 }
    );
  return (
    <div>
      <table>
      <thead>
            <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Competitions</p>
                </th>
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Appearances</p>
                </th>
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Saves</p>
                </th>
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Clean sheets</p>
                </th>
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Yellow cards</p>
                </th>
                <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                    <p className = "relative top-[0.1rem]">Red cards</p>
                </th>
                <th className = "w-[12.75rem]">
                    <p className = "relative top-[0.1rem]">Minute played</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {seasonStat.map((stat) => {
                return (
                    <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <img src = {stat?.leagueLogo} alt = "" className = "w-[1.5rem] h-[1.5rem] absolute left-[0rem]" />
                            <p className = "relative left-[0rem]">{stat?.leagueName}</p>
                        </td>
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <p>{stat?.appearances > 0 ? stat?.appearances : "-"}</p>
                        </td>
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <p>{stat?.saves > 0 ? stat?.saves : "-"}</p>
                        </td>
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <p>{stat?.cleanSheets > 0 ? stat?.cleanSheets : "-"}</p>
                        </td>
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <p>{stat?.yellowCards > 0 ? stat?.yellowCards : "-"}</p>
                        </td>
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                            <p>{stat?.redCards > 0 ? stat?.redCards : "-"}</p>
                        </td>
                        <td className = "w-[12.75rem]">
                            <p>{stat?.minutePlayed > 0 ? `${stat?.minutePlayed}'` : "-"}</p>
                        </td>
                    </tr>
                )
            })}
            <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen text-center font-space-grotesk">
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{`Total stats:`}</td>
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.appearances > 0 ? totalStats.appearances : "-"}</td>
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.saves > 0 ? totalStats.saves : "-"}</td>
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.cleanSheets > 0 ? totalStats.cleanSheets : "-"}</td>
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.yellowCards > 0 ? totalStats.yellowCards : "-"}</td>
                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.redCards > 0 ? totalStats.redCards : "-"}</td>
                <td className = "w-[12.75rem] h-[2rem]">{totalStats.minutePlayed > 0 ? `${totalStats?.minutePlayed}'` : "-"}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GoalkeeperTableStat
