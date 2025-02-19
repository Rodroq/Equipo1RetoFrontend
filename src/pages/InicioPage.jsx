import { Button, Card, Image, Container, Row, Col } from "react-bootstrap";
import Carrusel from "../components/Carrusel";

function InicioPage() {
    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    return (
        <>
            <section className="bg-primary text-white text-center p-5" style={{ backgroundImage: 'url(https://placehold.co/1920x500)', backgroundSize: 'cover' }}>
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <h1>¡Torneo solidario 2025!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem error excepturi, nam, vel quisquam labore tenetur necessitatibus nulla culpa quia dolor magnam odit suscipit, quam voluptate reiciendis minima! Sunt..</p>
                            <Button variant="primary">Ver</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="my-5">
                <Row>
                    <Col md={8} lg={9} className="mb-4">
                        <Card className="border-primary bg-light h-100 mb-4 shadow">
                            <Card.Body>
                                <Card.Title>Sobre el torneo</Card.Title>
                                <Card.Text>Bienvenidos al torneo solidario 2025, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi suscipit totam ea, voluptatibus labore doloribus blanditiis aut voluptatem accusamus, a saepe obcaecati quam. Deserunt quasi itaque distinctio hic consequuntur quas..</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={3} className="mb-4">
                        <Card className="border-primary bg-light h-100 mb-4 shadow">
                            <Card.Body>
                                <Card.Title className="text-primary">Fechas</Card.Title>
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
                        <Card className="text-center border-primary bg-light h-100 mb-4 shadow">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>Total recaudado</Card.Title>
                                <Card.Text>1234 Kg de productos de primera necesidad</Card.Text>
                                <Card.Text>1234 €</Card.Text>
                                <Card.Text>Cruz Roja destinará Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nulla natus labore ab, dolor repellat voluptatibus reprehenderit nisi, necessitatibus id aspernatur distinctio, molestiae quisquam obcaecati temporibus provident! Odio, mollitia!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center border-primary bg-light h-100 mb-4 shadow">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>¿Quieres donar?</Card.Title>
                                <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perspiciatis amet deserunt iste ducimus dolore, sapiente laboriosam quibusdam, quaerat aperiam hic eos enim recusandae optio harum eaque cumque officiis! Sit?</Card.Text>
                                <Button variant="primary" title="Ver." className="mx-auto">Ver</Button>
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