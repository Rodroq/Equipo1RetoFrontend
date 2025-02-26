import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Tarjeta({ tituloTarjeta, textoTarjeta, imagenTarjeta, textoBoton, nombreEntidad, datosObjeto }) {
    const navegar = useNavigate();

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagenTarjeta || "https://placehold.co/600x400/png"} />
                <Card.Body>
                    <Card.Title>{tituloTarjeta}</Card.Title>
                    <Card.Text>
                        {textoTarjeta}
                    </Card.Text>
                    <Button onClick={() => { navegar(`/${nombreEntidad}/${datosObjeto.slug}`, { state: { entidad: datosObjeto } }) }} variant="primary">{textoBoton}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tarjeta;
