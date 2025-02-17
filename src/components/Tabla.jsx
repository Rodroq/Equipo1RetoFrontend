import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import './Tabla.css';

function Tabla({ informacion, handleVer, handleEditar, handleBorrar }) {
    // Modelo para pasar informacion:
    // informacion = [
    //     {
    //         titulo: 'Título 1',
    //         descripcion: 'Descripción 1',
    //         imagen: <Image src='../src/assets/logo_sede_torrelavega.png' width={25} height={25}></Image>
    //     },
    //     {
    //         titulo: 'Título 2',
    //         descripcion: 'Descripción 2',
    //         imagen: <Image src='../src/assets/logo_sede_torrelavega.png' width={25} height={25}></Image>
    //     },
    //     {
    //         titulo: 'Título 3',
    //         descripcion: 'Descripción 3',
    //         imagen: <Image src='../src/assets/logo_sede_torrelavega.png' width={25} height={25}></Image>
    //     }
    // ];

    // Si no hay información, mostrar mensaje
    if (!informacion || informacion.length === 0) {
        return <p>No hay datos disponibles</p>;
    }

    // Obtenemos las propiedades de la primera entidad para usar como titulo de cada columna
    const titulos = Object.keys(informacion[0]);

    return (
        <Container>
            {/* Titulos */}
            <Row className="tabla-header py-3 bg-primary text-white rounded-top">
                {titulos.map((titulo, index) => (
                    <Col key={index} className="text-capitalize fw-bold">
                        {titulo}
                    </Col>
                ))}
                <Col className="text-center">Acciones</Col>
            </Row>

            {/* Filas de datos */}
            {informacion.map((item, index) => (
                <Row
                    key={index}
                    className="tabla-row py-3 border-bottom align-items-center hover-effect"
                >
                    {titulos.map((titulo, colIndex) => (
                        <Col key={colIndex} className="text-secondary">
                            {item[titulo]}
                        </Col>
                    ))}
                    <Col className="text-center">
                        <Button variant="primary" size="m" className="mx-1" onClick={handleVer}>
                            <i className="fas fa-eye">Ver</i>
                        </Button>
                        <Button variant="warning" size="m" className="mx-1" onClick={handleEditar}>
                            <i className="fas fa-edit">Editar</i>
                        </Button>
                        <Button variant="danger" size="m" className="mx-1" onClick={handleBorrar}>
                            <i className="fas fa-trash">Borrar</i>
                        </Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default Tabla;