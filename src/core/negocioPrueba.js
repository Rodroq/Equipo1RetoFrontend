import vmEquipos from '../data/VMEquipos.js';
import vmRetos from '../data/VMRetos.js';

const $negocio = (function () {
    if (!localStorage.getItem('equipos')) {
        localStorage.setItem('equipos', JSON.stringify(vmEquipos.equipos));
    }
    if (!localStorage.getItem('retos')) {
        localStorage.setItem('retos', JSON.stringify(vmRetos.retos));
    }
    let equipos = JSON.parse(localStorage.getItem('equipos'));
    let retos = JSON.parse(localStorage.getItem('retos'));

    function siguienteEquipoId() {
        let maxId = Math.max(...equipos.map(p => p.id), 0);
        return maxId + 1;
    }

    function siguienteRetoId() {
        let maxId = Math.max(...retos.map(p => p.id), 0);
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

    async function obtenerRetos(filtro = '', inicio = 0, limite) {
        let filtrados = [...retos];
        if (filtro != '') {
            filtro.toLowerCase();
            filtrados = filtrados.filter(reto => {
                return Object.keys(reto).some(key => {
                    return reto[key] && reto[key].toString().toLowerCase().includes(filtro);
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

    async function obtenerReto(retoId) {
        let index = retos.findIndex(p => p.id == retoId);
        if (index !== -1) {
            return retos[index];
        }
        return null;
    }

    async function crearEquipo(objEquipo) {
        objEquipo.id = siguienteEquipoId();

        equipos.push(objEquipo);
        localStorage.setItem('equipos', JSON.stringify(equipos));
    }

    async function crearReto(objReto) {
        objReto.id = siguienteRetoId();

        retos.push(objReto);
        localStorage.setItem('retos', JSON.stringify(retos));
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

    async function actualizarReto(objReto) {
        let index = retos.findIndex(p => p.id == objReto.id);
        if (index !== -1) {
            retos[index] = objReto;
            localStorage.setItem('retos', JSON.stringify(retos));
            return true;
        }
        return false;
    }

    function limpiarLocalStorage() {
        localStorage.removeItem('equipos');
        localStorage.removeItem('retos');
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

    async function eliminarReto(retoId) {
        let indexReto = retos.findIndex(e => e.retoId == retoId);

        if (indexReto === -1) {
            return false;
        }

        retos.splice(indexReto, 1);
        localStorage.setItem('retos', JSON.stringify(retos));

        return true;
    }

    return {
        obtenerEquipos,
        obtenerEquipo,
        crearEquipo,
        actualizarEquipo,
        eliminarEquipo,

        obtenerRetos,
        obtenerReto,
        crearReto,
        actualizarReto,
        eliminarReto,

        limpiarLocalStorage,
    };
})();

window.$negocio = $negocio;
export default $negocio;