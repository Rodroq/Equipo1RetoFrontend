import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Tarjeta.css'

/**
 * Componente que muestra una imágen junto a un texto y un botón
 * @param {String} tituloTarjeta //Titulo que se muestra en la tarjeta 
 * @param {String} textoTarjeta //Cuerpo de la tarjeta
 * @param {String} imagenTarjeta //Ruta de la imágen que se muestra en la tarjeta
 * @param {String} textoBoton //Texto que muestra el botón
 * @param {String} nombreEntidad //Ruta a la que se navega (por ejemplo /equipos/)
 * @param {Object} datosObjeto //Datos que se envian cuando pulsas el botón
 * @returns {JSX.Element}
 */
function Tarjeta({ tituloTarjeta, textoTarjeta, imagenTarjeta, textoBoton, nombreEntidad, datosObjeto }) {
    // Guardamos el useNavigate en una variable, lo que permite redirigir a una ruta
    const navegar = useNavigate();

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagenTarjeta || "https://placehold.co/600x400/png"} />
                <Card.Body>
                    <Card.Title>{tituloTarjeta}</Card.Title>
                    <Card.Text className='limiteTexto'>
                        {textoTarjeta}
                    </Card.Text>
                    <Button onClick={() => { navegar(`/${nombreEntidad}/${datosObjeto.slug}`, { state: { entidad: datosObjeto } }) }} variant="primary">{textoBoton}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tarjeta;
