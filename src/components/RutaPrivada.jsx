import { Navigate } from 'react-router-dom';

/**
 * Componente que valida si el usuario tiene el rol necesario para acceder a una página
 * @param {ReactNode} children //Contenido del componente
 * @param {Array} rolesPermitidos //Lista de roles permitidos en la ruta
 * @returns {ReactNode}
 */
function RutaPrivada({ children, rolesPermitidos }) {
    // Rol del usuario
    const rolUsuario = 'admin';

    // Si el usuario no tiene rol, le mandamos a la página de login
    if (!rolUsuario || rolUsuario == '') {
        return <Navigate to="/login" replace />;
    }

    // Si el usuario no tiene los permisos necesarios para entrar, le mandamos a HomePage
    if (!rolesPermitidos.includes(rolUsuario)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RutaPrivada;