import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useNavigate } from 'react-router-dom';

function Tarjeta(props) {
    const { titulo, texto, imagen, idEquipo } = props;
    const navegar = useNavigate();

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen || "https://placehold.co/600x400/png"} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {texto}
                    </Card.Text>
                    <Button onClick={() => { navegar(`/equipos/${idEquipo}`) }} variant="primary">Ver equipo</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tarjeta;
