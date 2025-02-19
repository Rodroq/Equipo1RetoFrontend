import { useLocation, useNavigate } from "react-router-dom";
import { Card, Table, Button, Container, Row, Col, Image } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import { useContext, useEffect, useState, useId } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";


function DetallesEquipoPage() {
    // Id de componente
    const idComponente = useId();

    // Estados
    const { state } = useLocation();
    const navegar = useNavigate();
    const [equipo, setEquipo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente y al detectar cambios en 'state'
    useEffect(() => {
        async function recuperarDatos() {
            try {
                if (!state?.entidad) {
                    // Obtener el ID del equipo de la URL
                    const id = window.location.pathname.split('/').pop();
                    const datos = await negocio.getDatos(`equipos/${id}`);

                    if (!datos) {
                        setError('No se han encontrado los datos del equipo');
                        return;
                    }

                    setEquipo(datos);
                } else {
                    setEquipo(state.entidad);
                }
            } catch (err) {
                setError('Error al cargar los datos del equipo');
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
        <Container className="mt-5 mb-5">
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <h2 className="text-center mb-4 text-primary fw-bold">{equipo.nombre}</h2>
                    <h5 className="text-center text-secondary border-bottom border-primary p-2">Grupo {equipo.grupo} - {equipo.centro.nombre}</h5>
                    <h4 className="mt-4 text-dark">📋 Plantilla</h4>
                    <Row className="mt-3">
                        {equipo.jugadores.map((jugador, index) => (
                            <Col key={`${idComponente}-${index}`} md={6} lg={4} className="mb-4">
                                <Card
                                    className="h-100 shadow-sm text-center border-0 rounded-3 bg-white"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navegar(`/jugadores/${null}`, { state: { jugador: jugador } })}
                                >
                                    <Card.Body>
                                        <Image
                                            src={jugador.imagen || "https://placehold.co/600x400/png"}
                                            roundedCircle
                                            fluid
                                            className="mb-3"
                                            style={{ width: "110px", height: "110px", objectFit: "cover" }}
                                        />
                                        <h5 className="fw-bold text-dark">{jugador.nombre}</h5>
                                        <p className="text-muted fst-italic">{jugador.tipo}</p>
                                        <p className="fw-light">{jugador.estudio.ciclo.nombre} - {jugador.estudio.curso}º</p>
                                        <Table borderless size="sm" className="text-center">
                                            <tbody>
                                                <tr className="fw-semibold">
                                                    <td className="text-success">🥅 {jugador.goles}</td>
                                                    <td className="text-info">🎯 {jugador.asistencias}</td>
                                                    <td className="text-warning">🟨 {jugador["tarjetas-amarillas"]}</td>
                                                    <td className="text-danger">🟥 {jugador["tarjetas-rojas"]}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" onClick={() => navegar('../equipos')}>Volver</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DetallesEquipoPage;
