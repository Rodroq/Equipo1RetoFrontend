import { useEffect, useState } from "react";
import Tarjeta from "../components/Tarjeta";
import $negocio from "../core/negocio";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    function cargarEquipos() {
        if (equipos.length > 0) {
            const rows = [];
            for (let i = 0; i < equipos.length; i += 4) {
                const rowEquipos = equipos.slice(i, i + 4);
                rows.push(
                    <div className="row justify-content-center" key={i}>
                        {rowEquipos.map(equipo => (
                            <div className="col-lg-3 col-md-4 mb-4" key={equipo.id}>
                                <Tarjeta titulo={equipo.nombre} texto={equipo.centro} idEquipo={equipo.id} />
                            </div>
                        ))}
                    </div>
                );
            }
            return rows;
        }
    }

    return (
        <>
            <h1>Listado de equipos</h1><br />
            <div className="container">
                {cargarEquipos()}
            </div>

            {/* Si tiene permisos de administracion, lista con equipos pendientes de inscripcion */}
        </>
    );
}

export default EquiposPage;