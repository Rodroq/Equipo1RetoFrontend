import { Button, Card, Image, Container, Row, Col, Badge } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import logo_ies_besaya from '../assets/logo_ies_besaya.png';
import logo_ies_miguelherrero from '../assets/logo_ies_miguelherrero.png';
import logo_ies_zapaton from '../assets/logo_ies_zapaton.jpg';
import logo_liga_solidaria_fp_cantabria from '../assets/logo_liga_solidaria_fp_cantabria.png';
import logo_RFCF from '../assets/logo_RFCF.png';
import imgReto1 from '../assets/retos/reto1.jpg';
import imgReto2 from '../assets/retos/reto2.jpg';
import imgReto3 from '../assets/retos/reto3.jpg';
import imgPublicacion1 from '../assets/publicaciones/publicacion1.jpg';
import imgPublicacion2 from '../assets/publicaciones/publicacion2.jpg';
import imgPublicacion3 from '../assets/publicaciones/publicacion3.jpg';
import patrocinadoresData from "../data/Patrocinadores";

function InicioPage() {
    // Estados
    const [donaciones, setDonaciones] = useState({ kilos: 0, importe: 0});

    // Navegación
    const navegar = useNavigate();

    //Contexto
    const { negocio } = useContext(AppContext);

    const imagenesRetos = [
        [{imgReto1}, "Texto1"],
        [{imgReto2}, "Texto2"],
        [{imgReto3}, 'Texto3']
    ];

    const imagenesPublicaciones = [
        [{imgPublicacion1}, "Texto1"],
        [{imgPublicacion2}, "Texto2"],
        [{imgPublicacion3}, 'Texto3']
    ];


    // Efecto al montar el componente
    useEffect(() => {
        async function fetchDonaciones() {
            try {
                const donacionesResponse = await negocio.getDatos('donaciones');

                if (!donacionesResponse) {
                    console.error('No se han obtenido donaciones.');
                    return;
                }

                setDonaciones(donacionesResponse.donaciones[0]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchDonaciones();
    }, [negocio]);

    // Renderizado
    return (
        <>
            <section className="text-white text-center p-5 portada fondo-portada">
                <div className="contenedor-titulo-portada aparecerArriba">
                    <h1 className="fw-bold titulo-portada">Liga solidaria FP</h1>
                    <a href="https://www2.cruzroja.es/" title="Ir a Cruz Roja." className="aumentar-escala">
                        <img src="/cruz-roja.png" alt="" width={150} className="bordes-redondeados" />
                    </a>
                    <Button variant="warning" onClick={() => navegar('/inscripcion')} title="Ir a Inscripción." className="pulso">¡Participa!</Button>
                </div>
            </section>

            <Container className="my-5">
                <Row>
                    <Col md={8} lg={9} className="mb-4">
                        <Card className="border-primary bg-light h-100 mb-4 shadow border-2 aumentar-escala aparecerIzquierda">
                            <Card.Header>
                                <Card.Title>
                                    <i className="bi bi-info-circle m-2" style={{ fontSize: '24px'}}></i>
                                    Sobre la liga
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">
                                    El proyecto ‘Liga Solidaria de FP Cantabria’ es una actividad multidisciplinar que gira en torno a un torneo de fútbol sala, que sirve como contexto para que los alumnos de FP tengan una experiencia profesionalizante y solidaria.
                                    El dinero y los productos de primera necesidad donados serán destinados por <img src="/cruz-roja.webp" alt="" width={20} /> <span className="text-danger fw-bold">Cruz Roja</span> a las familias en situación de vulnerabilidad del entorno.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} className="mb-4">
                        <Card className="bg-primary h-100 mb-4 shadow text-white aumentar-escala aparecerDerecha">
                            <Card.Header>
                                <Card.Title>
                                    <i className="bi bi-calendar-heart m-2" style={{ fontSize: '24px'}}></i>
                                    Fechas y ubicación
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">13 y 14 de marzo.</Card.Text>
                                <Card.Text className="lead">Pabellón la Habana Vieja de Torrelavega.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Retos de FP</h2>
                <Carrusel imagenes={imagenesRetos} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Donaciones</h2>
                <Row>
                    <Col>
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white aumentar-escala aparecerAbajo">
                            <Card.Header>
                                <i className="bi bi-piggy-bank" style={{ fontSize: '80px'}}></i>
                                <Card.Title className="fs-4">Total recaudado</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Row>
                                    <Col className="mb-3">
                                        <Card.Text>
                                            <Badge pill bg="warning text-dark fs-3"><i className="bi bi-box2-heart"></i> {donaciones?.kilos || 0} Kg</Badge>
                                        </Card.Text>
                                    </Col>
                                    <Col className="mb-3">
                                        <Card.Text>
                                            <Badge pill bg="warning text-dark fs-3"><i className="bi bi-bank"></i> {donaciones?.importe || 0} €</Badge>
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col>
                                        <Card.Text>
                                            <small>El dinero y los productos de primera necesidad donados serán destinados por <span className="bg-light border text-danger fw-bold rounded p-1"><img src="/cruz-roja.webp" alt="" width={16} /> Cruz Roja</span> a las familias en situación de vulnerabilidad del entorno.</small>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center bg-success h-100 mb-4 shadow text-white aumentar-escala aparecerAbajo">
                            <Card.Header>
                                <i className="bi bi-balloon-heart" style={{ fontSize: '80px'}}></i>
                                <Card.Title className="fs-4">¿Quieres donar?</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Text className="lead">Aporta tu granito de arena y contribuye a la iniciativa.</Card.Text>
                                <Card.Text className="lead"><em>Lo poco, es mucho para otros.</em></Card.Text>
                                <Button variant="warning" title="Ir a cercadeti.cruzroja.es." className="mx-auto pulso" href="https://cercadeti.cruzroja.es/ligasolidariadeformacionprofesional">¡Donar!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Publicaciones</h2>
                <Carrusel imagenes={imagenesPublicaciones} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Patrocinadores</h2>
                <Row className="text-center">
                    {patrocinadoresData.map((imagen, index) => (
                        <Col key={index}>
                            <Image 
                                src={imagen.img} 
                                // roundedCircle  
                                style={{ width: "200px", height: "80px"}} 
                                className="mb-3"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Colaboradores</h2>
                <Row className="text-center align-items-center">
                    <Col>
                        <a href="https://www.educantabria.es/web/ies-besaya" title="Ir a IES Besaya.">
                            <Image 
                                src={logo_ies_besaya} 
                                style={{ width: "150px", objectFit: "cover" }} 
                                className="mb-3 aumentar-escala-logos"
                            />
                        </a>
                        
                    </Col>
                    <Col>
                        <a href="https://www.ieszapaton.es/" title="Ir a IES Zapatón.">
                            <Image 
                                src={logo_ies_zapaton} 
                                style={{ width: "80px", objectFit: "cover" }} 
                                className="mb-3 aumentar-escala-logos"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.educantabria.es/web/ies-miguel-herrero-pereda" title="Ir a IES Miguel Herrero Pereda.">
                            <Image 
                                src={logo_ies_miguelherrero} 
                                style={{ width: "210px", objectFit: "cover" }} 
                                className="mb-3 aumentar-escala-logos"
                            />
                        </a>
                    </Col>
                    <Col>
                        <Image 
                            src={logo_liga_solidaria_fp_cantabria} 
                            style={{ width: "110px", objectFit: "cover" }} 
                            className="mb-3 aumentar-escala-logos"
                        />
                    </Col>
                    <Col>
                        <a href="https://www.rfcf.es/" title="Ir a RFCF.">
                            <Image 
                                src={logo_RFCF} 
                                style={{ width: "160px", objectFit: "cover" }} 
                                className="mb-3 aumentar-escala-logos"
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default InicioPage;