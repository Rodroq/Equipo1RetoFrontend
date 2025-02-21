import { Container, Spinner } from 'react-bootstrap';

/**
 * Componente que se muestra cuando algo esta cargando
 * @returns {JSX.Element}
 */
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