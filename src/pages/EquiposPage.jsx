import { useContext, useEffect, useState } from "react";
import Tarjeta from "../components/Tarjeta";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";
import { AppContext } from "../contexts/AppProvider";

// Cambiará según usuario para CRUD
function EquiposPage() {
    const [equipos, setEquipos] = useState([]);

    const { negocio } = useContext(AppContext);

    useEffect(() => {
        async function fetchEquipos() {
            const equiposData = await negocio.getDatos('equipos');
            setEquipos(equiposData);
        }
        fetchEquipos();
    }, []);

    return (
        <>
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


            {/* Si tiene permisos de administracion, lista con equipos pendientes de inscripcion */}
        </>
    );
}

export default EquiposPage;