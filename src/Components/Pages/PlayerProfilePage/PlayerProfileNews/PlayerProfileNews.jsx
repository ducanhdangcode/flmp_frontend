import React from 'react'

const PlayerProfileNews = ({player}) => {
  return (
    <div className = "relative left-[2rem] mt-[1.5rem]">
        {/* header */}
        <div className = "w-[93%] bg-hardGreen text-center">
            <p className = "font-teko text-2xl text-white font-bold py-[0.3rem] relative top-[0.1rem]">News</p>
        </div>

        {/* news preview */}
        <div className = "w-[93%] mt-[1.5rem] flex">
            <div className = "w-[60%] bg-easeGreen rounded-[8px] flex">
                <img src = {player?.personalDetailNews[0].newsImageLink} alt = "" className = "w-[50%] h-[25rem] rounded-tl-[8px] rounded-bl-[8px]"/>
                <div className = "w-[50%]">
                    <p className = "font-bold font-teko text-2xl relative top-[5rem] left-[3%] w-[90%] hover:underline hover:cursor-pointer">{player?.personalDetailNews[0].title}</p>
                    <p className = "font-teko text-xl relative top-[5.5rem] left-[3%] w-[90%]">{player?.personalDetailNews[0].description}...</p>
                    <div className = "relative left-[3%] top-[8rem] flex">
                        <img src = {"https://img.freepik.com/premium-vector/soccer-ball-football-cartoon-icon-vector-illustration-sports-icon-concept-illustration-suitable-icon-logo-sticker-clipart_401949-556.jpg"} alt = "" className = "w-[2.5rem] h-[2.5rem] rounded-[50%]" />
                        <p className = "font-teko text-xl font-bold relative left-[2%] top-[0.4rem]">{player?.personalDetailNews[0].authorName}</p>
                        <p className = "font-teko text-xl relative left-[10%] top-[0.4rem]">{`Published at ${player?.personalDetailNews[0].createdAt.substring(0,10)}`}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerProfileNews
