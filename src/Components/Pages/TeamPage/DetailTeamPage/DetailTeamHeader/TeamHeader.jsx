import React from 'react'
import { FaStar } from 'react-icons/fa';

const TeamHeader = ({storedTeamLogo, detailLogoWidth, detailLogoHeight, detailLogoTop, detailLogoLeft, team, teamId, detailNameBottom, checkSelectOverview, checkSelectFixtures, checkSelectResult, checkSelectNews, checkSelectSquad, setupSelectedBar, setupCustomSpinner, handleAddFavoriteTeams, handleRemoveFavoriteTeam}) => {
  return (
    <div>
        <div className = "relative w-full bg-easeGreen" style = {{top: "0rem", height: "23rem"}}>
            <img src = {storedTeamLogo} alt = "" className = "relative" style = {{width: `${detailLogoWidth}rem`, height: `${detailLogoHeight}rem`, top: `${detailLogoTop}rem`, left: `${detailLogoLeft}rem`}}/>
            {team && <p className = "relative font-teko font-bold" style = {{left: "22rem", bottom: "8.5rem", fontSize: "6rem"}}>{team?.name.toUpperCase()}</p>}
            <div className = "absolute flex" style = {{bottom: '0rem', left: "6rem"}}>
                <div className = {!checkSelectOverview ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-greenFootball hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("true", "", "", "", "")}>
                    <p>Overview</p>
                </div>
                <div className = {!checkSelectFixtures ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-greenFootball hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "true", "", "", "")}>
                    <p>Fixtures</p>
                </div>
                <div className = {!checkSelectResult ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-greenFootball hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "true", "", "")}>
                    <p>Result</p>
                </div>
                <div className = {!checkSelectNews ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-greenFootball hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "", "true", "")}>
                    <p>News</p>
                </div>
                <div className = {!checkSelectSquad ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-greenFootball hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => {
                    setupSelectedBar("", "", "", "", "");
                    setupCustomSpinner(true);
                    setTimeout(() => {
                        setupCustomSpinner(false);
                        setupSelectedBar("", "", "", "", "true");
                    }, 1000);
                }}>
                    <p>Squad</p>
                </div>
            </div>

            <div className = "absolute z-10" style = {{top: "17rem", left: "80rem"}}>
                {team?.favoriteState === "unfavorite" ? <button className = "rounded-2xl bg-white border-greenFootball" style = {{width: "13rem", height: "4rem", borderWidth: "4px"}} onClick = {handleAddFavoriteTeams}>
                    <span><FaStar className = "relative top-3 left-2" style = {{width: "2.2rem", height: "2.2rem"}}/></span>
                    <span className = "text-3xl font-ubuntu relative text-greenFootball" style = {{bottom: "1.8rem", left: "1rem"}}>Favorite</span>
                </button> : 
                <button className = "rounded-2xl bg-white" style = {{width: "13rem", height: "4rem", borderWidth: "4px", borderColor: team?.color}} onClick={handleRemoveFavoriteTeam}>
                    <span><FaStar className = "relative top-3 left-2" style = {{width: "2.2rem", height: "2.2rem"}}/></span>
                    <span className = "text-3xl font-ubuntu relative" style = {{bottom: "1.8rem", left: "1rem", color: team?.color}}>Unfavorite</span>
                </button>}
            </div>
        </div>
    </div>
  )
}

export default TeamHeader
