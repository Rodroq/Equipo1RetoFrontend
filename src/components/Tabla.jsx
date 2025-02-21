import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Tabla.css';

/**
 * Componente que recibe datos y los muestra en forma de tabla, junto a 3 funciones para ver, editar y borrar
 * @param {Array} informacion //Son los datos que le llegan a la tabla
 * @param {Array} columnas //Son las columnas que se muestran de la informacion pasada
 * @param {Function} handleVer //Funcion que maneja el boton Ver
 * @param {Function} handleEditar //Funcion que maneja el boton Editar
 * @param {Function} handleBorrar //Funcion que maneja el boton Borrar
 * @returns {JSX.Element}
 */
function Tabla({ informacion, columnas, handleVer, handleEditar, handleBorrar }) {
    // Comprobamos que haya datos, en caso contrario mostramos un mensaje
    if (!informacion || informacion.length === 0) {
        return <p className="text-center mt-3">No hay datos disponibles</p>;
    }

    // Guardamos las columnas que hay que mostrar
    const columnasAMostrar = columnas || Object.keys(informacion[0]);
    // Verificamos que haya acciones, en caso contrario no se mostrara la columna Acciones
    const hayAcciones = handleVer || handleEditar || handleBorrar;

    return (
        <Container fluid>
            <Table striped bordered hover responsive className="text-center align-middle">
                <thead className="tabla-header">
                    <tr>
                        {columnasAMostrar.map((columna, index) => (
                            <th key={index} className="text-capitalize">
                                {columna}
                            </th>
                        ))}
                        {hayAcciones && (<th>Acciones</th>)}
                    </tr>
                </thead>
                <tbody>
                    {informacion.map((item, index) => (
                        <tr key={index}>
                            {columnasAMostrar.map((columna, colIndex) => (
                                <td key={colIndex} className="text-secondary textoTruncado">
                                    {item[columna]}
                                </td>
                            ))}
                            {hayAcciones && (<td>
                                <div className="d-flex justify-content-center align-items-center gap-2 py-2">
                                    {handleVer && (<Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="d-flex align-items-center gap-1"
                                        onClick={() => handleVer(item)}
                                        title="Ver detalles"
                                    >
                                        <i className="bi bi-eye" style={{ fontSize: '16px'}}></i>
                                        <span className="d-none d-md-inline">Ver</span>
                                    </Button>)}
                                    {handleEditar && (<Button
                                        variant="outline-success"
                                        size="sm"
                                        className="d-flex align-items-center gap-1"
                                        onClick={() => handleEditar(item)}
                                        title="Editar elemento"
                                    >
                                        <i className="bi bi-pen" style={{ fontSize: '16px'}}></i>
                                        <span className="d-none d-md-inline">Editar</span>
                                    </Button>)}
                                    {handleBorrar && (<Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="d-flex align-items-center gap-1"
                                        onClick={() => handleBorrar(item)}
                                        title="Borrar elemento"
                                    >
                                        <i className="bi bi-trash3" style={{ fontSize: '16px'}}></i>
                                        <span className="d-none d-md-inline">Borrar</span>
                                    </Button>)}
                                </div>
                            </td>)}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Tabla;
