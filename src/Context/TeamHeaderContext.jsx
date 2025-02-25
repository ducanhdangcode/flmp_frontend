import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import { addFavoriteTeam, getUserByUsername, removeFavoriteTeam } from "../APIService/UserService.";
import { updateFavoriteState } from "../APIService/TeamService";

const TeamHeaderContext = createContext();

export const TeamHeaderProvider = ({children}) => {
    const [teamId, setTeamId] = useState(localStorage.getItem("team-id"));
    const [storedTeamLogo, setStoredTeamLogo] = useState(localStorage.getItem("team-logo"));
    const [detailLogoWidth, setDetailLogoWidth] = useState(localStorage.getItem("detail-logo-width"));
    const [detailLogoHeight, setDetailLogoHeight] = useState(localStorage.getItem("detail-logo-height"));
    const [detailLogoTop, setDetailLogoTop] = useState(localStorage.getItem("detail-logo-top"));
    const [detailLogoLeft, setDetailLogoLeft] = useState(localStorage.getItem("detail-logo-left"));
    const [detailNameBottom, setDetailNameBottom] = useState(localStorage.getItem("detail-name-bottom"));
    const [checkSelectOverview, setCheckSelectOverview] = useState("true");
    const [checkSelectFixtures, setCheckSelectFixtures] = useState("");
    const [checkSelectResult, setCheckSelectResult] = useState("");
    const [checkSelectNews, setCheckSelectNews] = useState("");
    const [checkSelectSquad, setCheckSelectSquad] = useState("");

    const {loginUsername} = useUserContext();

    useEffect(() => {
        localStorage.setItem("team-id", teamId);
        localStorage.setItem("team-logo", storedTeamLogo);
        localStorage.setItem("detail-logo-width", detailLogoWidth);
        localStorage.setItem("detail-logo-height", detailLogoHeight);
        localStorage.setItem("detail-logo-top", detailLogoTop);
        localStorage.setItem("detail-logo-left", detailLogoLeft);
        localStorage.setItem("detail-name-bottom", detailNameBottom);
    }, [teamId, storedTeamLogo, detailLogoWidth, detailLogoHeight, detailLogoTop, detailLogoLeft, detailNameBottom]);

    const setupSelectedBar = (overviewChoice, fixturesChoice, resultChoice, newsChoice, squadChoice) => {
        setCheckSelectOverview(overviewChoice);
        setCheckSelectFixtures(fixturesChoice);
        setCheckSelectResult(resultChoice);
        setCheckSelectNews(newsChoice);
        setCheckSelectSquad(squadChoice);
    }

    const handleAddFavoriteTeam = () => {
        getUserByUsername(loginUsername).then((response) => {
            addFavoriteTeam(response.data.id, teamId).catch(err => console.error(err));
        }).catch(err => console.error(err));
        updateFavoriteState(teamId, "favorite").catch(err => console.error(err));
    }

    const handleRemoveFavoriteTeam = () => {
        getUserByUsername(loginUsername).then((response) => {
            removeFavoriteTeam(response.data.id, teamId).catch(err => console.error(err));
        }).catch(err => console.error(err));
        updateFavoriteState(teamId, "unfavorite").catch(err => console.error(err));
    }

    return (
        <TeamHeaderContext.Provider
            value = {{
                teamId, 
                setTeamId, 
                storedTeamLogo, 
                setStoredTeamLogo, 
                detailLogoWidth, 
                setDetailLogoWidth, 
                detailLogoHeight,
                setDetailLogoHeight, 
                detailLogoTop, 
                setDetailLogoTop, 
                detailLogoLeft, 
                setDetailLogoLeft, 
                detailNameBottom, 
                setDetailNameBottom,
                checkSelectOverview, 
                setCheckSelectOverview, 
                checkSelectFixtures, 
                setCheckSelectFixtures, 
                checkSelectResult,
                setCheckSelectResult, 
                checkSelectNews, 
                setCheckSelectNews, 
                checkSelectSquad, 
                setCheckSelectSquad, 
                setupSelectedBar, 
                handleAddFavoriteTeam, 
                handleRemoveFavoriteTeam
            }}
        >
            {children}
        </TeamHeaderContext.Provider>
    )
}

export const useTeamHeaderContext = () => {
    const context = useContext(TeamHeaderContext);
    if (!context) {
        throw new Error("useTeamHeaderContext must be used inside provider");
    }
    return context;
}