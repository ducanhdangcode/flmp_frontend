import React, { useEffect, useState } from 'react'
import DetailOverview from './DetailTeamPage/DetailOverview/DetailOverview'
import { ListTeams, UpdateTeam } from '../../../APIService/TeamService';
import { listUsers, updateUser } from '../../../APIService/UserService.';
import { FaStar } from 'react-icons/fa6';
import DetailSquad from './DetailTeamPage/DetailSquad/DetailSquad';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import Spinner from '../../Spinners/Spinner';
import { useSpinnerContext } from '../../../Context/SpinnerContext';
import CustomSpinner from '../../Spinners/CustomSpinner';

const DetailTeam = ({teamId, teamLogo, detailLogoHeight, detailLogoWidth, detailLogoTop, detailLogoLeft, detailNameBottom, teamVideoTitles, teamKits, teamChairman, handleFavorite, recentId}) => {
    const [storedTeamLogo, setStoredTeamLogo] = useState(teamLogo);
    const [teamList, setTeamList] = useState([]);

    // check hover and active bottom-bar
    const [checkSelectOverview, setCheckSelectOverview] = useState("true");
    const [checkSelectFixtures, setCheckSelectFixtures] = useState("");
    const [checkSelectResult, setCheckSelectResult] = useState("");
    const [checkSelectNews, setCheckSelectNews] = useState("");
    const [checkSelectSquad, setCheckSelectSquad] = useState("");

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorite-team')));
    const [userlist, setUserlist] = useState([]);

    const [FormationCoordinate, setFormationCoordinate] = useState([]);

    const [customSpinner, setCustomSpinner] = useState(false);

    useEffect(() => {
        localStorage.setItem('favorite-team', JSON.stringify(favorites));
    }, [favorites])

    useEffect(() => {
        setupActiveTeam();
    }, [teamList])

    useEffect(() => {
        listUsers().then((response) => {
            setUserlist(response.data);
        })
    }, [])

    useEffect(() => {
            fetch("/FormationCoordinate.json")
                .then(response => response.json())
                .then(json => setFormationCoordinate(json))
                .catch(err => console.error(err));
        }, [])

  const setupSelectedBar = (overviewChoice, fixturesChoice, resultChoice, newsChoice, squadChoice) => {
      setCheckSelectOverview(overviewChoice);
      setCheckSelectFixtures(fixturesChoice);
      setCheckSelectResult(resultChoice);
      setCheckSelectNews(newsChoice);
      setCheckSelectSquad(squadChoice);
  }

  const setupActiveTeam = () => {
      ListTeams().then((response) => {
          setTeamList(response.data);
      }).catch(err => console.error(err));
  }

  const handleAddFavoriteTeams = () => {
    setFavorites([...favorites, teamId])
    let updatedUser = {
        username: userlist[recentId-1]?.username, 
        password: userlist[recentId-1]?.password,
        email: userlist[recentId-1]?.email,
        firstname: userlist[recentId-1]?.firstname, 
        lastname: userlist[recentId-1]?.lastname, 
        avatar: userlist[recentId-1]?.avatar, 
        favoriteTeams: [...favorites, teamId]
    }
    updateUser(recentId, updatedUser).then((response) => {
        // console.log(response.data);
    })
    console.log("favorites: " + favorites);

    let updatedTeam = {
        logo: teamList[teamId-1]?.logo, 
        name: teamList[teamId-1]?.name, 
        color: teamList[teamId-1]?.color, 
        trophies: teamList[teamId-1]?.trophies, 
        stadium: teamList[teamId-1]?.stadium, 
        kitColors: teamList[teamId-1]?.kitColors, 
        chairmanName: teamList[teamId-1]?.chairmanName, 
        chairmanDescription: teamList[teamId-1]?.chairmanDescription, 
        videoLinks: teamList[teamId-1]?.videoLinks, 
        favoriteState: "favorite", 
        stadiumTotalSeat: teamList[teamId-1]?.stadiumTotalSeat, 
        stadiumOpenDate: teamList[teamId-1]?.stadiumOpenDate, 
        stadiumLocation: teamList[teamId-1]?.stadiumLocation, 
        stadiumCost: teamList[teamId-1]?.stadiumCost
    }
    UpdateTeam(teamId, updatedTeam).then((res) => {

    })
}

const handleRemoveFavoriteTeam = () => {
    setFavorites((prev) => prev.filter((item) => item !== teamId));
    let updatedUser = {
        username: userlist[recentId-1]?.username, 
        password: userlist[recentId-1]?.password,
        email: userlist[recentId-1]?.email,
        firstname: userlist[recentId-1]?.firstname, 
        lastname: userlist[recentId-1]?.lastname, 
        avatar: userlist[recentId-1]?.avatar, 
        favoriteTeams: favorites.filter(item => item !== teamId)
    }
    updateUser(recentId, updatedUser).then((response) => {
        // console.log(response.data);
    })
    console.log("favorites: " + favorites);

    let updatedTeam = {
        logo: teamList[teamId-1]?.logo, 
        name: teamList[teamId-1]?.name, 
        color: teamList[teamId-1]?.color, 
        trophies: teamList[teamId-1]?.trophies, 
        stadium: teamList[teamId-1]?.stadium, 
        kitColors: teamList[teamId-1]?.kitColors, 
        chairmanName: teamList[teamId-1]?.chairmanName, 
        chairmanDescription: teamList[teamId-1]?.chairmanDescription, 
        videoLinks: teamList[teamId-1]?.videoLinks, 
        favoriteState: "unfavorite", 
        stadiumTotalSeat: teamList[teamId-1]?.stadiumTotalSeat, 
        stadiumOpenDate: teamList[teamId-1]?.stadiumOpenDate, 
        stadiumLocation: teamList[teamId-1]?.stadiumLocation, 
        stadiumCost: teamList[teamId-1]?.stadiumCost
    }
    UpdateTeam(teamId, updatedTeam).then((res) => {

    })
}
  return (
    <div>
        <ScrollToTop />
        <div className = "w-full relative top-24" style = {{}}>
            <div className = "relative w-full" style = {{top: "0rem", height: "23rem", backgroundColor: "#a6a5a4"}}>
                <img src = {storedTeamLogo} alt = "" className = "relative" style = {{width: `${detailLogoWidth}rem`, height: `${detailLogoHeight}rem`, top: `${detailLogoTop}rem`, left: `${detailLogoLeft}rem`}}/>
                {teamList.length > 0 && <p className = "relative font-roboto font-bold" style = {{left: "22rem", bottom: "8.5rem", fontSize: "6rem"}}>{teamList[teamId - 1]?.name.toUpperCase()}</p>}
                <div className = "relative flex" style = {{bottom: `${detailNameBottom}rem`, left: "6rem"}}>
                    <div className = {!checkSelectOverview ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("true", "", "", "", "")}>
                        <p>Overview</p>
                    </div>
                    <div className = {!checkSelectFixtures ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "true", "", "", "")}>
                        <p>Fixtures</p>
                    </div>
                    <div className = {!checkSelectResult ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "true", "", "")}>
                        <p>Result</p>
                    </div>
                    <div className = {!checkSelectNews ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => setupSelectedBar("", "", "", "true", "")}>
                        <p>News</p>
                    </div>
                    <div className = {!checkSelectSquad ? "text-center font-ubuntu text-xl hover:border-b-4 hover: border-b-black hover:cursor-pointer" : "text-center font-ubuntu text-xl border-b-4 border-b-blue-600 hover:cursor-pointer"} style = {{width: "10rem", height: "2.5rem"}} onClick = {() => {
                        setupSelectedBar("", "", "", "", "");
                        setCustomSpinner(true);
                        setTimeout(() => {
                            setCustomSpinner(false);
                            setupSelectedBar("", "", "", "", "true");
                        }, 1000);
                    }}>
                        <p>Squad</p>
                    </div>
                </div>
                <div className = "absolute z-10" style = {{top: "17rem", left: "80rem"}}>
                    {teamList[teamId-1]?.favoriteState === "unfavorite" ? <button className = "rounded-2xl bg-white" style = {{width: "13rem", height: "4rem", borderWidth: "4px", borderColor: teamList[teamId-1]?.color}} onClick = {handleAddFavoriteTeams}>
                        <span><FaStar className = "relative top-3 left-2" style = {{width: "2.2rem", height: "2.2rem"}}/></span>
                        <span className = "text-3xl font-ubuntu relative" style = {{bottom: "1.8rem", left: "1rem", color: teamList[teamId-1]?.color}}>Favorite</span>
                    </button> : 
                    <button className = "rounded-2xl bg-white" style = {{width: "13rem", height: "4rem", borderWidth: "4px", borderColor: teamList[teamId-1]?.color}} onClick={handleRemoveFavoriteTeam}>
                        <span><FaStar className = "relative top-3 left-2" style = {{width: "2.2rem", height: "2.2rem"}}/></span>
                        <span className = "text-3xl font-ubuntu relative" style = {{bottom: "1.8rem", left: "1rem", color: teamList[teamId-1]?.color}}>Unfavorite</span>
                    </button>}
                </div>
            </div>
            {checkSelectOverview === "true" && 
                <>
                    <DetailOverview teamId={teamId} teamLogo={teamLogo} detailLogoHeight={detailLogoHeight} detailLogoWidth={detailLogoWidth} detailLogoTop={detailLogoTop} detailLogoLeft={detailLogoLeft} detailNameBottom={detailNameBottom} teamVideoTitles={teamVideoTitles} teamKits = {teamKits} teamChairman = {teamChairman} handleFavorite = {handleFavorite} recentId = {recentId} teamList = {teamList} />
                </>
            }

            {checkSelectSquad === "true" && 
                <>
                    <DetailSquad teamId = {teamId} teamList = {teamList} FormationCoordinate = {FormationCoordinate}/>
                </>
            }

            {customSpinner === true && 
                <CustomSpinner />
            }
        </div>
    </div>
  )
}

export default DetailTeam
