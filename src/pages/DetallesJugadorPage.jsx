import { useContext, useEffect, useState } from "react";
import { Card, Container, Image, Row, Col, Button } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import ErrorDisplay from "../components/ErrorDisplay";
import LoadingDisplay from "../components/LoadingDisplay";
import { AppContext } from "../contexts/AppProvider";
import { useLocation, useNavigate } from "react-router-dom";

function DetallesJugadorPage() {
    // Estados
    const [jugador, setJugador] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const navegar = useNavigate();

    // Contexto
    const { negocio } = useContext(AppContext);

    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    // Efecto al montar el componente y detectar cambios en 'state'
    useEffect(() => {
        async function recuperarDatos() {
            try {
                if (!state?.jugador) {
                    // Obtener el ID del jugador de la URL
                    const id = window.location.pathname.split('/').pop();
                    const datos = await negocio.getDatos(`jugadores/${id}`);

                    if (!datos) {
                        setError('No se han encontrado los datos del jugador');
                        return;
                    }

                    setJugador(datos);
                } else {
                    setJugador(state.jugador);
                }
            } catch (err) {
                setError('Error al cargar los datos del jugador');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        recuperarDatos();
    }, [state, negocio]);

    if (loading) {
        return <LoadingDisplay />;
    }

    if (error) {
        return <ErrorDisplay mensaje={error} />;
    }

    // Renderizado
    return (
        <Container className="mt-5">
            <Card className="shadow-lg border-0 rounded-4">
                {/* Carousel Section */}
                <div className="mb-4">
                    {imagenes.length <= 1 ? (
                        <Image 
                            src={imagenes[0][0]}
                            className="w-100"
                            style={{ height: '250px', objectFit: 'contain' }}
                        />
                    ) : (
                        <Carrusel imagenes={imagenes} />
                    )}
                </div>

                <Card.Body className="px-4 pb-4">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bold">{jugador.nombre}</h1>
                        <h5 className="text-secondary">
                            CICLO - CURSO
                            {/* {jugador.estudio.ciclo.nombre} - {jugador.estudio.curso}º */}
                        </h5>
                    </div>

                    <h3 className="text-primary border-bottom pb-3 mb-4">Estadísticas</h3>
                    
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="border-0 bg-light h-100">
                                <Card.Body className="text-center">
                                    <h3 className="display-3 fw-bold text-primary">{jugador.goles}</h3>
                                    <h6 className="text-muted text-uppercase">Goles</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col md={4}>
                            <Card className="border-0 bg-light h-100">
                                <Card.Body className="text-center">
                                    <h3 className="display-3 fw-bold text-success">{jugador.asistencias}</h3>
                                    <h6 className="text-muted text-uppercase">Asistencias</h6>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="border-0 bg-light h-100">
                                <Card.Body className="text-center">
                                    <h3 className="display-3 fw-bold text-danger">{jugador.lesiones}</h3>
                                    <h6 className="text-muted text-uppercase">Lesiones</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Card className="mt-4 border-0 bg-light">
                        <Card.Body>
                            <Row className="text-center g-3">
                                <Col sm={4}>
                                    <h2 className="fw-bold text-warning mb-0">{jugador.faltas}</h2>
                                    <small className="text-muted text-uppercase">Faltas</small>
                                </Col>
                                <Col sm={4}>
                                    <h2 className="fw-bold text-warning mb-0">{jugador["tarjetas-amarillas"]}</h2>
                                    <small className="text-muted text-uppercase">Tarjetas Amarillas</small>
                                </Col>
                                <Col sm={4}>
                                    <h2 className="fw-bold text-danger mb-0">{jugador["tarjetas-rojas"]}</h2>
                                    <small className="text-muted text-uppercase">Tarjetas Rojas</small>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" onClick={() => navegar(-1)}>Volver</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetallesJugadorPage;