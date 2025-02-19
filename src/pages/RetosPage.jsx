import { Card, Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import Tarjeta from "../components/Tarjeta";
import { useContext, useEffect, useState, useId } from "react";
import { AppContext } from "../contexts/AppProvider";

function RetosPage() {
    const idComponente = useId();
    const [retos, setRetos] = useState([]);
    const [retosAleatorios, setRetosAleatorios] = useState([]);
    const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

    const { negocio } = useContext(AppContext);

    useEffect(() => {
        async function fetchRetos() {            
            const retosData = await negocio.getDatos('retos');
            setRetos(retosData.data);
        }
        fetchRetos();
    }, [negocio]);

    useEffect(() => {
        if (retos.length > 0) {
            generarRetosAleatorios();
        }
    }, [retos]);

    useEffect(() => {
        if (retosAleatorios.length > 0) {
            cargarImagenesCarrusel();
        }
    }, [retosAleatorios]);

    function generarRetosAleatorios() {
        const tarjetasAleatorias = [...retos].sort(() => Math.random() - 0.5);
        setRetosAleatorios(tarjetasAleatorias.slice(0, 5));
    }

    function cargarImagenesCarrusel() {
        const imagenes = retosAleatorios.map(reto => [reto.imagen, reto.titulo]);
        setImagenesCarrusel(imagenes);
    }

    return (
        <>
            <Carrusel imagenes={imagenesCarrusel} />
            <Container className="mt-5 mb-5">
                <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <h2 className="text-center mb-5 section-titulo">Retos</h2>
                        <p>En esta página encontrarás un resumen de los retos más recientes y emocionantes. Cada reto está diseñado para desafiar tus habilidades y ayudarte a crecer. ¡Explora los retos y acepta el desafío!</p>
                        <br />
                        <br />
                        <div className="row justify-content-center">
                            {retos.map((reto, index) => (
                                <div className="col-lg-3 col-md-4 mb-4" key={`${idComponente}-${index}`}>
                                    <Tarjeta
                                        tituloTarjeta={reto.titulo}
                                        textoTarjeta={reto.texto}
                                        //imagenTarjeta={reto.imagen}
                                        textoBoton={'Ver reto'}
                                        nombreEntidad={'retos'}
                                        datosObjeto={reto}
                                    />
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default RetosPage;