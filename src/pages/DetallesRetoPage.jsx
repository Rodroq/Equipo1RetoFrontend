import { useContext, useEffect, useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import Carrusel from "../components/Carrusel";

function DetallesRetoPage() {
    // Estados
    const [reto, setReto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente y al detectar cambios en 'state'
    useEffect(() => {
        async function recuperarDatos() {
            try {
                // Obtener el slug del reto de la URL
                const slug = window.location.pathname.split('/').pop();
                const datos = await negocio.getDatos(`retos/${slug}`);
                const todosRetos = await negocio.getDatos(`retos`);

                if (!datos) {
                    setError('No se han encontrado los datos del reto');
                    return;
                }

                if (todosRetos) {
                    const retoConImagen = todosRetos.retos.find(reto => reto.slug === slug);
                    if (retoConImagen && retoConImagen.imagen) {
                        datos.reto.imagenes = [retoConImagen.imagen.url];
                    }
                }

                setReto(datos.reto);
            } catch (err) {
                setError('Error al cargar los datos del reto');
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
                        <h2 className="text-center text-primary border-bottom border-primary p-2">{reto.titulo}</h2>
                        <div className="text-center">
                            <strong>{reto.estudio.centro.nombre} - {reto.estudio.curso}º {reto.estudio.ciclo.nombre}</strong>
                        </div>
                        <br />
                        {reto.imagenes.length === 1 && (
                            <div className="text-center">
                                <Image
                                    src={reto.imagenes[0]}
                                    alt={reto.titulo}
                                    fluid
                                    style={{
                                        maxWidth: "100%", // Asegura que no se desborde
                                        height: "auto",   // Mantiene la proporción
                                        maxHeight: "400px", // Limita la altura máxima
                                        objectFit: "contain", // Ajusta sin recortar
                                        borderRadius: "8px", // Redondea bordes
                                    }}
                                />
                            </div>
                        )}
                        {reto.imagenes.length > 1 && (
                            <Carrusel imagenes={reto.imagenes.map(imagen => [imagen, ''])} />
                        )}
                        <p className="mt-4">{reto.texto}</p>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default DetallesRetoPage;