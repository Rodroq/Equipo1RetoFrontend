import { createContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";

// Creación del contexto
const AppContext = createContext();

function AppProvider({ children }) {
    const [rol, setRol] = useState(sessionStorage.getItem('rol') || null);

    /**
     * Funcion que permite iniciar sesión
     * @param {String} username 
     * @param {String} password 
     * @returns {Boolean} //Devuelve si se ha iniciado sesión o no
     */
    async function logIn(username, password) {
        const valido = await $negocio.logIn(username, password);
        setRol(sessionStorage.getItem('rol'));
        return valido;
    }

    /**
     * Funcion que permite cerrar sesion
     * @returns {void}
     */
    function logOut() {
        $negocio.logOut();
        setRol(null);
    };

    // Estado del modal
    const [showModal, setShowModal] = useState(false);

    /**
     * Funcion que permite abrir y cerrar el modal de login
     */
    function toggleModal() {
        setShowModal(!showModal);
    }

    // UseEffect que guarda el rol del sessionStorage
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
            showModal,
            toggleModal,
            negocio: $negocio
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
