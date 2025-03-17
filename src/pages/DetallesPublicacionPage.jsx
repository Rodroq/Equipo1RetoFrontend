import { useContext, useEffect, useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import Carrusel from "../components/Carrusel";

function DetallesPublicacionPage() {
    // Estados
    const [publicacion, setPublicacion] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente y al detectar cambios en 'state'
    useEffect(() => {
        async function recuperarDatos() {
            try {
                // Obtener el slug de la publicación de la URL
                const slug = window.location.pathname.split('/').pop();
                const datos = await negocio.getDatos(`publicaciones/${slug}`);
                const imagenes = await negocio.getDatos(`publicaciones`);

                if (!datos) {
                    setError('No se han encontrado los datos de la publicación');
                    return;
                }

                if (imagenes) {
                    const imagenPublicacion = imagenes.publicaciones.find(pub => pub.slug === slug);
                    if (imagenPublicacion) {
                        datos.publicacion.imagenes = [imagenPublicacion.imagen.url];
                    }
                }

                setPublicacion(datos.publicacion);
            } catch (err) {
                setError('Error al cargar los datos de la publicación');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        recuperarDatos();
    }, [negocio]);

    if (loading) {
        return <LoadingDisplay />;
    }

    if (error) {
        return <ErrorDisplay mensaje={error} />;
    }

    return (
        <>
            <Container className="mt-5 mb-5">
                <h2 className="text-center mb-5 section-titulo">Detalles de la publicación</h2>
            </Container>
            <Container className="mt-5 mb-5">
                <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                    <Card.Body>
                        <h3 className="text-center text-secondary border-bottom border-primary p-2">{publicacion.titulo}</h3>
                        <br />
                        {publicacion.imagenes.length === 1 && (
                            <div className="text-center">
                                <Image
                                    src={publicacion.imagenes[0]}
                                    alt={publicacion.titulo}
                                    fluid
                                    style={{
                                        maxWidth: "100%", // Asegura que no se desborde
                                        height: "auto",   // Mantiene la proporción
                                        maxHeight: "400px", // Limita la altura máxima
                                        objectFit: "contain", // Ajusta la imagen sin recortarla
                                        borderRadius: "8px", // Opcional: redondear bordes
                                    }}
                                />
                            </div>
                        )}
                        {publicacion.imagenes.length > 1 && (
                            <Carrusel imagenes={publicacion.imagenes.map(imagen => [imagen, ''])} />
                        )}
                        <p className="mt-4">{publicacion.texto}</p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default DetallesPublicacionPage;