import { Card, Container } from "react-bootstrap";
import Tabla from '../components/Tabla.jsx';
import Modal from '../components/Modal.jsx';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider.jsx";

function EditarUsuariosPage() {
    const navegar = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [usuarioABorrar, setUsuarioABorrar] = useState(null);
    const [error, setError] = useState(null);

    // Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente
    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const usuariosData = await negocio.getDatos('usuarios');
                console.log(usuariosData);

                if (!usuariosData) {
                    setError('No se han encontrado usuarios');
                    return;
                }

                setUsuarios(usuariosData.data);
            } catch (err) {
                setError('Error al cargar los usuarios');
                console.error(err);
            }
        }

        fetchUsuarios();
    }, [negocio]);

    function handleEditar(usuario) {
        navegar(`${usuario.slug}`);
    }

    function handleBorrar(usuario) {
        setUsuarioABorrar(usuario);
        setShowModal(true);
    }

    function confirmarBorrado() {
        const nuevosUsuarios = usuarios.filter(user => user.id !== usuarioABorrar.id);
        setUsuarios(nuevosUsuarios);
        setShowModal(false);
        setUsuarioABorrar(null);
    }

    function cancelarBorrado() {
        setShowModal(false);
        setUsuarioABorrar(null);
    }

    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Usuarios</h2>
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    {usuarios && (<><Tabla
                        informacion={usuarios}
                        columnas={['nombre', 'email', 'rol']}
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
                        /></>) || (<><p>{error}</p></>)}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditarUsuariosPage;