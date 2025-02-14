import { Card, Container, Row } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import Tarjeta from "../components/Tarjeta";
import { useEffect, useState } from "react";

function RetosPage() {
    const [retosAleatorios, setRetosAleatorios] = useState([]);
    const [imagenesCarrusel, setImagenesCarrusel] = useState([]);
    const datosTarjetas = [
        {
            id: 1,
            nombre: "Reto 1",
            descripcion: "Descripción del Reto 1",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 1,
                estudios: "Ejemplo de estudios 1"
            }
        },
        {
            id: 2,
            nombre: "Reto 2",
            descripcion: "Descripción del Reto 2",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 2,
                estudios: "Ejemplo de estudios 2"
            }
        },
        {
            id: 3,
            nombre: "Reto 3",
            descripcion: "Descripción del Reto 3",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 3,
                estudios: "Ejemplo de estudios 3"
            }
        },
        {
            id: 4,
            nombre: "Reto 4",
            descripcion: "Descripción del Reto 4",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 4,
                estudios: "Ejemplo de estudios 4"
            }
        },
        {
            id: 5,
            nombre: "Reto 5",
            descripcion: "Descripción del Reto 5",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 5,
                estudios: "Ejemplo de estudios 5"
            }
        },
        {
            id: 6,
            nombre: "Reto 6",
            descripcion: "Descripción del Reto 6",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 6,
                estudios: "Ejemplo de estudios 6"
            }
        },
        {
            id: 7,
            nombre: "Reto 7",
            descripcion: "Descripción del Reto 7",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 7,
                estudios: "Ejemplo de estudios 7"
            }
        },
        {
            id: 8,
            nombre: "Reto 8",
            descripcion: "Descripción del Reto 8",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 8,
                estudios: "Ejemplo de estudios 8"
            }
        },
        {
            id: 9,
            nombre: "Reto 9",
            descripcion: "Descripción del Reto 9",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 9,
                estudios: "Ejemplo de estudios 9"
            }
        },
        {
            id: 10,
            nombre: "Reto 10",
            descripcion: "Descripción del Reto 10",
            imagen: "https://placehold.co/600x400/png",
            estudios: {
                idEstudio: 10,
                estudios: "Ejemplo de estudios 10"
            }
        }
    ];

    function generarRetosAleatorios() {
        let tarjetasAleatorias = [...datosTarjetas];
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
        generarRetosAleatorios();
    }, []);

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
                            {datosTarjetas.map((reto) => (
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