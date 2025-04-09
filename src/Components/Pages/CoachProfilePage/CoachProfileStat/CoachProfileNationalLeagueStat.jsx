import React from 'react'

const CoachProfileNationalLeagueStat = ({groupedCompetitionStats, competitionNameSets, coach, coachStats, title}) => {
  return (
    <div>
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center py-[0.5rem]">
            <p className = "font-teko text-white font-bold text-xl relative top-[0.1rem]">{`PERFORMANCE DETAIL: ${title}`}</p>
        </div>

        {/* table */}
        <table className = "mt-[1rem] w-[93%]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                    <th className = "w-[20%] border-solid border-r-[1px] border-r-gray-500">Competition</th>
                    <th className = "w-[15%] border-solid border-r-[1px] border-r-gray-500">Matches</th>
                    <th className = "w-[13%] border-solid border-r-[1px] border-r-gray-500">Win</th>
                    <th className = "w-[13%] border-solid border-r-[1px] border-r-gray-500">Draw</th>
                    <th className = "w-[13%] border-solid border-r-[1px] border-r-gray-500">Lose</th>
                    <th className = "w-[13%] border-solid border-r-[1px] border-r-gray-500">Points</th>
                    <th className = "w-[13%] border-solid border-r-[1px] border-r-gray-500">PPM</th>
                </tr>
            </thead>
            <tbody>
                {groupedCompetitionStats.map((stat) => {
                    return (
                        <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                <span className = "flex">
                                    <img src = {stat?.competitionLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                    <p className = "relative left-[10%] top-[0.3rem]">{stat?.competitionName}</p>
                                </span>
                            </td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.totalMatches}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.totalWins}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.totalDraws}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.totalLoses}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.totalWins * 3 + stat?.totalDraws}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{((stat?.totalWins * 3 + stat?.totalDraws)/(stat?.totalMatches)).toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

        {/* header for season  */}
        <div className = "w-[93%] bg-hardGreen text-center py-[0.5rem] mt-[2.5rem]">
            <p className = "font-teko text-white font-bold text-xl relative top-[0.1rem]">PERFORMANCE DETAILS: LEAGUES ACCORDING TO SEASON</p>
        </div>

        {/* table for season */}
        <table className = "w-[93%] mt-[1rem]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Season</th>
                    <th className = "w-[20%] border-solid border-r-[1px] border-r-gray-500">Club</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Matches</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Win</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Draw</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Lose</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">Points</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">PPM</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500">{title === 'NATIONAL LEAGUES' ? 'Placement' : 'Achieved Round'}</th>
                </tr>
            </thead>
            {[...competitionNameSets].map((name) => {
                const filterStats = coachStats.filter(stat => stat.competitionName === name);
                return (
                    <tbody>
                        <tr className = "h-[2rem] bg-easeGreen text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-left" colSpan={9}>
                                <span className = "flex">
                                    <img src = {filterStats[0]?.competitionLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                    <p className = "relative top-[0.3rem] left-[1rem]">{name}</p>
                                </span>
                            </td>
                        </tr>
                        {filterStats.map((stat) => {
                            return (
                                <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.season}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                        <span className = "flex">
                                            <img src = {stat?.clubLogoLink} alt = "" className = "w=[1.7rem] h-[1.7rem] relative left-[1rem]" />
                                            <p className = "relative left-[2rem] top-[0.1rem]">{stat?.clubName}</p>
                                        </span>
                                    </td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.matchCount}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.win}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.draw}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.lose}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{stat?.win * 3 + stat?.draw}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{((stat?.win * 3 + stat?.draw)/stat?.matchCount).toFixed(2)}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{title === 'NATIONAL LEAGUES' ? stat?.placement : stat?.achievedRound}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                )
            })}
        </table>
    </div>
  )
}

export default CoachProfileNationalLeagueStat
