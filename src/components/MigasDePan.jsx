import { useEffect, useId, useState } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { capitalizarPrimeraLetra } from "../utils/CadenasTexto";

/**
 * Componente migas de pan.
 * @returns {JSX.Element} El componente migas de pan.
 */
function MigasDePan() {
    // ID de componente
    const idComponente = useId();

    // Estados
    const [partesURL, setPartesURL] = useState([]);
    const location = useLocation();

    // Efecto al cambiar el 'location'
    useEffect(() => {
        const url = location.pathname;
        setPartesURL(url.split('/').filter(parte => parte));
    }, [location]);

    // Si partesURL está vacío no se renderiza nada
    if (partesURL.length === 0) {
        return null;
    }

    // Variable para almacenar el pathURL acumulado para cada elemento
    let pathAcumulado = "";

    // Renderizado
    return (
        <Container className="mt-4">
            <Breadcrumb className="bg-light p-3 border border-primary rounded shadow-sm">
                <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                {partesURL.map((parteUrl, index) => {
                    pathAcumulado += `/${parteUrl}`;

                    return (
                        <Breadcrumb.Item
                            key={`${idComponente}-${index}`}
                            href={pathAcumulado}
                            active={index === partesURL.length - 1}
                            className={index === partesURL.length - 1 ? "text-secondary fw-bold" : "text-primary"}
                        >
                            {capitalizarPrimeraLetra(parteUrl)}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </Container>
    );
}

export default MigasDePan;