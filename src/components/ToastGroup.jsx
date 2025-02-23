import { ToastContainer } from "react-bootstrap";
import Toast from "./Toast";
import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

/**
 * Componente que almacena notificaciones tipo Toast
 * @returns {JSX.Element}
 */
function ToastGroup() {
    //Importamos el contexto
    const { toasts, borrarToast } = useContext(AppContext);

    /**
     * Función que genera los toast
     * @returns {JSX.Element}
     */
    function generarToast() {
        return toasts.map((toast) =>
            <Toast key={`${toast.id}`} id={toast.id} titulo={toast.datos[0]} texto={toast.datos[1]} borrarToast={borrarToast} />
        );
    }

    return (
        <>
            <ToastContainer position="bottom-end" className="m-3" style={{ position: 'fixed', bottom: 0, right: 0 }}>
                {generarToast()}
            </ToastContainer>
        </>
    );
}

export default ToastGroup;