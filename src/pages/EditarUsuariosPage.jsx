import { Card, Container } from "react-bootstrap";
import Tabla from '../components/Tabla.jsx'
import Modal from '../components/Modal.jsx'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditarUsuariosPage() {
    const navegar = useNavigate();
    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            usuario: 'admin',
            rol: 'admin',
        },
        {
            id: 2,
            usuario: 'juan.perez',
            rol: 'usuario',
        },
        {
            id: 3,
            usuario: 'maria.garcia',
            rol: 'editor',
        },
        {
            id: 4,
            usuario: 'carlos.rodriguez',
            rol: 'usuario',
        },
        {
            id: 5,
            usuario: 'ana.martinez',
            rol: 'editor',
        },
        {
            id: 6,
            usuario: 'roberto.lopez',
            rol: 'usuario',
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [publicacionABorrar, setPublicacionABorrar] = useState(null);

    function handleVer(elemento) {
        navegar(`/usuarios/${elemento.id}`);
    }

    function handleEditar(elemento) {
        navegar(`${elemento.id}`);
    }

    function handleBorrar(elemento) {
        setPublicacionABorrar(elemento);
        setShowModal(true);
    }

    function confirmarBorrado() {
        const nuevasUsuarios = usuarios.filter(pub => pub.id !== publicacionABorrar.id);
        setUsuarios(nuevasUsuarios);
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    function cancelarBorrado() {
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Usuarios</h2>
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <Tabla
                        informacion={usuarios}
                        columnas={['usuario', 'rol']}
                        handleVer={handleVer}
                        handleEditar={handleEditar}
                        handleBorrar={handleBorrar}
                    />
                    <Modal
                        show={showModal}
                        handleClose={cancelarBorrado}
                        handleConfirm={confirmarBorrado}
                        titulo="Confirmar eliminación"
                        texto="¿Estás seguro de que deseas eliminar este usuario?"
                        confirmar="Eliminar"
                        cancelar="Cancelar"
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditarUsuariosPage;
