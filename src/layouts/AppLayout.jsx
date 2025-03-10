import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MigasDePan from "../components/MigasDePan";
import ModalLogin from "../components/ModalLogin";
import ToastGroup from "../components/ToastGroup";
import ImagenModal from "../components/ImagenModal";

function AppLayout() {
    return (
        <>
            <Header />
            <MigasDePan />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ImagenModal />
            <ModalLogin />
            <ToastGroup/>
        </>
    );
}

export default AppLayout;