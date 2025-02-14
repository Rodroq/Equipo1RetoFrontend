import { Button, Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    return (
        <Container fluid="sm">
            <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                <Form.Control type="text" placeholder='Usuario' />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Contraseña">
                <Form.Control type="password" placeholder="Contraseña" />
            </FloatingLabel>
            <Button variant="primary" type="submit">
                Iniciar sesión
            </Button>
        </Container>
    );
}

export default LoginPage;