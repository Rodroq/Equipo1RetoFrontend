import { useLocation } from "react-router-dom";

// Cambiará según usuario para CRUD
function DetallesEquipoPage() {
    const { state } = useLocation();
    
    // Los datos del equipo se pasan por navigate (Tarjeta) a este componente mediante location
    // Habría que comprobar si se han pasado los datos para de lo contrario intentar recuperarlos por ID con fetch
    if (state) {
        console.log(state.entidad.nombre);
    } else {
        console.error('No se han encontrado los datos');
    }

    return (
        <>
            <h1>DetallesEquipoPage</h1>
            {state && state.entidad.nombre}
        </>
    );
}

export default DetallesEquipoPage;