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
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2 aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                                    </svg>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Imágenes</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/usuarios" title="Ir a Gestión de Usuarios." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2 aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Usuarios</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/equipos" title="Ir a Gestión de Equipos." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2 aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-bus-front" viewBox="0 0 16 16">
                                        <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                                        <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                                    </svg>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Equipos</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/gestion/actas" title="Ir a Gestión de Actas." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2 aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                    </svg>
                                </Card.Title>
                                <Card.Text className="fw-bold fs-4">Actas</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <Link to="/publicaciones/editar" title="Ir a Edición de Publicaciones." className="text-decoration-none">
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2 aumentar-escala">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                    </svg>
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