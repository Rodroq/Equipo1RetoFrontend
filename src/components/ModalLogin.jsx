import { useContext, useState } from "react";
import { Modal as ModalDialog, Form, Button, FloatingLabel } from "react-bootstrap";
import "./ModalLogin.css";
import { AppContext } from "../contexts/AppProvider";
import { useNavigate } from "react-router-dom";


/**
 * Componente modal utilizado para el formulario de login
 * @returns {JSX.Element}
 */
function ModalLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const { showModal, toggleModal, logIn } = useContext(AppContext);
    const navegar = useNavigate();

    /**
     * Funcion que inicia sesión cuando se envia el formulario
     * @param {Event} e 
     * @returns {void}
     */
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const usuario = formData.get('email');
        const contrasena = formData.get('password');

        const valido = await logIn(usuario, contrasena);

        if (valido) {
            toggleModal();
            navegar('/');
        } else {
            console.error("Correo o contraseña incorrectas");
        }
    }

    return (
        <ModalDialog show={showModal} onHide={toggleModal} centered className="custom-modal">
            <ModalDialog.Body className="modal-content-custom">
                <h3 className="text-center">Iniciar Sesión</h3>
                <p className="text-center">Accede con tu cuenta</p>
                <Form onSubmit={handleSubmit}>
                    {/* Email con Floating Label */}
                    <FloatingLabel controlId="email" label="Email" className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Introduce tu email"
                            name="email"
                            required
                        />
                    </FloatingLabel>

                    {/* Contraseña con Floating Label */}
                    <FloatingLabel controlId="password" label="Contraseña" className="mb-3 d-flex">
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Introduce tu contraseña"
                            name="password"
                            required
                        />
                        <Button
                            variant="outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} style={{ fontSize: '24px' }}></i>
                        </Button>
                    </FloatingLabel>

                    {/* Botón de login */}
                    <div className="d-grid">
                        <Button type="submit" className="btn-login">
                            Iniciar Sesión
                        </Button>
                    </div>
                </Form>
            </ModalDialog.Body>
        </ModalDialog>
    );
}

export default ModalLogin;
