import { Button, Card, Image, Container, Row, Col, Badge } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import { useNavigate } from "react-router-dom";

function InicioPage() {
    // Navegación
    const navegar = useNavigate();

    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    // Renderizado
    return (
        <>
            <section className="text-white text-center p-5 portada fondo-portada">
                <div className="contenedor-titulo-portada aparecerArriba">
                    <h1 className="fw-bold titulo-portada">Liga solidaria FP</h1>
                    <a href="https://www2.cruzroja.es/" title="Ir a Cruz Roja." className="aumentar-escala">
                        <img src="/cruz-roja.png" alt="" width={150} className="bordes-redondeados" />
                    </a>
                    <Button variant="warning" onClick={() => navegar('/inscripcion')} title="Ir a Inscripción." className="pulso">¡Participa!</Button>
                </div>
            </section>

            <Container className="my-5">
                <Row>
                    <Col md={8} lg={9} className="mb-4">
                        <Card className="border-primary bg-light h-100 mb-4 shadow border-2 aumentar-escala aparecerIzquierda">
                            <Card.Header>
                                <Card.Title>
                                    <i className="bi bi-info-circle m-2" style={{ fontSize: '24px'}}></i>
                                    Sobre la liga
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">
                                    El proyecto ‘Liga Solidaria de FP Cantabria’ es una actividad multidisciplinar que gira en torno a un torneo de fútbol sala, que sirve como contexto para que los alumnos de FP tengan una experiencia profesionalizante y solidaria.
                                    El dinero y los productos de primera necesidad donados serán destinados por <img src="/cruz-roja.webp" alt="" width={20} /> <span className="text-danger fw-bold">Cruz Roja</span> a las familias en situación de vulnerabilidad del entorno.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} className="mb-4">
                        <Card className="bg-primary h-100 mb-4 shadow text-white aumentar-escala aparecerDerecha">
                            <Card.Header>
                                <Card.Title>
                                    <i className="bi bi-calendar-heart m-2" style={{ fontSize: '24px'}}></i>
                                    Fechas y ubicación
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">13 y 14 de marzo.</Card.Text>
                                <Card.Text className="lead">Pabellón la Habana Vieja de Torrelavega.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Retos de FP</h2>
                <Carrusel imagenes={imagenes} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Donaciones</h2>
                <Row>
                    <Col>
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala aparecerAbajo">
                            <Card.Header>
                                <i className="bi bi-piggy-bank" style={{ fontSize: '80px'}}></i>
                                <Card.Title className="fs-4">Total recaudado</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Row>
                                    <Col className="mb-3">
                                        <Card.Text>
                                            <Badge pill bg="warning text-dark fs-3"><i className="bi bi-box2-heart"></i> 1234 Kg</Badge>
                                        </Card.Text>
                                    </Col>
                                    <Col className="mb-3">
                                        <Card.Text>
                                            <Badge pill bg="warning text-dark fs-3"><i className="bi bi-bank"></i> 1234 €</Badge>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col>
                                        <Card.Text>
                                            <small>El dinero y los productos de primera necesidad donados serán destinados por <span className="bg-light border text-danger fw-bold rounded p-1"><img src="/cruz-roja.webp" alt="" width={16} /> Cruz Roja</span> a las familias en situación de vulnerabilidad del entorno.</small>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center bg-success h-100 mb-4 shadow text-white aumentar-escala aparecerAbajo">
                            <Card.Header>
                                <i className="bi bi-balloon-heart" style={{ fontSize: '80px'}}></i>
                                <Card.Title className="fs-4">¿Quieres donar?</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">Aporta tu granito de arena y contribuye a la iniciativa.</Card.Text>
                                <Card.Text className="lead"><em>Lo poco, es mucho para otros.</em></Card.Text>
                                <Button variant="warning" title="Ir a cercadeti.cruzroja.es." className="mx-auto pulso" href="https://cercadeti.cruzroja.es/ligasolidariadeformacionprofesional">¡Donar!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Publicaciones</h2>
                <Carrusel imagenes={imagenes} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Patrocinadores</h2>
                <Row className="text-center">
                    {[...Array(7)].map((_, index) => (
                        <Col key={index}>
                            <Image 
                                src={"https://placehold.co/600x400/png"} 
                                roundedCircle  
                                style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                                className="mb-3"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default InicioPage;