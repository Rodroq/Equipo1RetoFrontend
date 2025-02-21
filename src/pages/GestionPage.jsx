import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function GestionPage() {
    const generarFichaGestion = () => {
        // TODO: Generar las fichas según permisos de usuario
    };

    // Renderizado
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Gestión</h2>
            <Row>
                <Col className="mb-4">
                    <Link to="/gestion/imagenes" title="Ir a Gestión de Imágenes." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <i className="bi bi-image" style={{ fontSize: '70px'}}></i>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Imágenes</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/usuarios" title="Ir a Gestión de Usuarios." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <i className="bi bi-people" style={{ fontSize: '70px'}}></i>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Usuarios</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/equipos" title="Ir a Gestión de Equipos." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <i className="bi bi-bus-front" style={{ fontSize: '70px'}}></i>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Equipos</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/actas" title="Ir a Gestión de Actas." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <i className="bi bi-book" style={{ fontSize: '70px'}}></i>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Actas</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/publicaciones/editar" title="Ir a Edición de Publicaciones." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <i className="bi bi-file-text" style={{ fontSize: '70px'}}></i>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Publicaciones</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default GestionPage;