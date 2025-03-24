import React from 'react'

const PlayerProfileTransfersHistory = ({player}) => {
  return (
    <div className = "relative left-[2rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">Transfers History</p>
        </div>

        {/* table */}
        <table className = "mt-[1rem] w-[93%]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk w-full">
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Season</th>
                    <th className = "w-[15%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Date</th>
                    <th className = "w-[25%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Left</th>
                    <th className = "w-[25%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Joined</th>
                    <th className = "w-[10%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Fee</th>
                    <th className = "w-[15%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Options</th>
                </tr>
            </thead>
            <tbody>
                {player?.transfers.map((transfer) => {
                    return (
                        <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-easeWhite font-space-grotesk w-full">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[1rem]">{transfer?.season}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center">{transfer?.date}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                <div className = "flex">
                                    <span>
                                        <img src = {transfer?.teamLeftLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                    </span>
                                    <span className = "relative left-[2%] top-[0.3rem]">
                                        <img src = {transfer?.teamLeftCountryLink} alt = "" className = "w-[1.5rem] h-[1.5rem]" />
                                    </span>
                                    <span>
                                        <p className = "font-space-grotesk text-lg relative left-[20%] top-[0.2rem]">{transfer?.teamLeft}</p>
                                    </span>
                                </div>
                            </td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                <div className = "flex">
                                    <span>
                                        <img src = {transfer?.teamJoinedLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                    </span>
                                    <span className = "relative left-[2%] top-[0.3rem]">
                                        <img src = {transfer?.teamJoinedCountryLink} alt = "" className = "w-[1.5rem] h-[1.5rem]" />
                                    </span>
                                    <span>
                                        <p className = "font-space-grotesk text-lg relative left-[15%] top-[0.2rem]">{transfer?.teamJoined}</p>
                                    </span>
                                </div>
                            </td>
                            
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center">{transfer?.fee}</td>
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center">{transfer?.options}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default PlayerProfileTransfersHistory
