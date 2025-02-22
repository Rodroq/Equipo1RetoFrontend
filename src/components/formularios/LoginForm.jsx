import { useContext } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppProvider";

/**
 * Componente que devuelve el formulario de inicio de sesión
 * 
 * @returns {JSX.Element}
 */
function LoginForm() {
    const navegar = useNavigate();
    const { logIn } = useContext(AppContext);

    /**
     * Funcion que maneja el envío del formulario
     * @param {React.FormEvent} e
     * @returns {void}
     */
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const usuario = formData.get('username');
        const contrasena = formData.get('password');

        const valido = await logIn(usuario, contrasena);

        if (valido) {
            navegar('/');
        } else {
            console.error("Correo o contraseña incorrectas");
        }
    }

    return (
        <Card.Body>
            <Card.Title>Iniciar sesión</Card.Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Usuario"
                            name="username"
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Contraseña">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                        />
                    </FloatingLabel>
                </div>
                <Button variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </Card.Body>
    );
}

export default LoginForm;