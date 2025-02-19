import React, { createContext, useContext, useState } from "react";

const SpinnerContext = createContext();

export const SpinnerProvider = ({children}) => {
    const [displaySpinner, setDisplaySpinner] = useState(false);
    return (
        <SpinnerContext.Provider
            value = {{
                displaySpinner, 
                setDisplaySpinner
            }}
        >
            {children}
        </SpinnerContext.Provider>
    )
}

export const useSpinnerContext = () => {
    const context = useContext(SpinnerContext);
    if (!context) {
        throw new Error("useSpinnerContext must be used inside provider");
    }
    return context;
}