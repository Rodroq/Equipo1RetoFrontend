import { Navigate } from 'react-router-dom';

function RutaPrivada({ children, rolesPermitidos }) {
    const rolUsuario = 'admin';

    if (!rolUsuario || rolUsuario == '') {
        return <Navigate to="/login" replace />;
    }

    if (!rolesPermitidos.includes(rolUsuario)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RutaPrivada;