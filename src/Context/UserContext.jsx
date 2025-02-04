import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [loginUsername, setLoginUsername] = useState(localStorage.getItem("login-username"));
    const [loginFirstname, setLoginFirstname] = useState(localStorage.getItem("login-firstname"));
    const [loginLastname, setLoginLastname] = useState(localStorage.getItem("login-lastname"));
    const [loginEmail, setLoginEmail] = useState(localStorage.getItem("login-email"));

    useEffect(() => {
        localStorage.setItem("login-username", loginUsername);
        localStorage.setItem("login-firstname", loginFirstname);
        localStorage.setItem("login-lastname", loginLastname);
        localStorage.setItem("login-email", loginEmail);
    }, [loginUsername, loginFirstname, loginLastname, loginEmail]);
    
    return (
        <UserContext.Provider
            value = {{
                loginUsername, 
                setLoginUsername, 
                loginFirstname, 
                setLoginFirstname, 
                loginLastname, 
                setLoginLastname,
                loginEmail, 
                setLoginEmail
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within ThemeProvider");
    }
    return context;
}