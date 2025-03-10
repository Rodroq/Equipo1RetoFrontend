import { useContext, useState } from "react";
import { Modal as ModalDialog, Form, Button, FloatingLabel } from "react-bootstrap";
import "./ImagenModal.css";
import { AppContext } from "../contexts/AppProvider";
import { useNavigate } from "react-router-dom";


/**
 * Componente modal utilizado para el formulario de añadir imagenes
 * @returns {JSX.Element}
 */
function ImagenModal() {
    const [showPassword, setShowPassword] = useState(false);
    const { showImageModal, toggleImageModal, logIn, agregarToast } = useContext(AppContext);
    const navegar = useNavigate();

    /**
     * Funcion que envia la nueva imagen de la seccion correspondiente
     * @param {Event} e 
     * @returns {void}
     */
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const imagen = formData.get('formImagen');

        const valido = await logIn(imagen);

    }

    return (
        <ModalDialog show={showImageModal} onHide={toggleImageModal} centered className="custom-modal">
            <ModalDialog.Body className="modal-content-custom">
                <h3 className="text-center">Subir imagen</h3>
                <p className="text-center">Agregar imagen a la sección actual</p>
                <Form onSubmit={handleSubmit}>
                    {/* Nombre con Floating Label */}
                    <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Introduce el nombre de la imagen"
                            name="nombre"
                            required
                        />
                    </FloatingLabel>
                    
                    {/* Imagen con Form */}
                    <Form.Group controlId="formImagen" className="mb-3">
                        <Form.Label>Seleccionar imagen:</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>                    

                    {/* Botón de login */}
                    <div className="d-grid">
                        <Button type="submit" className="btn-login">
                            Cargar Imagen
                        </Button>
                    </div>
                </Form>
            </ModalDialog.Body>
        </ModalDialog>
    );
}

export default ImagenModal;
