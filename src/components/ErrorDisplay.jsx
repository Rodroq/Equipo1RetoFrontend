import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {String} mensaje //Mensaje que se muestra en el error
 * @param {Function} onVolver //Permite personalizar la accion a realizar cuando se pulsa el boton
 * @returns 
 */
function ErrorDisplay({ mensaje, onVolver }) {
    const navegar = useNavigate();

    /**
     * 
     */
    function handleVolver() {
        if (onVolver) {
            onVolver();
        } else {
            navegar('/');
        }
    };

    return (
        <Container className="mt-5 text-center">
            <h2 className="text-danger">Error</h2>
            <p>{mensaje}</p>
            <Button variant="primary" size="lg" onClick={handleVolver}>
                Volver
            </Button>
        </Container>
    );
}

export default ErrorDisplay;