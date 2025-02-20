import { Card, Container, Image } from "react-bootstrap";
import Tabla from '../components/Tabla.jsx'
import Modal from '../components/Modal.jsx'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditarImagenesPage() {
    const navegar = useNavigate();
    const [imagenes, setImagenes] = useState([
        {
            id: 1,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo principal de la sede',
        },
        {
            id: 2,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo para documentos oficiales',
        },
        {
            id: 3,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo para redes sociales',
        },
        {
            id: 4,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo versión pequeña',
        },
        {
            id: 5,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo para presentaciones',
        },
        {
            id: 6,
            imagen: <Image src="../src/assets/logo_sede_torrelavega.png" height={100} width={100}></Image>,
            descripcion: 'Logo para material impreso',
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [publicacionABorrar, setPublicacionABorrar] = useState(null);

    function handleVer(elemento) {
        navegar(`/imagenes/${elemento.id}`);
    }

    function handleEditar(elemento) {
        navegar(`${elemento.id}`);
    }

    function handleBorrar(elemento) {
        setPublicacionABorrar(elemento);
        setShowModal(true);
    }

    function confirmarBorrado() {
        const nuevasImagenes = imagenes.filter(pub => pub.id !== publicacionABorrar.id);
        setImagenes(nuevasImagenes);
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    function cancelarBorrado() {
        setShowModal(false);
        setPublicacionABorrar(null);
    }

    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Imágenes</h2>
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <Tabla
                        informacion={imagenes}
                        columnas={['imagen', 'descripcion']}
                        handleVer={handleVer}
                        handleEditar={handleEditar}
                        handleBorrar={handleBorrar}
                    />
                    <Modal
                        show={showModal}
                        handleClose={cancelarBorrado}
                        handleConfirm={confirmarBorrado}
                        titulo="Confirmar eliminación"
                        texto="¿Estás seguro de que deseas eliminar esta imágen?"
                        confirmar="Eliminar"
                        cancelar="Cancelar"
                    />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditarImagenesPage;
