import { useLocation, useNavigate } from "react-router-dom";
import { Card, Table, Button, Container, Row, Col, Image } from "react-bootstrap";
import Tarjeta from "../components/Tarjeta";

function DetallesEquipoPage() {
    const { state } = useLocation();
    const navegar = useNavigate();

    if (!state || !state.entidad) {
        return (
            <Container className="mt-5 text-center">
                <h2 className="text-danger">Error</h2>
                <p>No se han encontrado los datos del equipo.</p>
                <Button variant="primary" size="lg" onClick={() => navegar('../equipos')}>Volver</Button>
            </Container>
        );
    }

    const { nombre, grupo, centro, jugadores } = state.entidad;

    // Ejemplo sin usar el componente tarjeta
    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <h2 className="text-center mb-4 text-primary fw-bold">{nombre}</h2>
                    <h5 className="text-center text-secondary">Grupo {grupo} - {centro}</h5>
                    <hr />
                    <h4 className="mt-4 text-dark">📋 Plantilla</h4>
                    <Row className="mt-3">
                        {jugadores.map((jugador) => (
                            <Col key={jugador.id} md={6} lg={4} className="mb-4">
                                <Card className="h-100 shadow-sm text-center border-0 rounded-3 bg-white">
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
                                        <p className="fw-light">{jugador.ciclo} - {jugador.curso}</p>
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

    // Ejemplo usando el componente tarjeta
    // return (
    //     <Container className="mt-5">
    //         <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
    //             <Card.Body>
    //                 <h2 className="text-center mb-4 text-primary fw-bold">{nombre}</h2>
    //                 <h5 className="text-center text-secondary">Grupo {grupo} - {centro}</h5>
    //                 <hr />
    //                 <h4 className="mt-4 text-dark">📋 Plantilla</h4>
    //                 <Row className="mt-3">
    //                     {jugadores.map((jugador) => (
    //                         <Col key={jugador.id} md={6} lg={4} className="mb-4">
    //                             {/* Aquí usamos la tarjeta con los datos del jugador */}
    //                             <Tarjeta 
    //                                 tituloTarjeta={jugador.nombre} 
    //                                 textoTarjeta={jugador.tipo} 
    //                                 imagenTarjeta={jugador.imagen || "https://placehold.co/600x400/png"}
    //                                 textoBoton="Ver detalles"
    //                                 nombreEntidad="detalles-jugador"  // Ajustamos a la ruta correcta
    //                                 datosObjeto={jugador}  // Pasamos los datos del jugador
    //                             />
    //                         </Col>
    //                     ))}
    //                 </Row>
    //                 <div className="text-center mt-4">
    //                     <Button variant="primary" size="lg" onClick={() => navegar('../equipos')}>Volver</Button>
    //                 </div>
    //             </Card.Body>
    //         </Card>
    //     </Container>
    // );
}

export default DetallesEquipoPage;
