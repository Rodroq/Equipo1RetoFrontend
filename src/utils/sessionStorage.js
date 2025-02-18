/**
 * Almacena datos en el Session Storage del navegador.
 * @param {string} clave - La clave bajo la cual se almacenarán los datos.
 * @param {Object} datos - Los datos a almacenar.
 */
export function almacenarDatosEnSessionStorage(clave, datos) {
    sessionStorage.setItem(clave, JSON.stringify(datos));
}

/**
 * Obtiene datos del Session Storage del navegador.
 * @param {string} clave - La clave bajo la cual se almacenan los datos.
 * @returns {Object|null} Los datos obtenidos del Session Storage o null si no existen.
 */
export function obtenerDatosDeSessionStorage(clave) {
    const datos = sessionStorage.getItem(clave);
    return datos ? JSON.parse(datos) : null;
}

/**
 * Eliminar datos de Session Storage del navegador.
 * @param {Object} clave - La clave bajo la cual se eliminarán los datos.
 */
export function eliminarDatosDeSessionStorage(clave) {
    sessionStorage.removeItem(clave);
}