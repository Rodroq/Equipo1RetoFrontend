import { createContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";

const AppContext = createContext();

function AppProvider({ children }) {
    const logIn = async (username, password) => {

    };

    const logOut = () => {

    };

    return (
        <AppContext.Provider value={{
            logIn,
            logOut,
            negocio: $negocio
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };