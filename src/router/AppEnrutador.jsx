import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import InicioPage from "../pages/InicioPage.jsx";
//import EquiposPage from "../pages/EquiposPage.jsx";
//import RetosPage from "../pages/RetosPage.jsx";
import PublicacionesPage from "../pages/PublicacionesPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import PrivacidadPage from "../pages/PrivacidadPage.jsx";
//import DetallesEquipoPage from "../pages/DetallesEquipoPage.jsx";
//import DetallesJugadorPage from "../pages/DetallesJugadorPage.jsx";
import DetallesPublicacionPage from "../pages/DetallesPublicacionPage.jsx";
import DetallesRetoPage from "../pages/DetallesRetoPage.jsx";
import InscripcionPage from "../pages/InscripcionPage.jsx";
import RutaPrivada from "../components/RutaPrivada.jsx";
import EditarPublicacionPage from "../pages/EditarPublicacionPage.jsx"
import EditarPublicacionesPage from "../pages/EditarPublicacionesPage.jsx";
import EditarImagenesPage from "../pages/EditarImagenesPage.jsx";
import EditarUsuariosPage from "../pages/EditarUsuariosPage.jsx";
import GestionPage from "../pages/GestionPage.jsx";
import ReglamentoPage from "../pages/ReglamentoPage.jsx";
import PartidosPage from "../pages/PartidosPage.jsx";
import ClasificacionPage from "../pages/ClasificacionPage.jsx";
import LoadingDisplay from "../components/LoadingDisplay.jsx";

const EquiposPage = lazy(() => import("../pages/EquiposPage.jsx"));
const DetallesEquipoPage = lazy(() => import("../pages/DetallesEquipoPage.jsx"));
const DetallesJugadorPage = lazy(() => import("../pages/DetallesJugadorPage.jsx"));
const RetosPage = lazy(() => import("../pages/RetosPage.jsx"));

/**
 * Devuelve el enrutador con todas las rutas del proyecto, tanto públicas como privadas
 * 
 * @returns {JSX.Element}
 */
function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Conjunto de rutas que usan el AppLayout */}
                <Route path="/" element={<AppLayout />}>
                    {/* Ruta de la página de inicio */}
                    <Route index element={<InicioPage />} />
                    {/* Rutas de torneo */}
                    <Route path="reglamento" element={<ReglamentoPage />} />
                    <Route path="partidos" element={<PartidosPage />} />
                    <Route path="clasificacion" element={<ClasificacionPage />} />

                    {/* Rutas de los equipos */}
                    <Route path="equipos" element={
                        <Suspense fallback={<LoadingDisplay />}>
                            <EquiposPage />
                        </Suspense>
                    } />
                    <Route path="equipos/:id" element={
                        <Suspense fallback={<LoadingDisplay />}>
                            <DetallesEquipoPage />
                        </Suspense>
                    } />

                    {/* Ruta de los jugadores */}
                    <Route path="equipos/:idEquipo/:idJugador" element={
                        <Suspense fallback={<LoadingDisplay />}>
                            <DetallesJugadorPage />
                        </Suspense>
                    } />

                    {/* Rutas de los retos */}
                    <Route path="retos" element={
                        <Suspense fallback={<LoadingDisplay />}>
                            <RetosPage />
                        </Suspense>
                    } />
                    <Route path="retos/:id" element={
                        <Suspense fallback={<LoadingDisplay />}>
                            <DetallesRetoPage />
                        </Suspense>
                    } />

                    {/* Rutas de las publicaciónes */}
                    <Route path="publicaciones" element={<PublicacionesPage />} />
                    <Route path="publicaciones/:id" element={<DetallesPublicacionPage />} />

                    {/* Ruta de inscripcion de equipo */}
                    <Route path="inscripcion" element={<InscripcionPage />} />

                    {/* Ruta del inicio de sesión */}
                    <Route path="login" element={<LoginPage />} />

                    {/* Ruta de políticas de privacidad */}
                    <Route path="privacidad" element={<PrivacidadPage />} />

                    {/* Ruta de la página de error */}
                    <Route path="*" element={<ErrorPage />} />

                    {/* Rutas privadas */}
                    {/* Rutas de publicaciones */}
                    <Route path="publicaciones/editar" element={
                        <RutaPrivada rolesPermitidos={['administrador']}><EditarPublicacionesPage /></RutaPrivada>
                    } />
                    <Route path="publicaciones/editar/:id" element={
                        <RutaPrivada rolesPermitidos={['administrador']}><EditarPublicacionPage /></RutaPrivada>
                    } />

                    {/* Rutas de gestión */}
                    <Route path="gestion" element={
                        <RutaPrivada rolesPermitidos={['administrador']}><GestionPage /></RutaPrivada>
                    } />
                    {/* Rutas de imagenes en gestión */}
                    <Route path="gestion/imagenes/" element={
                        <RutaPrivada rolesPermitidos={['administrador']}><EditarImagenesPage /></RutaPrivada>
                    } />
                    <Route path="gestion/imagenes/:id" element={
                        <RutaPrivada>{ }</RutaPrivada>
                    } />
                    {/* Rutas de usuarios en gestión */}
                    <Route path="gestion/usuarios" element={
                        <RutaPrivada rolesPermitidos={['administrador']}><EditarUsuariosPage /></RutaPrivada>
                    } />
                    <Route path="gestion/usuarios/:id" element={
                        <RutaPrivada rolesPermitidos={['administrador']}></RutaPrivada>
                    } />
                    {/* Rutas de actas en gestión */}
                    <Route path="gestion/actas" element={
                        <RutaPrivada rolesPermitidos={['administrador']}></RutaPrivada>
                    } />
                    <Route path="gestion/equipos" element={
                        <RutaPrivada rolesPermitidos={['administrador']}></RutaPrivada>
                    } />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;
