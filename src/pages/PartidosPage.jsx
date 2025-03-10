"use client"

import { Container, Card, Row, Col, Badge, Tabs, Tab } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/AppProvider"
import { useNavigate } from "react-router-dom"
import ListadoPartidos from "../components/ListadoPartidos"
import "./css/PartidosPage.css"

function PartidosPage() {
    // Estados
    const [partidos, setPartidos] = useState([])
    const [filtroActivo, setFiltroActivo] = useState("todos")
    const [cargando, setCargando] = useState(true)

    // Contexto
    const { negocio } = useContext(AppContext)

    // Efecto al montar el componente
    useEffect(() => {
        async function fetchPartidos() {
            try {
                setCargando(true);
                const datosPartidos = await negocio.getDatos('partidos');

                // Para desarrollo:
                setPartidos(datosPartidos.partidos.partidos)

                setTimeout(() => {
                    setCargando(false)
                }, 500)
            } catch (error) {
                console.error(error)
                setCargando(false)
            }
        }

        fetchPartidos()
    }, [negocio])

    // Función para formatear la fecha
    const formatearFecha = (fechaStr) => {
        try {
            const fecha = new Date(fechaStr)
            const opciones = {
                day: "numeric",
                month: "long",
                year: "numeric",
            }
            return fecha.toLocaleDateString("es-ES", opciones)
        } catch (error) {
            console.error("Error al formatear fecha:", error)
            return fechaStr
        }
    }

    // Función para formatear la hora
    const formatearHora = (horaStr) => {
        try {
            // Convertir "16:34:00" a "16:34"
            return horaStr.substring(0, 5)
        } catch (error) {
            console.error("Error al formatear hora:", error)
            return horaStr
        }
    }

    // Función para determinar si un partido ya se jugó
    const partidoJugado = (fechaStr) => {
        try {
            const fechaPartido = new Date(fechaStr)
            const hoy = new Date()
            hoy.setHours(0, 0, 0, 0)
            return fechaPartido < hoy
        } catch (error) {
            console.error("Error al verificar si el partido se jugó:", error)
            return false
        }
    }

    // Función para determinar si un partido es hoy
    const partidoHoy = (fechaStr) => {
        try {
            const fechaPartido = new Date(fechaStr)
            const hoy = new Date()

            return (
                fechaPartido.getDate() === hoy.getDate() &&
                fechaPartido.getMonth() === hoy.getMonth() &&
                fechaPartido.getFullYear() === hoy.getFullYear()
            )
        } catch (error) {
            console.error("Error al verificar si el partido es hoy:", error)
            return false
        }
    }

    // Función para determinar si un partido es futuro
    const partidoFuturo = (fechaStr) => {
        try {
            const fechaPartido = new Date(fechaStr)
            const hoy = new Date()
            hoy.setHours(0, 0, 0, 0)
            return fechaPartido > hoy
        } catch (error) {
            console.error("Error al verificar si el partido es futuro:", error)
            return false
        }
    }

    // Función para determinar el resultado del partido
    const resultadoPartido = (golesL, golesV) => {
        if (golesL > golesV) return "victoria-local"
        if (golesL < golesV) return "victoria-visitante"
        return "empate"
    }

    // Filtrar partidos según la pestaña seleccionada
    const filtrarPartidos = () => {
        if (filtroActivo === "jugados") {
            return partidos.filter((partido) => partidoJugado(partido.fecha))
        } else if (filtroActivo === "hoy") {
            return partidos.filter((partido) => partidoHoy(partido.fecha))
        } else if (filtroActivo === "proximos") {
            return partidos.filter((partido) => partidoFuturo(partido.fecha))
        }
        return partidos
    }

    // Agrupar partidos por fecha
    const agruparPartidosPorFecha = (partidosFiltrados) => {
        const grupos = {}

        partidosFiltrados.forEach((partido) => {
            if (!grupos[partido.fecha]) {
                grupos[partido.fecha] = []
            }
            grupos[partido.fecha].push(partido)
        })

        return grupos
    }

    // Ordenar fechas de más reciente a más antigua
    const ordenarFechas = (fechas) => {
        return fechas.sort((a, b) => {
            const fechaA = new Date(a)
            const fechaB = new Date(b)
            return fechaB - fechaA
        })
    }

    // Calcular estadísticas de equipos
    const calcularEstadisticas = () => {
        const stats = {};

        partidos.forEach(partido => {
            // Inicializar estadísticas si no existen
            if (!stats[partido.equipoL]) {
                stats[partido.equipoL] = { golesFavor: 0, golesContra: 0 };
            }
            if (!stats[partido.equipoV]) {
                stats[partido.equipoV] = { golesFavor: 0, golesContra: 0 };
            }

            // Actualizar goles
            stats[partido.equipoL].golesFavor += partido.golesL || 0;
            stats[partido.equipoL].golesContra += partido.golesV || 0;
            stats[partido.equipoV].golesFavor += partido.golesV || 0;
            stats[partido.equipoV].golesContra += partido.golesL || 0;
        });

        return stats;
    };

    // Obtener mejor ataque
    const obtenerMejorAtaque = (stats) => {
        let mejorEquipo = { equipo: '', goles: 0 };
        Object.entries(stats).forEach(([equipo, data]) => {
            if (data.golesFavor > mejorEquipo.goles) {
                mejorEquipo = { equipo, goles: data.golesFavor };
            }
        });
        return mejorEquipo;
    };

    // Obtener mejor defensa
    const obtenerMejorDefensa = (stats) => {
        let mejorEquipo = { equipo: '', goles: Number.MAX_VALUE };
        Object.entries(stats).forEach(([equipo, data]) => {
            if (data.golesContra < mejorEquipo.goles) {
                mejorEquipo = { equipo, goles: data.golesContra };
            }
        });
        return mejorEquipo;
    };

    // Partidos filtrados y agrupados
    const partidosFiltrados = filtrarPartidos()
    const partidosAgrupados = agruparPartidosPorFecha(partidosFiltrados)
    const fechasOrdenadas = ordenarFechas(Object.keys(partidosAgrupados))

    const estadisticas = calcularEstadisticas();
    const mejorAtaque = obtenerMejorAtaque(estadisticas);
    const mejorDefensa = obtenerMejorDefensa(estadisticas);

    // Renderizado
    return (
        <>
            <Container className="my-5">
                <Row className="mb-4">
                    <Col>
                        <Card className="border-primary bg-light shadow border-2 aparecerArriba">
                            <Card.Header>
                                <Card.Title className="d-flex align-items-center">
                                    <i className="bi bi-calendar-check m-2" style={{ fontSize: "24px" }}></i>
                                    Calendario de Partidos
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className="lead mb-4">
                                    Consulta todos los partidos de la Liga Solidaria FP Cantabria, resultados y próximos encuentros.
                                </Card.Text>

                                <Tabs activeKey={filtroActivo} onSelect={(k) => setFiltroActivo(k)} className="mb-4" fill>
                                    <Tab eventKey="todos" title="Todos los partidos">
                                        <ListadoPartidos
                                            fechasOrdenadas={fechasOrdenadas}
                                            partidosAgrupados={partidosAgrupados}
                                            formatearFecha={formatearFecha}
                                            formatearHora={formatearHora}
                                            resultadoPartido={resultadoPartido}
                                            cargando={cargando}
                                        />
                                    </Tab>
                                    <Tab eventKey="jugados" title="Partidos jugados">
                                        <ListadoPartidos
                                            fechasOrdenadas={fechasOrdenadas}
                                            partidosAgrupados={partidosAgrupados}
                                            formatearFecha={formatearFecha}
                                            formatearHora={formatearHora}
                                            resultadoPartido={resultadoPartido}
                                            cargando={cargando}
                                        />
                                    </Tab>
                                    <Tab eventKey="hoy" title="Partidos de hoy">
                                        <ListadoPartidos
                                            fechasOrdenadas={fechasOrdenadas}
                                            partidosAgrupados={partidosAgrupados}
                                            formatearFecha={formatearFecha}
                                            formatearHora={formatearHora}
                                            resultadoPartido={resultadoPartido}
                                            cargando={cargando}
                                        />
                                    </Tab>
                                    <Tab eventKey="proximos" title="Próximos partidos">
                                        <ListadoPartidos
                                            fechasOrdenadas={fechasOrdenadas}
                                            partidosAgrupados={partidosAgrupados}
                                            formatearFecha={formatearFecha}
                                            formatearHora={formatearHora}
                                            resultadoPartido={resultadoPartido}
                                            cargando={cargando}
                                        />
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="border-success bg-light h-100 shadow border-2 aparecerIzquierda">
                            <Card.Header className="bg-success text-white">
                                <Card.Title>
                                    <i className="bi bi-info-circle m-2" style={{ fontSize: "24px" }}></i>
                                    Información de Partidos
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>Duración:</strong> Los partidos duran 10 minutos por tiempo. En la 1ª fase se juega un solo tiempo, y en la 2ª fase, dos tiempos.
                                    20 minutos.
                                </Card.Text>
                                <Card.Text>
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>Ubicación:</strong> Todos los partidos se juegan en el Pabellón La Habana Vieja de
                                    Torrelavega.
                                </Card.Text>
                                <Card.Text>
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <strong>Reglamento:</strong> Se aplica el reglamento oficial de fútbol sala con adaptaciones para el
                                    torneo solidario.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="border-primary bg-light h-100 shadow border-2 aparecerDerecha">
                            <Card.Header className="bg-primary text-white">
                                <Card.Title>
                                    <i className="bi bi-trophy m-2" style={{ fontSize: "24px" }}></i>
                                    Equipos Destacados
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="mb-3">
                                    <h5 className="border-bottom pb-2">Mejor Ataque</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold">{mejorAtaque.equipo}</span>
                                        </div>
                                        <Badge bg="success" className="p-2">
                                            {mejorAtaque.goles} goles
                                        </Badge>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h5 className="border-bottom pb-2">Mejor Defensa</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <span className="fw-bold">{mejorDefensa.equipo}</span>
                                        </div>
                                        <Badge bg="primary" className="p-2">
                                            {mejorDefensa.goles} goles
                                        </Badge>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PartidosPage

