import React from 'react'

const CoachProfileHeader = ({coach, storedTeamLogo, detailLogoHeight, detailLogoWidth, detailLogoLeft, currentContract}) => {
    
  return (
    <div>
      <div className = "flex">
            {/* coach profile */}
            <div className = "mt-[2rem] relative left-[2rem] bg-mediumGreen w-[50%] h-[18rem] rounded-[5px] flex">
                {/* image */}
                <img src = {coach?.imageLink} alt = "" className = "w-[25%] h-[15rem] relative left-[1rem] top-[1.5rem]" />

                {/* other information */}
                <div className = "relative left-[2.5rem] top-[1.2rem]">
                    {/* name */}
                    <p className = "font-alfa font-bold text-2xl">{coach?.name}</p>
                    <div className = "flex relative top-[0.5rem] bg-easeGreen h-[12.5rem] right-[1rem] w-[35vw] rounded-[5px]">
                        {/* first col */}
                        <div className = "font-ubuntu relative top-[1.5rem] left-[1rem]">
                            {/* date of birth */}
                            <p>Date of birth: <span className = "font-bold">{coach?.birthDate}</span></p>
                            {/* height */}
                            <p className = "relative top-[1rem]">Height: <b>{coach?.height}</b></p>
                            {/* birth place */}
                            <div className = "flex relative top-[2rem]">
                            <p className = "">Place of birth: <b>{coach?.birthPlace}</b></p>
                            <img src = {coach?.nationalityImage} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" />
                            </div>
                            {/* nationality */}
                            <div className = "flex relative top-[3rem]">
                            <p>Nationality: <b>{coach?.nationality}</b></p>
                            <img src = {coach?.nationalityImage} alt = "" className = "w-[1.2rem] h-[1.2rem] relative left-[0.5rem] top-[0.1rem]" />
                            </div>
                        </div>

                        {/* second col */}
                        <div className = "font-ubuntu relative top-[1.5rem] left-[4rem]">
                        {/* position */}
                        <p>Coaching license: <b>{coach?.coachingLicense}</b></p>
                        {/* other position */}
                        <p className = "relative top-[1rem]">Avg. term as coach:<b>{coach?.averageTerm}</b></p>
                        {/* preferred foot */}
                        <p className = "relative top-[2rem]">Preferred formation: <b>{coach?.preferredFormation}</b></p>
                        {/* former international */}
                        <p className = "relative top-[3rem]">Agent: <b>{coach?.agent}</b></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* coach contract info */}
            <div className = "w-[40%] h-[18rem] bg-mediumGreen mt-[2rem] left-[5rem] relative rounded-[5px] flex">
                {/* team logo */}
                <div style={{marginLeft: `${detailLogoLeft/2}rem`}} className = "top-[1rem] relative">
                    <img src = {storedTeamLogo} className = "relative right-[2rem] top-[2rem]" alt = "" style = {{width: `${detailLogoWidth/1.2}rem`, height: `${detailLogoHeight/1.2}rem`}} />
                </div>

                {/* contract info */}
                <div className = "w-[55%] h-[15rem] bg-easeGreen relative right-[2rem] top-[1.5rem] rounded-[7px] font-ubuntu" style = {{marginLeft: `${detailLogoLeft/2}rem`}}>
                    <div className = "mt-[1.5rem]">
                    <p className = "text-lg relative left-[1rem]">Appointed: <b>{currentContract?.appointed}</b></p>
                    <p className = "text-lg relative left-[1rem] top-[1rem]">Contract until: <b>{currentContract?.contractUntil}</b></p>
                    <p className = "text-lg relative left-[1rem] top-[2rem]">Contract fee: <b className = "">{`${currentContract?.contractFee.toFixed(2)}M`}</b></p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CoachProfileHeader
