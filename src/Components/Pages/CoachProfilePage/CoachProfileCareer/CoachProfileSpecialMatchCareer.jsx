import React from 'react'

const CoachProfileSpecialMatchCareer = ({coach, specialMatchCareerType}) => {
  return (
    <div>
        {/* header */}
        <div className = "w-[93%] bg-easeGreen text-center py-[0.5rem] mt-[2.5rem]">
            <p className = "font-teko font-bold text-xl relative top-[0.1rem]">SPECIAL MATCHES</p>
        </div>

        {/* table */}
        <table className = "w-[93%] mt-[1rem]">
            <thead>
                <tr className = "h-[2rem] border-solid border-b-[1px] border-b-gray-500 bg-mediumGreen font-space-grotesk">
                    <th className = "w-[35%] border-solid border-r-[1px] border-r-gray-500">Competition</th>
                    <th className = "w-[20%] border-solid border-r-[1px] border-r-gray-500">Club</th>
                    <th className = "w-[20%] border-solid border-r-[1px] border-r-gray-500">Date</th>
                    <th className = "w-[25%] border-solid border-r-[1px] border-r-gray-500">Match</th>
                </tr>
            </thead>
            {[...specialMatchCareerType].map((type) => {
                const filteredCareer = coach?.specialMatchCareers.filter(career => career?.type === type);
                return (
                    <tbody>
                        <tr className = "h-[2rem] bg-easeGreen text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                            <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem] text-left" colSpan={5}>
                                <span className = "relative left-[2%]">{type}</span>
                            </td>
                        </tr>
                        {filteredCareer.map((career) => {
                            return (
                                <tr className = "h-[2rem] bg-easeWhite text-center border-solid border-b-[1px] border-b-gray-500 font-space-grotesk">
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{career?.competitionName}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                        <span>
                                            <img src = {career?.clubLogoLink} alt = "" className='w-[1.5rem] h-[1.5rem] relative left-[45%]' />
                                        </span>
                                    </td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">{career?.date}</td>
                                    <td className = "border-solid border-r-[1px] border-r-gray-500 h-[2rem]">
                                        <span className = "flex">
                                            <img src = {career?.clubLogoLink} alt = "" className='w-[1.5rem] h-[1.5rem] relative left-[5%]'/>
                                            <p className = "relative left-[40%] font-bold">{career?.score}</p>
                                            <img src = {career?.opponentLogoLink} alt = "" className = "w-[1.5rem] h-[1.5rem] relative left-[70%]" />
                                        </span>
                                    </td>
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

export default CoachProfileSpecialMatchCareer
