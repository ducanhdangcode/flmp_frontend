import React from 'react'

const PlayerProfileNationalCommonStats = ({player}) => {
    const totalStats = player?.nationalTeamStats.reduce(
        (acc, stat) => {
          acc.appearances += stat.appearances || 0;
          acc.goal += stat.goal || 0;
          acc.assist += stat.assist || 0;
          acc.yellowCard += stat.yellowCard || 0;
          acc.redCard += stat.redCard || 0;
          acc.minutePlayed += stat.minutePlayed || 0;
          return acc;
        },
        { appearances: 0, goal: 0, assist: 0, yellowCard: 0, redCard: 0, minutePlayed: 0 }
    );

    const totalStatsGoalkeeper = player?.nationalTeamStats.reduce(
        (acc, stat) => {
          acc.appearances += stat.appearances || 0;
          acc.cleanSheet += stat.cleanSheet || 0;
          acc.goalConceded += stat.goalConceded || 0;
          acc.yellowCard += stat.yellowCards || 0;
          acc.redCard += stat.redCards || 0;
          acc.minutePlayed += stat.minutePlayed || 0;
          return acc;
        },
        { appearances: 0, cleanSheet: 0, goalConceded: 0, yellowCard: 0, redCard: 0, minutePlayed: 0 }
    );
  return (
    <div className = "relative left-[2rem] mt-[1.5rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">National Team Stats</p>
        </div>

        {/* stat table */}
        <table className = "mt-[1.5rem] w-[93%]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk w-full">
                    <th className = "w-[30%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Competition</th>
                    <th className = "w-[15%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Appearances</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{player?.position === 'goalkeeper' ? 'Clean Sheets' : 'Goals'}</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{player?.position === 'goalkeeper' ? 'Goal Conceded' : 'Assists'}</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Yellow Cards</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Red Cards</th><th className = "w-[15%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Minute Played</th>
                </tr>
            </thead>
            <tbody>
                {player?.nationalTeamStats.map((stat) => {
                    return (
                        <tr className = "h-[1rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                <img src = {stat?.leagueLogoLink} alt = "" className = "w-[1.5rem] h-[1.5rem] absolute left-0" />
                                <p>{stat?.leagueName}</p>
                            </td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.appearances ? stat?.appearances : '-'}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{player?.position === 'Goalkeeper' ? (stat?.cleanSheet ? stat?.cleanSheet : '-') : (stat?.goal ? stat?.goal : '-')}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{player?.position === 'Goalkeeper' ? (stat?.goalConceded ? stat?.goalConceded : '-') : (stat?.assist ? stat?.assist : '-')}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.yellowCard > 0 ? stat?.yellowCard : "-"}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.redCard > 0 ? stat?.redCard : "-"}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{`${stat?.minutePlayed ? stat?.minutePlayed : '-'}'`}</td>
                        </tr>
                    )
                })}
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen text-center font-space-grotesk">
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{`Total stats:`}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.appearances > 0 ? totalStats.appearances : "-"}</td>
                    {player?.position !== 'Goalkeeper' ? 
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.goal > 0 ? totalStats.goal : "-"}</td> : 
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStatsGoalkeeper.cleanSheet > 0 ? totalStatsGoalkeeper.cleanSheet : "-"}</td>
                    }
                    {player?.position !== 'Goalkeeper' ? 
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.assist > 0 ? totalStats.assist : "-"}</td> : 
                        <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStatsGoalkeeper.goalConceded > 0 ? totalStatsGoalkeeper.goalConceded : "-"}</td>
                    }
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.yellowCard > 0 ? totalStats.yellowCard : "-"}</td>
                    <td className = "w-[12.75rem] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{totalStats.redCard > 0 ? totalStats.redCard : "-"}</td>
                    <td className = "w-[12.75rem] h-[2rem]">{totalStats.minutePlayed > 0 ? `${totalStats?.minutePlayed}'` : "-"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PlayerProfileNationalCommonStats
