import { Button, Card, Image, Container, Row, Col } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import { useNavigate } from "react-router-dom";

function InicioPage() {
    // Navegación
    const navegar = useNavigate();

    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    // Renderizado
    return (
        <>
            <section className="bg-primary text-white text-center p-5" style={{ backgroundImage: 'url(https://placehold.co/1920x500)', backgroundSize: 'cover' }}>
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <h1>¡Torneo solidario 2025!</h1>
                            <p>Breve descripción</p>
                            <Button variant="primary" onClick={() => navegar('/inscripcion')} title="Ir a Inscripción.">¡Participa!</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="my-5">
                <Row>
                    <Col md={8} lg={9} className="mb-4">
                        <Card className="border-primary bg-light h-100 mb-4 shadow border-2">
                            <Card.Body>
                                <Card.Title>Sobre el torneo</Card.Title>
                                <Card.Text>Bienvenidos al torneo solidario 2025, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi suscipit totam ea, voluptatibus labore doloribus blanditiis aut voluptatem accusamus, a saepe obcaecati quam. Deserunt quasi itaque distinctio hic consequuntur quas..</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} className="mb-4">
                        <Card className="bg-primary h-100 mb-4 shadow text-white border-dark border-2">
                            <Card.Body>
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar-event m-2" viewBox="0 0 16 16">
                                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                    </svg>
                                    Fechas
                                </Card.Title>
                                <Card.Text>13 y 14 de marzo.</Card.Text>
                                <Card.Text>Pabellón la Habana Vieja de Torrelavega.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Retos de FP</h2>
                <Carrusel imagenes={imagenes} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Donaciones</h2>
                <Row>
                    <Col>
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-piggy-bank" viewBox="0 0 16 16">
                                        <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.138-1.496A6.6 6.6 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.6 7.6 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962"/>
                                        <path fillRule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595M2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.6 6.6 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.65 4.65 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393m12.621-.857a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199"/>
                                    </svg>
                                </Card.Title>
                                <Card.Title>Total recaudado</Card.Title>
                                <Card.Text><span className="">1234 Kg</span> de productos de primera necesidad.</Card.Text>
                                <Card.Text className="">1234 €</Card.Text>
                                <Card.Text className="">Cruz Roja destinará texto texto texto ...</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center bg-primary h-100 mb-4 shadow text-white border-dark border-2">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                                    </svg>
                                </Card.Title>
                                <Card.Title>¿Quieres donar?</Card.Title>
                                <Card.Text>Breve descripción</Card.Text>
                                <Button variant="dark" title="Ir a Donar." className="mx-auto" href="https://cercadeti.cruzroja.es/ligasolidariadeformacionprofesional">¡Donar!</Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Publicaciones</h2>
                <Carrusel imagenes={imagenes} />
            </Container>

            <Container className="my-5">
                <h2 className="text-center mb-4 section-titulo">Patrocinadores</h2>
                <Row className="text-center">
                    {[...Array(7)].map((_, index) => (
                        <Col key={index}>
                            <Image 
                                src={"https://placehold.co/600x400/png"} 
                                roundedCircle  
                                style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                                className="mb-3"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default InicioPage;