import Carrusel from "../components/Carrusel";

function InicioPage() {
    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    return (
        <>
            <h1>Inicio</h1>
            <Carrusel imagenes={imagenes} />
        </>
    );
}

export default InicioPage;