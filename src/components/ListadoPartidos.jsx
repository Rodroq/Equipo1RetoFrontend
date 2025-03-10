import { Badge, Table } from "react-bootstrap"

function ListadoPartidos({
    fechasOrdenadas,
    partidosAgrupados,
    formatearFecha,
    formatearHora,
    resultadoPartido,
    cargando,
}) {
    if (cargando) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2">Cargando partidos...</p>
            </div>
        )
    }

    if (fechasOrdenadas.length === 0) {
        return (
            <div className="alert alert-info">No hay partidos disponibles para mostrar con los filtros seleccionados.</div>
        )
    }

    return (
        <div>
            {fechasOrdenadas.map((fecha) => (
                <div key={fecha} className="mb-4">
                    <h4 className="border-bottom pb-2 mb-3">
                        <i className="bi bi-calendar-date me-2"></i>
                        {formatearFecha(fecha)}
                    </h4>
                    <div className="table-responsive">
                        <Table hover className="align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center">Hora</th>
                                    <th>Local</th>
                                    <th className="text-center">Resultado</th>
                                    <th>Visitante</th>
                                    <th className="text-center">Pabellón</th>
                                </tr>
                            </thead>
                            <tbody>
                                {partidosAgrupados[fecha].map((partido) => (
                                    <tr key={partido.slug} className={`partido-${resultadoPartido(partido.golesL, partido.golesV)}`}>
                                        <td className="text-center">
                                            <Badge bg="secondary" className="p-2">
                                                {formatearHora(partido.hora)}
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className={partido.golesL > partido.golesV ? "fw-bold" : ""}>{partido.equipoL}</span>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="resultado-partido">
                                                <span className="resultado-local">{partido.golesL}</span>
                                                <span className="separador">-</span>
                                                <span className="resultado-visitante">{partido.golesV}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className={partido.golesV > partido.golesL ? "fw-bold" : ""}>{partido.equipoV}</span>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <small className="text-muted">
                                                <i className="bi bi-geo-alt me-1"></i>
                                                {partido.pabellon}
                                            </small>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListadoPartidos;