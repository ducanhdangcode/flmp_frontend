import React from 'react'

const OtherPlayerTableStat = ({player, seasonStat}) => {
    const totalStats = seasonStat.reduce(
        (acc, stat) => {
          acc.appearances += stat.appearances || 0;
          acc.goals += stat.goals || 0;
          acc.assists += stat.assists || 0;
          acc.yellowCards += stat.yellowCards || 0;
          acc.redCards += stat.redCards || 0;
          acc.minutePlayed += stat.minutePlayed || 0;
          return acc;
        },
        { appearances: 0, goals: 0, assists: 0, yellowCards: 0, redCards: 0, minutePlayed: 0 }
      );
  return (
    <div>
        <table className = "mt-[1rem]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                    <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                        <p className = "relative top-[0.1rem]">Competitions</p>
                    </th>
                    <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                        <p className = "relative top-[0.1rem]">Appearances</p>
                    </th>
                    <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                        <p className = "relative top-[0.1rem]">Goals</p>
                    </th>
                    <th className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500">
                        <p className = "relative top-[0.1rem]">Assists</p>
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
                        <>
                            <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                    <img src = {stat?.leagueLogo} alt = "" className = "w-[1.5rem] h-[1.5rem] absolute left-[0rem]" />
                                    <p className = "relative left-[0rem]">{stat?.leagueName}</p>
                                </td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                    <p>{stat?.appearances > 0 ? stat?.appearances : "-"}</p>
                                </td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                    <p>{stat?.goals > 0 ? stat?.goals : "-"}</p>
                                </td>
                                <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                    <p>{stat?.assists > 0 ? stat?.assists : "-"}</p>
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
                        </>
                    )
                })}
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen text-center font-space-grotesk">
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{`Total stats:`}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.appearances > 0 ? totalStats.appearances : "-"}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.goals > 0 ? totalStats.goals : "-"}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.assists > 0 ? totalStats.assists : "-"}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.yellowCards > 0 ? totalStats.yellowCards : "-"}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.redCards > 0 ? totalStats.redCards : "-"}</td>
                    <td className = "w-[12.75rem] h-[2rem]">{totalStats.minutePlayed > 0 ? `${totalStats?.minutePlayed}'` : "-"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default OtherPlayerTableStat
