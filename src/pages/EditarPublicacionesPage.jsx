import { Card, Container } from "react-bootstrap";
import Tabla from '../components/Tabla.jsx'
import Modal from '../components/Modal.jsx'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditarPublicacionesPage() {
    const navegar = useNavigate();
    const [publicaciones, setPublicaciones] = useState([
        {
            id: 1,
            titulo: 'Nuevo producto tecnológico',
            titu2lo: 'Nuevo producto tecnológico',
            titu22lo: 'Nuevo producto tecnológico',
            titu222lo: 'Nuevo producto tecnológico',
            descripcion: 'Lanzamiento del último smartphone con características innovadoras',
        },
        {
            id: 2,
            titulo: 'Evento de networking',
            descripcion: 'Únete a nuestro evento mensual de networking empresarial',
        },
        {
            id: 3,
            titulo: 'Oferta especial',
            descripcion: 'Descuentos exclusivos en todos nuestros servicios este mes',
        },
        {
            id: 4,
            titulo: 'Actualización de sistema',
            descripcion: 'Nuevas funcionalidades disponibles en la última versión',
        },
        {
            id: 5,
            titulo: 'Workshop de desarrollo web',
            descripcion: 'Aprende las últimas tecnologías en desarrollo web',
        },
        {
            id: 6,
            titulo: 'Conferencia anual',
            descripcion: 'No te pierdas nuestra conferencia anual de innovación',
        },
        {
            titulo: 'Nuevo blog post',
            descripcion: 'Tips y trucos para mejorar la productividad en el trabajo',
        },
        {
            id: 7,
            titulo: 'Webinar gratuito',
            descripcion: 'Estrategias de marketing digital para tu negocio',
        },
        {
            id: 8,
            titulo: 'Actualización de política',
            descripcion: 'Cambios importantes en nuestros términos y condiciones',
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [publicacionABorrar, setPublicacionABorrar] = useState(null);

    function handleVer(elemento) {
        navegar(`/publicaciones/${elemento.id}`);
    }

    function handleEditar(elemento) {
        navegar(`/editar/publicaciones/${elemento.id}`);
    }

    function handleBorrar(elemento) {
        setPublicacionABorrar(elemento);
        setShowModal(true);
    }

    function confirmarBorrado() {
        const nuevasPublicaciones = publicaciones.filter(pub => pub.id !== publicacionABorrar.id);
        setPublicaciones(nuevasPublicaciones);
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    function cancelarBorrado() {
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    return (
        <Container fluid className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Publicaciones</h2>
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <Tabla
                        informacion={publicaciones}
                        columnas={['titulo', 'descripcion']}
                        handleVer={handleVer}
                        handleEditar={handleEditar}
                        handleBorrar={handleBorrar}
                    />
                    <Modal
                        show={showModal}
                        handleClose={cancelarBorrado}
                        handleConfirm={confirmarBorrado}
                        titulo="Confirmar eliminación"
                        texto="¿Estás seguro de que deseas eliminar esta publicación?"
                        confirmar="Eliminar"
                        cancelar="Cancelar"
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditarPublicacionesPage;
