import { Button, Card, Container } from "react-bootstrap";
import Tabla from '../components/Tabla.jsx'
import Modal from '../components/Modal.jsx'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider.jsx";

function EditarPublicacionesPage() {
    const navegar = useNavigate();
    const [publicaciones, setPublicaciones] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [publicacionABorrar, setPublicacionABorrar] = useState(null);
    const [error, setError] = useState(null);

    // Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente
    useEffect(() => {
        fetchPublicaciones();
    }, [negocio]);

    async function fetchPublicaciones() {
        try {
            const publicacionesData = await negocio.getDatos('publicaciones');

            if (!publicacionesData) {
                setError('No se han encontrado usuarios');
                return;
            }

            setPublicaciones(publicacionesData.publicaciones);
        } catch (err) {
            setError('Error al cargar las publicaciones');
            console.error(err);
        }
    }

    function handleVer(elemento) {
        navegar(`/publicaciones/${elemento.slug}`);
    }

    function handleEditar(elemento) {
        navegar(`/editar/publicaciones/${elemento.slug}`);
    }

    function handleBorrar(elemento) {
        setPublicacionABorrar(elemento);
        setShowModal(true);
    }

    async function confirmarBorrado() {
        try {
            await negocio.deleteDatos(`publicaciones/${publicacionABorrar.slug}`);
            const nuevasPublicaciones = await fetchPublicaciones();
            setPublicaciones(nuevasPublicaciones);
        } catch (err) {
            setError('Error al eliminar la publicación');
            console.error(err);
        } finally {
            setShowModal(false);
            setPublicacionABorrar(null);
        }
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
                    <div className="mb-3">
                        <Button
                            variant="primary"
                            onClick={() => navegar('crear')}
                            className="mb-3"
                        >
                            Crear Nueva Publicación
                        </Button>
                    </div>
                    <Tabla
                        informacion={publicaciones}
                        columnas={['titulo', 'tipo']}
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
