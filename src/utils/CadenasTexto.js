/**
 * Capitaliza la primera letra de una cadena.
 *
 * @param {string} cadena - La cadena a capitalizar.
 * @returns {string} La cadena con la primera letra en mayúscula y el resto en minúscula.
 */
export const capitalizarPrimeraLetra = (cadena) => {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
};