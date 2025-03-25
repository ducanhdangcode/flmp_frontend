import React from 'react'

const PlayerProfileTransfersYouthClub = ({player}) => {
  return (
    <div className = "relative left-[2rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">Youth Clubs</p>
        </div>

        {/* table */}
        <table className = "mt-[1rem] w-[93%]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk w-full">
                    <th className = "w-[25%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Joined</th>
                    <th className = "w-[25%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Left</th>
                    <th className = "w-[50%] border-solid border-r-[1px] border-r-gray-500 h-[2rem]">Club</th>
                </tr>
            </thead>
            <tbody>
              {player?.youthClubs.map((youthClub) => {
                  return (
                      <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-easeWhite font-space-grotesk w-full">
                          <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[1rem]">{youthClub?.startYear}</td>
                          <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-center py-[1rem]">{youthClub?.endYear}</td>
                          <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                              <div className = "flex relative left-[40%]">
                                  <span>
                                      <img src = {youthClub?.clubLogoLink} alt = "" className = "w-[2rem] h-[2rem]" />
                                  </span>
                                  <span className = "relative left-[2%] top-[0.3rem]">
                                      <img src = {youthClub?.clubCountryLink} alt = "" className = "w-[1.5rem] h-[1.5rem]" />
                                  </span>
                                  <span>
                                      <p className = "font-space-grotesk text-lg relative left-[40%] top-[0.2rem]">{youthClub?.name}</p>
                                  </span>
                              </div>
                          </td>
                          
                      </tr>
                  )
              })}
            </tbody>
        </table>
    </div>
  )
}

export default PlayerProfileTransfersYouthClub
