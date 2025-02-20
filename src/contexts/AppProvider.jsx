import { createContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";

// Creación del contexto
const AppContext = createContext();

function AppProvider({ children }) {
    // Estados
    const [usuarioActual, setUsuarioActual] = useState(null);

    // Funciones
    const logIn = async (username, password) => {

    };

    const logOut = () => {

    };

    // Exponer valores de contexto. Renderiza a sus hijos.
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