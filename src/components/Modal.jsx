import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal as ModalDialog } from 'react-bootstrap';


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