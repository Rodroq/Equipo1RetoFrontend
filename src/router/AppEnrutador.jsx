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
                    <Route path="usuarios/:id" element={<DetallesUsuarioPage />} />
                    <Route path="jugadores/:id" element={<DetallesJugadorPage />} />
                    <Route path="inscripcion" element={<InscripcionPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;
