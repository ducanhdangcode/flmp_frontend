import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [loginUsername, setLoginUsername] = useState(localStorage.getItem("login-username"));
    const [loginFirstname, setLoginFirstname] = useState(localStorage.getItem("login-firstname"));
    const [loginLastname, setLoginLastname] = useState(localStorage.getItem("login-lastname"));
    const [loginEmail, setLoginEmail] = useState(localStorage.getItem("login-email"));
    const [avatar, setAvatar] = useState(localStorage.getItem("login-user-avatar"));

    const [userToken, setUserToken] = useState(localStorage.getItem("user-token"));

    useEffect(() => {
        localStorage.setItem("login-username", loginUsername);
        localStorage.setItem("login-firstname", loginFirstname);
        localStorage.setItem("login-lastname", loginLastname);
        localStorage.setItem("login-email", loginEmail);
        localStorage.setItem("user-token", userToken);
        localStorage.setItem("login-user-avatar", avatar);
    }, [loginUsername, loginFirstname, loginLastname, loginEmail, userToken, avatar]);
    
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
                setLoginEmail, 
                userToken, 
                setUserToken,
                avatar, 
                setAvatar
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