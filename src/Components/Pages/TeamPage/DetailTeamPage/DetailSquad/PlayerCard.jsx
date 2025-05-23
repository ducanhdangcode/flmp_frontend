import React from 'react'
import ViewProfile from './ViewProfile'
import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../../../../Context/PlayerContext';

const PlayerCard = ({teamId, team, player, statisticTitle1, statisticTitle2, statisticTitle3, statisticTitle4, statistic1, statistic2, statistic3, statistic4, name, shirtNumber, position, nationality, nationalityImageLink}) => {
    const {setPlayerName} = usePlayerContext();

    const toSlug = (text) => {
      if (text) {
        return text.toLowerCase().replace(/\s+/g, '-'); 
      }
    };
    
    const setupPlayerName = (playerName) => {
        setPlayerName(playerName);
        localStorage.setItem("player-name", playerName);
    }
    return (
      <div className = "relative" style = {{width: "20rem", height: "25rem", backgroundColor: "white", borderRadius: "11px", boxShadow: `0.3rem 0.3rem 0.4rem #1F7D53`, top: "4rem", right: "9.6rem", marginRight: "2rem", marginBottom: "3rem"}}>
          <div className = "flex">
              <div className = "relative bg-easeGreen" style = {{width: "8rem", height: "16rem", borderTopLeftRadius: "11px"}}>
                <p className = "text-sm font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.2rem"}}>{statisticTitle1}</p>
                <p className = "text-2xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.1rem"}}>{statistic1}</p>
                <p className = "text-sm font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.3rem"}}>{statisticTitle2}</p>
                <p className = "text-2xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.3rem"}}>{statistic2}</p>
                <p className = "text-sm font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.4rem"}}>{statisticTitle3}</p>
                <p className = "text-2xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.4rem"}}>{statistic3}</p>
                <p className = "text-sm font-noticia-text font-bold relative" style = {{textAlign: "center", top: "0.5rem"}}>{statisticTitle4}</p>
                <p className = "text-2xl font-alfa font-bold relative" style = {{textAlign: "center", color: "#2e0629", top: "0.5rem"}}>{statistic4}</p>
              </div>
              <div  className = "relative" style = {{width: "12rem", height: "16rem", borderTopRightRadius: "11px"}}>
                  <img src = {player?.imageLink} alt = "" style = {{width: "12rem", height: "16rem", borderTopRightRadius: "11px"}}/>
              </div>
          </div>
          <div className = "block bg-[#edebca] rounded-bl-[11px] rounded-br-[11px]" style = {{height: "9rem"}}>
              <div className = "relative" style = {{left: "1rem", top: "0.5rem"}}>
                <div className = "relative" style = {{left: "0rem", bottom: "0rem"}}>
                    <p className = "text-[1.3rem] font-alfa font-bold relative text-[#3d032a]">{name}</p>
                    <div className = "flex">
                    <p className = "text-lg font-noticia-text font-bold relative" style = {{bottom: "0.2rem"}}>{`#${shirtNumber}`}</p>
                    <p className = "text-lg font-noticia-text relative" style = {{bottom: "0.2rem", left: "0.5rem"}}>{position}</p>
                    </div>
                </div>
              </div>
              <div className = "relative flex" style = {{top: "2rem", left: "1rem"}}>
                  <img src = {nationalityImageLink} alt = "" className = "absolute" style = {{width: "3rem", height: "2rem"}} />
                  <p className = "font-ubuntu text-lg absolute w-[5rem]" style = {{left: "3.5rem"}}>{nationality}</p>
                  <div className = "absolute" style = {{left: "10.3rem"}} onClick = {() => setupPlayerName(player?.name)}>
                      <Link to = {`/team/${toSlug(player?.team)}/${toSlug(player?.name)}`}>
                        <ViewProfile />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default PlayerCard
