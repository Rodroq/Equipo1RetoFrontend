import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * Componente que devuelve el formulario de inicio de sesión
 * 
 * @returns {JSX.Element}
 */
function LoginForm() {
    const navegar = useNavigate();

    /**
     * Funcion que maneja el inicio de sesión
     * 
     * @returns {void}
     */
    function handleClick(e) {
        e.stopPropagation();
        console.log('Has iniciado sesion');
        navegar('/');
    }

    return (
        <>
            <Card.Body>
                <Card.Title>Iniciar sesión</Card.Title>
                <div>
                    <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                        <Form.Control type="text" placeholder='Usuario' />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Contraseña">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </FloatingLabel>
                </div>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Iniciar sesión
                </Button>
            </Card.Body>

        </>
    );
}

export default LoginForm;