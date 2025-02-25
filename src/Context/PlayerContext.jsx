import React, { createContext, useContext, useEffect, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [playerName, setPlayerName] = useState(localStorage.getItem("player-name"));

    useEffect(() => {
        localStorage.setItem("player-name", playerName);
    }, [playerName]);

    return (
        <PlayerContext.Provider
            value = {{
                playerName, 
                setPlayerName
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayerContext must be used inside provider");
    }
    return context;
}
