import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout.jsx";
import InicioPage from "../pages/InicioPage.jsx";
import EquiposPage from "../pages/EquiposPage.jsx";
import TorneoPage from "../pages/TorneoPage.jsx";
import RetosPage from "../pages/RetosPage.jsx";
import PublicacionesPage from "../pages/PublicacionesPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />} />
                    <Route path="torneo" element={<TorneoPage />} />
                    <Route path="equipos" element={<EquiposPage />} />
                    <Route path="retos" element={<RetosPage />} />
                    <Route path="publicaciones" element={<PublicacionesPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;
