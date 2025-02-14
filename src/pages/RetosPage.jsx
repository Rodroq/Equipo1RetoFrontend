import { Card, Container, Row } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import Tarjeta from "../components/Tarjeta";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";

function RetosPage() {
    const [retos, setRetos] = useState([]);
    const [retosAleatorios, setRetosAleatorios] = useState([]);
    const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

    const { negocio } = useContext(AppContext);

    function generarRetosAleatorios() {
        let tarjetasAleatorias = [...retos];
        tarjetasAleatorias.sort(function () { return Math.random() - 0.5 });
        setRetosAleatorios(tarjetasAleatorias.slice(0, 5));
    }

    function cargarImagenesCarrusel() {
        let imagenes = [];
        if (retosAleatorios) {
            retosAleatorios.forEach(reto => {
                imagenes.push([reto.imagen, reto.nombre]);
            });
        }

        setImagenesCarrusel(imagenes);
    }

    useEffect(() => {
        async function fetchRetos() {
            const retosData = await negocio.obtenerRetos();
            setRetos(retosData);
        }
        fetchRetos();
    }, []);

    useEffect(() => {
        generarRetosAleatorios();
    }, [retos]);

    useEffect(() => {
        cargarImagenesCarrusel();
    }, [retosAleatorios]);

    return (
        <>
            <h1>RetosPage</h1>
            <Carrusel imagenes={imagenesCarrusel} />
            <Container className="mt-5">
                <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <h1>Retos</h1>
                        <p>En esta página encontrarás un resumen de los retos más recientes y emocionantes. Cada reto está diseñado para desafiar tus habilidades y ayudarte a crecer. ¡Explora los retos y acepta el desafío!</p>
                        <br />
                        <br />
                        <div className="row justify-content-center">
                            {retos.map((reto) => (
                                <div className="col-lg-3 col-md-4 mb-4" key={reto.id}>
                                    <Tarjeta tituloTarjeta={reto.nombre} textoTarjeta={reto.descripcion} imagenTarjeta={reto.imagen} textoBoton={'Ver reto'} nombreEntidad={'retos'} datosObjeto={reto} />
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </Container >
        </>
    );
}

export default RetosPage;