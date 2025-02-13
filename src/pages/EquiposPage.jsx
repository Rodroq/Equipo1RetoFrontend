import { useEffect, useState } from "react";
import Tarjeta from "../components/Tarjeta";
import $negocio from "../core/negocio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

// Cambiará según usuario para CRUD
function EquiposPage() {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        async function fetchEquipos() {
            const equiposData = await $negocio.obtenerEquipos();
            setEquipos(equiposData);
        }
        fetchEquipos();
    }, []);

    return (
        <>
            <h1>Listado de equipos</h1><br />
            <Container>
                <div className="row justify-content-center">
                    {equipos.map(equipo => (
                        <div className="col-lg-3 col-md-4 mb-4" key={equipo.id}>
                            <Tarjeta tituloTarjeta={equipo.nombre} textoTarjeta={equipo.centro} textoBoton="Ver equipo" imagenTarjeta={equipo.imagen} nombreEntidad="equipos" datosObjeto={equipo} />
                        </div>
                    ))}
                </div>
            </Container>
            

            {/* Si tiene permisos de administracion, lista con equipos pendientes de inscripcion */}
        </>
    );
}

export default EquiposPage;