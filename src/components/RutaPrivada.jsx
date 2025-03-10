import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppProvider';

/**
 * Componente que valida si el usuario tiene el rol necesario para acceder a una página
 * @param {ReactNode} children //Contenido del componente
 * @param {Array} rolesPermitidos //Lista de roles permitidos en la ruta
 * @returns {ReactNode}
 */
function RutaPrivada({ children, rolesPermitidos }) {
    // Rol del usuario
    const {rol} = useContext(AppContext);
    
    // Si el usuario no tiene los permisos necesarios para entrar, le mandamos a HomePage
    if (!rolesPermitidos.includes(rol)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RutaPrivada;