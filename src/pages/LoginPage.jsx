import { Button, Card, Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    return (
        <Container fluid="sm" className="mt-5">
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <Card.Title>Iniciar sesión</Card.Title>
                    <Card.Text>
                        <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                            <Form.Control type="text" placeholder='Usuario' />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Contraseña">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </FloatingLabel>
                    </Card.Text>
                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;