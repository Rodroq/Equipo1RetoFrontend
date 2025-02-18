import { useContext, useEffect, useState } from "react";
import Tarjeta from "../components/Tarjeta";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";
import ErrorDisplay from "../components/ErrorDisplay";
import LoadingDisplay from "../components/LoadingDisplay";

function EquiposPage() {
    const [equipos, setEquipos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { negocio } = useContext(AppContext);

    useEffect(() => {
        async function fetchEquipos() {
            try {
                const equiposData = await negocio.getDatos('equipos');
                if (!equiposData) {
                    setError('No se han encontrado equipos');
                    return;
                }
                setEquipos(equiposData);
            } catch (err) {
                setError('Error al cargar los equipos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchEquipos();
    }, [negocio]);

    if (loading) {
        return <LoadingDisplay />;
    }

    if (error) {
        return <ErrorDisplay mensaje={error} />;
    }

    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
                <Card.Body>
                    <div className="row justify-content-center">
                        {equipos.map(equipo => (
                            <div className="col-lg-3 col-md-4 mb-4" key={equipo.id}>
                                <Tarjeta
                                    tituloTarjeta={equipo.nombre}
                                    textoTarjeta={equipo.centro}
                                    textoBoton="Ver equipo"
                                    imagenTarjeta={equipo.imagen}
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