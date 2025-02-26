import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal as ModalDialog } from 'react-bootstrap';

/**
 * Componente de ventana flotante, llamado modal
 * @param {String} titulo //Texto del título del modal
 * @param {String} texto //Texto que muestra el cuerpo del modal
 * @param {String} confirmar //Texto que muestra el botón de confirmacion
 * @param {String} cancelar //Texto que muestra el botón de cancelar
 * @param {Boolean} show //Variable que controla si el modal se muestra
 * @param {Function} handleClose //Función que se ejecuta cuando se pulsa el botón de cancelar
 * @param {Function} handleConfirm //Función que se ejecuta cuando se pulsa el botón de confirmar
 * @returns {JSX.Element}
 */
function Modal({ titulo, texto, confirmar, cancelar, show, handleClose, handleConfirm }) {
    return (
        <ModalDialog show={show} onHide={handleClose}>
            <ModalDialog.Header closeButton>
                <ModalDialog.Title>{titulo}</ModalDialog.Title>
            </ModalDialog.Header>
            <ModalDialog.Body>{texto}</ModalDialog.Body>
            <ModalDialog.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {cancelar}
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    {confirmar}
                </Button>
            </ModalDialog.Footer>
        </ModalDialog>
    );
}

export default Modal;