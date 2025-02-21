import { Container } from 'react-bootstrap';

/**
 * Componente que se muestra cuando algo esta cargando
 * @returns {JSX.Element}
 */
function LoadingDisplay() {
    return (
        <Container className="mt-5 text-center">
            <h2>Cargando...</h2>
        </Container>
    );
}

export default LoadingDisplay;