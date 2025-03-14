import { Card, Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import Tarjeta from "../components/Tarjeta";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";

function RetosPage() {
    const [retos, setRetos] = useState([]);
    const [retosAleatorios, setRetosAleatorios] = useState([]);
    const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

    const { negocio } = useContext(AppContext);

    useEffect(() => {
        async function fetchRetos() {
            const retosData = await negocio.getDatos('retos');
            console.log('Datos de retos:', retosData.retos); // Depuración
            setRetos(retosData.retos);
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
        const retosConImagen = retos.filter(reto => reto.imagen && reto.imagen.url);
        const tarjetasAleatorias = [...retosConImagen].sort(() => Math.random() - 0.5);
        setRetosAleatorios(tarjetasAleatorias.slice(0, 5));
    }

    function cargarImagenesCarrusel() {
        const imagenes = retosAleatorios
            .map(reto => {
                if (reto.imagen && reto.imagen.url) {
                    return [reto.imagen.url, reto.titulo]; // Formato [url, nombre]
                }
                return null; // Excluir retos sin imagen
            })
            .filter(imagen => imagen !== null); // Filtrar entradas nulas
        console.log('Imagenes para el carrusel:', imagenes); // Depuración
        setImagenesCarrusel(imagenes);
    }

    return (
        <>
            {imagenesCarrusel.length > 0 ? (
                <Carrusel imagenes={imagenesCarrusel} />
            ) : (
                <Container className="mt-5 text-center">
                    <p>No hay imágenes disponibles para el carrusel.</p>
                </Container>
            )}
            <Container className="mt-5 mb-5">
                <h2 className="text-center mb-5 section-titulo">Retos</h2>
                <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <div className="row justify-content-center">
                            {retos.map((reto) => (
                                <div className="col-lg-3 col-md-4 mb-4 aumentar-escala" key={reto.slug}>
                                    <Tarjeta
                                        tituloTarjeta={reto.titulo}
                                        textoTarjeta={reto.texto}
                                        imagenTarjeta={reto.imagen?.url || ''} // Manejo seguro
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