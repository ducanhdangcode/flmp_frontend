import React from 'react'
import { getDetailMatchStatsByCompetitionName } from '../../../../APIService/PlayerService'

const PlayerProfileNationalDetailMatchStats = ({player, competitionNameSet}) => {
    
  return (
    <div className = "relative left-[2rem] mt-[1.5rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">Detail National Team Stats</p>
        </div>

        {/* table */}
        {[...competitionNameSet].map((name) => {
            const filterStats= player?.detailMatchStats.filter(stat => stat.competitionName === name);
            return (
                <div className = "">
                    <div className = "mt-[1.5rem] flex">
                        <img src = {filterStats[0].competitionLink} alt = "" className = "w-[5rem] h-[5rem]" />
                        <div className = "relative left-[3%]">
                            <p className = "font-teko text-4xl font-bold py-[1rem]">{name}</p>
                        </div>
                    </div>
                    <table className = "mt-[1rem] w-[93%]">
                        <thead>
                            <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk w-full">
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Matchday</th>
                                <th className = "w-[5%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Date</th>
                                <th className = "w-[5%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Venue</th>
                                <th className = "w-[5%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">For</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Opponent</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Result</th>
                                <th className = "w-[5%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Pos.</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{player?.position === 'Goalkeeper' ? 'Clean Sheet' : 'Goals'}</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{player?.position === 'Goalkeeper' ? 'Goal Conceded' : 'Assists'}</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Yellow Card</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Red Card</th>
                                <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Minute Played</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterStats.map((stat) => {
                                return (
                                    stat?.status === 'InSquad' ?
                                    (
                                        <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.matchDay}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.date}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.venue}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                <img src = {stat?.teamPlayForLink} alt = "" className = "w-[1.5rem] h-[1rem] relative left-[30%]"/>
                                            </td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                <div className = "flex relative left-[10%] top-[0.35rem]">
                                                    <span>
                                                        <img src = {stat?.opponentLink} alt = "" className = "w-[1.5rem] h-[1rem]" />
                                                    </span>
                                                    <p className = "font-space-grotesk text-lg relative bottom-[0.3rem] left-[10%]">{stat?.opponentName}</p>
                                                </div>
                                            </td>
                                            <td className='border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]'>
                                                <div className = "flex relative left-[20%]">
                                                    <p className = {stat?.result === 'W' ? 'text-greenFootball font-bold text-2xl' : 'text-red-500 font-bold text-2xl'}>{stat?.result}</p>
                                                    <p className={stat?.result === 'W' ? "font-space-grotesk text-xl text-greenFootball font-bold relative left-[15%] top-[0.3rem]" : "font-space-grotesk text-xl text-red-500 font-bold relative left-[15%] top-[0.3rem]"}>{stat?.detailScore}</p>
                                                </div>
                                            </td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.position}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{player?.position === 'Goalkeeper' ? (stat?.cleanSheets ? stat?.cleanSheets : '-') : (stat?.goals ? stat?.goals : '-')}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{player?.position === 'Goalkeeper' ? (stat?.goalConceded ? stat?.goalConceded : '-') : (stat?.assists ? stat?.assists : '-')}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.yellowCardMinute ? stat?.yellowCardMinute : '-'}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.redCardMinute ? stat?.redCardMinute : '-'}</td>
                                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.minutePlayed ? `${stat?.minutePlayed}'` : '-'}</td>
                                        </tr> 
                                    ) : 
                                    (stat?.status === 'OnTheBench' ? 
                                        (
                                            <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.matchDay}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.date}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.venue}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                    <img src = {stat?.teamPlayForLink} alt = "" className = "w-[1.5rem] h-[1rem] relative left-[30%]"/>
                                                </td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                    <div className = "flex relative left-[10%] top-[0.35rem]">
                                                        <span>
                                                            <img src = {stat?.opponentLink} alt = "" className = "w-[1.5rem] h-[1rem]" />
                                                        </span>
                                                        <p className = "font-space-grotesk text-lg relative bottom-[0.3rem] left-[10%]">{stat?.opponentName}</p>
                                                    </div>
                                                </td>
                                                <td className='border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]'>
                                                    <div className = "flex relative left-[20%]">
                                                        <p className = {stat?.result === 'W' ? 'text-greenFootball font-bold text-2xl' : 'text-red-500 font-bold text-2xl'}>{stat?.result}</p>
                                                        <p className={stat?.result === 'W' ? "font-space-grotesk text-xl text-greenFootball font-bold relative left-[15%] top-[0.3rem]" : "font-space-grotesk text-xl text-red-500 font-bold relative left-[15%] top-[0.3rem]"}>{stat?.detailScore}</p>
                                                    </div>
                                                </td>
                                                <td colSpan={6} className='border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem] bg-easeYellow'>On The Bench</td>
                                            </tr> 
                                        ) : 
                                        (
                                            <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.matchDay}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.date}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">{stat?.venue}</td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                    <img src = {stat?.teamPlayForLink} alt = "" className = "w-[1.5rem] h-[1rem] relative left-[30%]"/>
                                                </td>
                                                <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]">
                                                    <div className = "flex relative left-[10%] top-[0.35rem]">
                                                        <span>
                                                            <img src = {stat?.opponentLink} alt = "" className = "w-[1.5rem] h-[1rem]" />
                                                        </span>
                                                        <p className = "font-space-grotesk text-lg relative bottom-[0.3rem] left-[10%]">{stat?.opponentName}</p>
                                                    </div>
                                                </td>
                                                <td className='border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem]'>
                                                    <div className = "flex relative left-[20%]">
                                                        <p className = {stat?.result === 'W' ? 'text-greenFootball font-bold text-2xl' : 'text-red-500 font-bold text-2xl'}>{stat?.result}</p>
                                                        <p className={stat?.result === 'W' ? "font-space-grotesk text-xl text-greenFootball font-bold relative left-[15%] top-[0.3rem]" : "font-space-grotesk text-xl text-red-500 font-bold relative left-[15%] top-[0.3rem]"}>{stat?.detailScore}</p>
                                                    </div>
                                                </td>
                                                <td colSpan={6} className='border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[0.5rem] bg-easeYellow'>On The Bench</td>
                                            </tr> 
                                        )
                                    )
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        })}
    </div>
  )
}

export default PlayerProfileNationalDetailMatchStats
