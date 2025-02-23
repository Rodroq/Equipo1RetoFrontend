import { useState } from "react";
import { Toast as ToastBootstrap } from "react-bootstrap";

/**
 * Componente que muestra información en forma de notificación
 * @param {String} id //Id del Toast
 * @param {String} titulo //Titulo del toast
 * @param {String} texto //El cuerpo del Toast
 * @param {Function} borrarToast //Funcion que borra el toast de la lógica en AppProvider
 * @returns {JSX.Element}
 */
function Toast({ id, titulo, texto, borrarToast }) {
    // UseState para cambiar la visibilidad del toast
    const [show, setShow] = useState(true);

    return (
        <ToastBootstrap onClose={() => { setShow(false), borrarToast(id) }} show={show} delay={10000} autohide>
            <ToastBootstrap.Header>
                <strong className="me-auto">{titulo}</strong>
            </ToastBootstrap.Header>
            <ToastBootstrap.Body>{texto}</ToastBootstrap.Body>
        </ToastBootstrap>
    );
}

export default Toast;