import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import InicioPage from "../pages/InicioPage.jsx";
import EquiposPage from "../pages/EquiposPage.jsx";
import TorneoPage from "../pages/TorneoPage.jsx";
import RetosPage from "../pages/RetosPage.jsx";
import PublicacionesPage from "../pages/PublicacionesPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import DetallesEquipoPage from "../pages/DetallesEquipoPage.jsx";
import DetallesJugadorPage from "../pages/DetallesJugadorPage.jsx";
import DetallesPublicacionPage from "../pages/DetallesPublicacionPage.jsx";
import DetallesRetoPage from "../pages/DetallesRetoPage.jsx";
import DetallesUsuarioPage from "../pages/DetallesUsuarioPage.jsx";
import InscripcionPage from "../pages/InscripcionPage.jsx";
import RutaPrivada from "../components/RutaPrivada.jsx";
import EditarPublicacionPage from "../pages/EditarPublicacionPage.jsx"
import EditarPublicacionesPage from "../pages/EditarPublicacionesPage.jsx";
import EditarImagenesPage from "../pages/EditarImagenesPage.jsx";
import EditarUsuariosPage from "../pages/EditarUsuariosPage.jsx";
import GestionPage from "../pages/GestionPage.jsx";

function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />} />
                    <Route path="torneo" element={<TorneoPage />} />
                    <Route path="equipos" element={<EquiposPage />} />
                    <Route path="equipos/:id" element={<DetallesEquipoPage />} />
                    <Route path="retos" element={<RetosPage />} />
                    <Route path="retos/:id" element={<DetallesRetoPage />} />
                    <Route path="publicaciones" element={<PublicacionesPage />} />
                    <Route path="publicaciones/:id" element={<DetallesPublicacionPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="jugadores/:id" element={<DetallesJugadorPage />} />
                    <Route path="inscripcion" element={<InscripcionPage />} />
                    <Route path="*" element={<ErrorPage />} />

                    {/* Rutas privadas */}
                    <Route path="publicaciones/editar" element={
                        <RutaPrivada rolesPermitidos={['admin']}><EditarPublicacionesPage /></RutaPrivada>
                    } />
                    <Route path="publicaciones/editar/:id" element={
                        <RutaPrivada rolesPermitidos={['admin']}><EditarPublicacionPage /></RutaPrivada>
                    } />
                    <Route path="gestion" element={
                        <RutaPrivada rolesPermitidos={['admin']}><GestionPage /></RutaPrivada>
                    } />
                    <Route path="gestion/imagenes/" element={
                        <RutaPrivada rolesPermitidos={['admin']}><EditarImagenesPage /></RutaPrivada>
                    } />
                    <Route path="gestion/imagenes/:id" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    <Route path="gestion/usuarios" element={
                        <RutaPrivada rolesPermitidos={['admin']}><EditarUsuariosPage /></RutaPrivada>
                    } />
                    <Route path="gestion/usuarios/:id" element={
                        <RutaPrivada rolesPermitidos={['admin']}></RutaPrivada>
                    } />
                    <Route path="gestion/actas" element={
                        <RutaPrivada rolesPermitidos={['admin']}></RutaPrivada>
                    } />
                    <Route path="gestion/equipos" element={
                        <RutaPrivada rolesPermitidos={['admin']}></RutaPrivada>
                    } />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;
