const $negocio = (function () {
    // URL base de la API
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    // Variable para almacenar el token de autenticación
    let authToken = null;

    // Función para actualizar el token almacenado
    function setAuthToken(nuevoToken) {
        authToken = nuevoToken;
    }

    // Función para obtener la URL base de la API
    function getApiUrl() {
        return apiUrl;
    }

    // Función para manejar respuestas y errores de las peticiones
    async function handleRespuesta(respuesta) {
        if (!respuesta.ok) {
            const errorDatos = await respuesta.json();
            throw new Error(errorDatos.detail || 'Error en la petición');
        }

        return await respuesta.json();
    }

    // Función para peticiones GET
    async function getDatos(endpoint) {
        try {
            const respuesta = await fetch(`${apiUrl}/${endpoint}`, {
                method: 'GET',
                headers: {
                    ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
                    'Content-Type': 'application/json'
                }
            });

            return await handleRespuesta(respuesta);
        } catch (error) {
            console.error('Error en petición GET:', error);
            throw error;
        }
    }

    // Función para peticiones POST
    async function postDatos(endpoint, datos) {
        try {
            const respuesta = await fetch(`${apiUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            return await handleRespuesta(respuesta);
        } catch (error) {
            console.error('Error en petición POST:', error);
            throw error;
        }
    }

    // Función para peticiones PUT
    async function putDatos(endpoint, datos) {
        try {
            const respuesta = await fetch(`${apiUrl}/${endpoint}`, {
                method: 'PUT',
                headers: {
                    ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            return await handleRespuesta(respuesta);
        } catch (error) {
            console.error('Error en petición PUT:', error);
            throw error;
        }
    }

    // Función para peticiones DELETE
    async function deleteDatos(endpoint) {
        try {
            const respuesta = await fetch(`${apiUrl}/${endpoint}`, {
                method: 'DELETE',
                headers: {
                    ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
                    'Content-Type': 'application/json'
                }
            });

            return await handleRespuesta(respuesta);
        } catch (error) {
            console.error('Error en DELETE:', error);
            throw error;
        }
    }

    // Métodos y propiedades públicas
    return {
        setAuthToken,
        getApiUrl,
        getDatos,
        postDatos,
        putDatos,
        deleteDatos
    };
})();

export default $negocio;