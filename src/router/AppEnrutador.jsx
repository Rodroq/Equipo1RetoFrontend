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
import EditarPublicaciones from "../pages/EditarPublicaciones.jsx";

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
                    <Route path="editar/publicaciones" element={
                        <RutaPrivada rolesPermitidos={['admin']}><EditarPublicaciones /></RutaPrivada>
                    } />
                    <Route path="editar/publicaciones/:id" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    <Route path="editar/imagenes" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    <Route path="editar/imagenes/:id" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    <Route path="editar/usuarios" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    <Route path="editar/usuarios/:id" element={
                        <RutaPrivada rolesPermitidos={['admin']}><DetallesUsuarioPage /></RutaPrivada>
                    } />
                    <Route path="gestion/actas" element={
                        <RutaPrivada rolesPermitidos={['admin']}><DetallesUsuarioPage /></RutaPrivada>
                    } />
                    <Route path="gestion/equipos" element={
                        <RutaPrivada rolesPermitidos={['admin']}><DetallesUsuarioPage /></RutaPrivada>
                    } />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;
