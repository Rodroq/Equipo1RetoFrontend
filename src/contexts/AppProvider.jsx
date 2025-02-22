import { createContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";

// Creación del contexto
const AppContext = createContext();

function AppProvider({ children }) {
    const [rol, setRol] = useState(sessionStorage.getItem('rol') || null);

    // Funciones
    const logIn = async (username, password) => {
        const valido = await $negocio.logIn(username, password);
        setRol(sessionStorage.getItem('rol'));
        return valido;
    }

    const logOut = () => {
        $negocio.logOut();
        setRol(null);
    };

    useEffect(() => {
        const rolGuardado = sessionStorage.getItem('rol');
        if (rolGuardado) {
            setRol(rolGuardado);
        }
    }, []);

    return (
        <AppContext.Provider value={{
            logIn,
            logOut,
            rol,
            negocio: $negocio
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
