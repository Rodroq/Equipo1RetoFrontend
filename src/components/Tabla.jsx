import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './Tabla.css';

function Tabla({ informacion, columnas, handleVer, handleEditar, handleBorrar }) {
    if (!informacion || informacion.length === 0) {
        return <p>No hay datos disponibles</p>;
    }

    // Usamos el array de columnas proporcionado en lugar de Object.keys
    const columnasAMostrar = columnas || Object.keys(informacion[0]);

    return (
        <Container>
            {/* Cabeceras */}
            <Row className="tabla-header py-3 bg-primary text-white rounded-top">
                {columnasAMostrar.map((columna, index) => (
                    <Col key={index} className="text-capitalize fw-bold">
                        {columna}
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
                    {columnasAMostrar.map((columna, colIndex) => (
                        <Col key={colIndex} className="text-secondary">
                            {item[columna]}
                        </Col>
                    ))}
                    <Col className="text-center">
                        <Button variant="primary" size="m" className="mx-1" onClick={() => handleVer(item)}>
                            <i className="fas fa-eye"></i> Ver
                        </Button>
                        <Button variant="warning" size="m" className="mx-1" onClick={() => handleEditar(item)}>
                            <i className="fas fa-edit"></i> Editar
                        </Button>
                        <Button variant="danger" size="m" className="mx-1" onClick={() => handleBorrar(item)}>
                            <i className="fas fa-trash"></i> Borrar
                        </Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default Tabla;