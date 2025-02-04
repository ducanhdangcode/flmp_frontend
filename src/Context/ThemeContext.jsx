import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const lightColor = "#e9f2eb";
    const darkColor = "#0c0a30";
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value = {{
                theme, 
                setTheme,
                lightColor, 
                darkColor
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}