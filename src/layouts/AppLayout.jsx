import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MigasDePan from "../components/MigasDePan";
import ModalLogin from "../components/ModalLogin";

function AppLayout() {
    return (
        <>
            <Header />
            <MigasDePan />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ModalLogin />
        </>
    );
}

export default AppLayout;