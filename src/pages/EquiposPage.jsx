import { useContext, useEffect, useState, useId } from "react";
import Tarjeta from "../components/Tarjeta";
import { Card, Container } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import ErrorDisplay from "../components/ErrorDisplay";

function EquiposPage() {
    // ID de componente
    const idComponente = useId();

    // Estados
    const [equipos, setEquipos] = useState([]);
    const [error, setError] = useState(null);

    //Contexto
    const { negocio } = useContext(AppContext);

    // Efecto al montar el componente
    useEffect(() => {
        async function fetchEquipos() {
            try {
                const equiposData = await negocio.getDatos('equipos');

                if (!equiposData) {
                    setError('No se han encontrado equipos');
                    return;
                }

                setEquipos(equiposData.equipos);
            } catch (err) {
                setError('Error al cargar los equipos');
                console.error(err);
            }
        }

        fetchEquipos();
    }, [negocio]);

    if (error) {
        return <ErrorDisplay mensaje={error} />;
    }

    // Renderizado
    return (
        <Container className="mt-5 mb-5">
            <h2 className="text-center mb-5 section-titulo">Listado de equipos</h2>
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <div className="row justify-content-center">
                        {equipos.map((equipo, index) => (
                            <div className="col-lg-3 col-md-4 mb-4 aumentar-escala" key={`${idComponente}-${index}`}>
                                <Tarjeta
                                    tituloTarjeta={equipo.nombre}
                                    textoTarjeta={equipo.centro.nombre}
                                    textoBoton="Ver equipo"
                                    // imagenTarjeta={equipo.imagen}
                                    nombreEntidad="equipos"
                                    datosObjeto={equipo} />
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EquiposPage;