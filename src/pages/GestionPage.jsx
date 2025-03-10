import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

function GestionPage() {
    const navegar = useNavigate();
    const { rol } = useContext(AppContext);

    // Define los botones y sus permisos según el enrutador
    const botonesGestion = [
        {
            titulo: "Gestión de Imágenes",
            descripcion: "Añadir, editar y eliminar imágenes del sistema",
            icono: "bi bi-images",
            ruta: "/gestion/imagenes",
            roles: ["administrador"]
        },
        {
            titulo: "Gestión de Usuarios",
            descripcion: "Añadir, editar y eliminar usuarios del sistema",
            icono: "bi bi-people",
            ruta: "/gestion/usuarios",
            roles: ["administrador"]
        },
        {
            titulo: "Gestión de Actas",
            descripcion: "Gestionar las actas de los partidos",
            icono: "bi bi-file-text",
            ruta: "/gestion/actas",
            roles: ["administrador", "director"]
        },
        {
            titulo: "Gestión de Equipos",
            descripcion: "Gestionar los equipos del torneo",
            icono: "bi bi-trophy",
            ruta: "/gestion/equipos",
            roles: ["administrador", "entrenador"]
        },
        {
            titulo: "Gestión de Publicaciones",
            descripcion: "Añadir, editar y eliminar publicaciones",
            icono: "bi bi-newspaper",
            ruta: "/publicaciones/editar",
            roles: ["administrador", "periodista"]
        }
    ];

    return (
        <Container className="my-5">
            <h2 className="text-center mb-5">Panel de Gestión</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {botonesGestion.map((boton, idx) => (
                    // Solo mostrar el botón si el rol del usuario está incluido en los roles permitidos
                    boton.roles.includes(rol) && (
                        <Col key={idx}>
                            <Card
                                className="h-100 shadow-sm hover-card"
                                onClick={() => navegar(boton.ruta)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <i className={`${boton.icono} mb-3`} style={{ fontSize: '2rem' }}></i>
                                    <Card.Title className="text-center">{boton.titulo}</Card.Title>
                                    <Card.Text className="text-center text-muted">
                                        {boton.descripcion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                ))}
            </Row>
        </Container>
    );
}

export default GestionPage;