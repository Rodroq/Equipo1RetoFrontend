import { Container, Spinner } from 'react-bootstrap';

function LoadingDisplay() {
    return (
        <Container className="mt-5 text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </Container>
    );
}

export default LoadingDisplay;