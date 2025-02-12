import vmEquipos from '../data/VMEquipos.js';

const $negocio = (function () {
    if (!localStorage.getItem('equipos')) {
        localStorage.setItem('equipos', JSON.stringify(vmEquipos.equipos));
    }
    let equipos = JSON.parse(localStorage.getItem('equipos'));

    function siguienteEquipoId() {
        let maxId = Math.max(...equipos.map(p => p.id), 0);
        return maxId + 1;
    }

    async function obtenerEquipos(filtro = '', inicio = 0, limite) {
        let filtrados = [...equipos];
        if (filtro != '') {
            filtro.toLowerCase();
            filtrados = filtrados.filter(equipo => {
                return Object.keys(equipo).some(key => {
                    return equipo[key] && equipo[key].toString().toLowerCase().includes(filtro);
                });
            })
        }
        if (inicio > 0) {
            filtrados = filtrados.slice(inicio);
        }
        if (limite !== undefined) {
            filtrados = filtrados.slice(0, limite);
        }
        return filtrados;
    }

    async function obtenerEquipo(equipoId) {
        let index = equipos.findIndex(p => p.id == equipoId);
        if (index !== -1) {
            return equipos[index];
        }
        return null;
    }

    async function crearEquipo(objEquipo) {
        objEquipo.id = siguienteEquipoId();

        equipos.push(objEquipo);
        localStorage.setItem('equipos', JSON.stringify(equipos));
    }

    async function actualizarEquipo(objEquipo) {
        let index = equipos.findIndex(p => p.id == objEquipo.id);
        if (index !== -1) {
            equipos[index] = objEquipo;
            localStorage.setItem('equipos', JSON.stringify(equipos));
            return true;
        }
        return false;
    }

    function limpiarLocalStorage() {
        localStorage.removeItem('equipos');
    }

    async function eliminarEquipo(equipoId) {
        let indexEquipo = equipos.findIndex(e => e.equipoId == equipoId);

        if (indexEquipo === -1) {
            return false;
        }

        equipos.splice(indexEquipo, 1);
        localStorage.setItem('equipos', JSON.stringify(equipos));

        return true;
    }

    return {
        obtenerEquipos,
        obtenerEquipo,
        crearEquipo,
        actualizarEquipo,
        eliminarEquipo,

        limpiarLocalStorage,
    };
})();

window.$negocio = $negocio;
export default $negocio;