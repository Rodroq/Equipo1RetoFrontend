"use client"

import { Container, Table, Card, Row, Col, Badge, Button, Spinner, Tabs, Tab } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/AppProvider"
import { useNavigate } from "react-router-dom"

function ClasificacionPage() {
  // Estados
  const [clasificacionGrupoA, setClasificacionGrupoA] = useState([])
  const [clasificacionGrupoB, setClasificacionGrupoB] = useState([])
  const [proximosPartidos, setProximosPartidos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [grupoActivo, setGrupoActivo] = useState("A")

  // Navegación
  const navegar = useNavigate()

  // Contexto
  const { negocio } = useContext(AppContext)

  // Efecto al montar el componente
  useEffect(() => {
    async function fetchDatos() {
      try {
        setCargando(true)

        // Obtener datos de partidos y equipos
        const partidosResponse = await negocio.getDatos("partidos")
        const equiposResponse = await negocio.getDatos("equipos")

        if (!partidosResponse || !equiposResponse) {
          console.error("No se han obtenido los datos necesarios.")
          setCargando(false)
          return
        }

        const partidos = partidosResponse.partidos.partidos
        const equipos = equiposResponse.equipos

        // Dividir equipos en grupos A y B
        let equiposGrupoA = []
        let equiposGrupoB = []

        // Primero intentamos ver si los equipos ya tienen asignado un grupo
        const equiposConGrupoA = equipos.filter((equipo) => equipo.grupo === "A")
        const equiposConGrupoB = equipos.filter((equipo) => equipo.grupo === "B")

        // Si ya hay equipos con grupos asignados, los usamos
        if (equiposConGrupoA.length > 0 || equiposConGrupoB.length > 0) {
          equiposGrupoA = equiposConGrupoA
          equiposGrupoB = equiposConGrupoB
        } else {
          // Si no hay información de grupo, dividimos los equipos en dos grupos de igual tamaño
          const equiposCopia = [...equipos] // Hacemos una copia para no modificar el original
          const mitad = Math.ceil(equiposCopia.length / 2)

          // Asignamos grupos a los equipos
          equiposCopia.forEach((equipo, index) => {
            if (index < mitad) {
              equipo.grupo = "A"
              equiposGrupoA.push(equipo)
            } else {
              equipo.grupo = "B"
              equiposGrupoB.push(equipo)
            }
          })
        }

        // Filtrar partidos por grupo
        const partidosGrupoA = partidos.filter((partido) => {
          const equipoLocalEnGrupoA = equiposGrupoA.some((e) => e.nombre === partido.equipoL)
          const equipoVisitanteEnGrupoA = equiposGrupoA.some((e) => e.nombre === partido.equipoV)
          return equipoLocalEnGrupoA || equipoVisitanteEnGrupoA // Cambiado && por ||
        })

        const partidosGrupoB = partidos.filter((partido) => {
          const equipoLocalEnGrupoB = equiposGrupoB.some((e) => e.nombre === partido.equipoL)
          const equipoVisitanteEnGrupoB = equiposGrupoB.some((e) => e.nombre === partido.equipoV)
          return equipoLocalEnGrupoB || equipoVisitanteEnGrupoB // Cambiado && por ||
        })

        // Calcular clasificación para cada grupo
        const clasificacionA = calcularClasificacion(partidosGrupoA, equiposGrupoA)
        const clasificacionB = calcularClasificacion(partidosGrupoB, equiposGrupoB)

        setClasificacionGrupoA(clasificacionA)
        setClasificacionGrupoB(clasificacionB)

        // Obtener próximos partidos (ordenados por fecha)
        const hoy = new Date()
        const proximos = partidos
          .filter((partido) => new Date(`${partido.fecha}T${partido.hora}`) > hoy)
          .sort((a, b) => new Date(`${a.fecha}T${a.hora}`) - new Date(`${b.fecha}T${b.hora}`))
          .slice(0, 3) // Mostrar solo los 3 próximos partidos

        setProximosPartidos(proximos)
        setCargando(false)
      } catch (error) {
        console.error("Error al obtener datos:", error)
        setCargando(false)
      }
    }

    fetchDatos()
  }, [negocio])

  // Función para calcular la clasificación a partir de partidos y equipos
  const calcularClasificacion = (partidos, equipos) => {
    const estadisticas = {}

    // Inicializar estadísticas
    equipos.forEach((equipo) => {
      estadisticas[equipo.nombre] = {
        nombre: equipo.nombre,
        logo: equipo.logo || "/placeholder.svg?height=30&width=30",
        puntos: 0,
        jugados: 0,
        ganados: 0,
        empatados: 0,
        perdidos: 0,
        golesFavor: 0,
        golesContra: 0,
      }
    })

    // Procesar cada partido
    partidos.forEach((partido) => {
      const fechaPartido = new Date(`${partido.fecha}T${partido.hora}`)
      const hoy = new Date()
      
      if (fechaPartido > hoy) return

      if (partido.golesL === null || partido.golesV === null || 
          partido.golesL === undefined || partido.golesV === undefined) {
        return
      }

      const equipoLocal = partido.equipoL
      const equipoVisitante = partido.equipoV

      // Solo procesar si el equipo pertenece al grupo que estamos calculando
      if (estadisticas[equipoLocal]) {
        estadisticas[equipoLocal].jugados += 1
        estadisticas[equipoLocal].golesFavor += partido.golesL
        estadisticas[equipoLocal].golesContra += partido.golesV
        
        if (partido.golesL > partido.golesV) {
          estadisticas[equipoLocal].ganados += 1
          estadisticas[equipoLocal].puntos += 3
        } else if (partido.golesL < partido.golesV) {
          estadisticas[equipoLocal].perdidos += 1
        } else {
          estadisticas[equipoLocal].empatados += 1
          estadisticas[equipoLocal].puntos += 1
        }
      }

      if (estadisticas[equipoVisitante]) {
        estadisticas[equipoVisitante].jugados += 1
        estadisticas[equipoVisitante].golesFavor += partido.golesV
        estadisticas[equipoVisitante].golesContra += partido.golesL
        
        if (partido.golesV > partido.golesL) {
          estadisticas[equipoVisitante].ganados += 1
          estadisticas[equipoVisitante].puntos += 3
        } else if (partido.golesV < partido.golesL) {
          estadisticas[equipoVisitante].perdidos += 1
        } else {
          estadisticas[equipoVisitante].empatados += 1
          estadisticas[equipoVisitante].puntos += 1
        }
      }
    })

    return Object.values(estadisticas).sort((a, b) => {
      if (b.puntos !== a.puntos) return b.puntos - a.puntos
      const difA = a.golesFavor - a.golesContra
      const difB = b.golesFavor - b.golesContra
      if (difB !== difA) return difB - difA
      return b.golesFavor - a.golesFavor
    })
  }

  // Función para calcular la diferencia de goles
  const diferenciaGoles = (golesFavor, golesContra) => {
    const diferencia = golesFavor - golesContra
    return diferencia > 0 ? `+${diferencia}` : diferencia
  }

  // Función para formatear la fecha
  const formatearFecha = (fechaStr) => {
    const fecha = new Date(fechaStr)
    return fecha.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" })
  }

  // Renderizado de la tabla de clasificación
  const renderTablaClasificacion = (clasificacion) => {
    if (cargando) {
      return (
        <div className="text-center p-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Cargando clasificación...</p>
        </div>
      )
    }

    if (!clasificacion || clasificacion.length === 0) {
      return <div className="alert alert-info">No hay datos de clasificación disponibles para este grupo.</div>
    }

    return (
      <div className="table-responsive">
        <Table striped hover className="align-middle">
          <thead className="table-primary">
            <tr>
              <th className="text-center">#</th>
              <th>Equipo</th>
              <th className="text-center">PTS</th>
              <th className="text-center">PJ</th>
              <th className="text-center">PG</th>
              <th className="text-center">PE</th>
              <th className="text-center">PP</th>
              <th className="text-center">GF</th>
              <th className="text-center">GC</th>
              <th className="text-center">DIF</th>
            </tr>
          </thead>
          <tbody>
            {clasificacion.map((equipo, index) => (
              <tr key={index} className={index < 2 ? "table-success" : ""}>
                <td className="text-center fw-bold">{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <span>{equipo.nombre}</span>
                    {index === 0 && equipo.jugados > 0 && (
                      <Badge bg="warning" text="dark" className="ms-2">
                        <i className="bi bi-trophy-fill"></i>
                      </Badge>
                    )}
                  </div>
                </td>
                <td className="text-center fw-bold">{equipo.puntos}</td>
                <td className="text-center">{equipo.jugados}</td>
                <td className="text-center text-success">{equipo.ganados}</td>
                <td className="text-center text-warning">{equipo.empatados}</td>
                <td className="text-center text-danger">{equipo.perdidos}</td>
                <td className="text-center">{equipo.golesFavor}</td>
                <td className="text-center">{equipo.golesContra}</td>
                <td className="text-center fw-bold">
                  <span
                    className={
                      diferenciaGoles(equipo.golesFavor, equipo.golesContra) > 0
                        ? "text-success"
                        : diferenciaGoles(equipo.golesFavor, equipo.golesContra) < 0
                          ? "text-danger"
                          : ""
                    }
                  >
                    {diferenciaGoles(equipo.golesFavor, equipo.golesContra)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  // Renderizado
  return (
    <>
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <Card className="border-primary bg-light shadow border-2 aparecerArriba">
              <Card.Header>
                <Card.Title className="d-flex align-items-center">
                  <i className="bi bi-trophy m-2" style={{ fontSize: "24px" }}></i>
                  Clasificación del Torneo
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text className="lead mb-4">
                  Consulta la clasificación actualizada de los equipos participantes en la Liga Solidaria FP Cantabria.
                </Card.Text>

                <Tabs activeKey={grupoActivo} onSelect={(k) => setGrupoActivo(k)} className="mb-4" fill>
                  <Tab
                    eventKey="A"
                    title={
                      <span>
                        <i className="bi bi-people-fill me-2"></i>Grupo A
                      </span>
                    }
                  >
                    {renderTablaClasificacion(clasificacionGrupoA)}
                  </Tab>
                  <Tab
                    eventKey="B"
                    title={
                      <span>
                        <i className="bi bi-people-fill me-2"></i>Grupo B
                      </span>
                    }
                  >
                    {renderTablaClasificacion(clasificacionGrupoB)}
                  </Tab>
                </Tabs>

                <div className="mt-4">
                  <h5 className="mb-3">Leyenda</h5>
                  <Row className="g-2">
                    <Col xs={6} md={3}>
                      <Badge bg="primary" className="w-100 p-2">
                        PJ: Partidos jugados
                      </Badge>
                    </Col>
                    <Col xs={6} md={3}>
                      <Badge bg="success" className="w-100 p-2">
                        PG: Partidos ganados
                      </Badge>
                    </Col>
                    <Col xs={6} md={3}>
                      <Badge bg="warning" className="text-dark w-100 p-2">
                        PE: Partidos empatados
                      </Badge>
                    </Col>
                    <Col xs={6} md={3}>
                      <Badge bg="danger" className="w-100 p-2">
                        PP: Partidos perdidos
                      </Badge>
                    </Col>
                  </Row>
                </div>
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
                  Formato del Torneo
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <strong>Fase de grupos:</strong> Los equipos se dividen en dos grupos (A y B) y juegan todos contra
                  todos dentro de su grupo.
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <strong>Semifinales:</strong> Los dos primeros equipos de cada grupo avanzan a semifinales.
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <strong>Final:</strong> Los ganadores de las semifinales juegan la final para determinar el campeón
                  del torneo.
                </Card.Text>
                <Card.Text>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <strong>Puntuación:</strong> 3 puntos por victoria, 1 punto por empate, 0 puntos por derrota.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="border-primary bg-light h-100 shadow border-2 aparecerDerecha">
              <Card.Header className="bg-primary text-white">
                <Card.Title>
                  <i className="bi bi-calendar-event m-2" style={{ fontSize: "24px" }}></i>
                  Próximos Partidos
                </Card.Title>
              </Card.Header>
              <Card.Body>
                {cargando ? (
                  <div className="text-center p-3">
                    <Spinner animation="border" variant="primary" size="sm" />
                    <p className="mt-2">Cargando partidos...</p>
                  </div>
                ) : proximosPartidos.length === 0 ? (
                  <div className="alert alert-info">No hay próximos partidos programados.</div>
                ) : (
                  <>
                    {proximosPartidos.map((partido, index) => (
                      <div
                        key={partido.slug}
                        className={`d-flex justify-content-between align-items-center p-2 ${index < proximosPartidos.length - 1 ? "border-bottom mb-3" : ""}`}
                      >
                        <div className="d-flex align-items-center">
                          <span>{partido.equipoL}</span>
                        </div>
                        <div className="text-center">
                          <Badge bg="warning" text="dark">
                            {formatearFecha(partido.fecha)} - {partido.hora.substring(0, 5)}
                          </Badge>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>{partido.equipoV}</span>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ClasificacionPage