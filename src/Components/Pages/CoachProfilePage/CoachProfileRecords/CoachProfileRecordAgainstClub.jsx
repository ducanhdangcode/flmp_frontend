import React from 'react'

const CoachProfileRecordAgainstClub = ({coach}) => {
  return (
    <div>
        {/* header */}
        <div className = "w-[93%] bg-easeGreen text-center py-[0.5rem] mt-[2.5rem]">
            <p className = "font-teko font-bold text-xl relative top-[0.1rem]">RECORD AGAINST CLUBS</p>
        </div>

        {/* table */}
        <table className = "mt-[1rem] w-[93%]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                    <th className = "w-[30%] border-solid border-r-[1px] border-r-gray-500">Club</th>
                    <th className = "w-[14%] border-solid border-r-[1px] border-r-gray-500">Matches</th>
                    <th className = "w-[14%] border-solid border-r-[1px] border-r-gray-500">Wins</th>
                    <th className = "w-[14%] border-solid border-r-[1px] border-r-gray-500">Draws</th>
                    <th className = "w-[14%] border-solid border-r-[1px] border-r-gray-500">Loses</th>
                    <th className = "w-[14%] border-solid border-r-[1px] border-r-gray-500">PPM</th>
                </tr>
            </thead>
            <tbody>
                {coach?.recordsAgainstClub.map((record) => {
                    return (
                        <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                <span className = "flex relative left-[5%]">
                                    <img src = {record?.clubLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                    <div className = "relative left-[5%]">
                                        <p className = "relative top-[0.2rem]">{record?.clubName}</p>
                                    </div>
                                </span>
                            </td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{record?.matches}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{record?.wins}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{record?.draws}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{record?.loses}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{((record?.wins*3+record?.draws)/(record?.matches)).toFixed(2)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CoachProfileRecordAgainstClub
