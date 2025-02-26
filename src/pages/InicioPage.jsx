import { Button, Card, Image } from "react-bootstrap";
import Carrusel from "../components/Carrusel";

function InicioPage() {
    const imagenes = [
        ["https://placehold.co/1920x500", "Texto1"],
        ["https://placehold.co/1820x400", "Texto2"],
        ["https://placehold.co/1720x300", 'Texto3']
    ];

    return (
        <>
            <section className="row bg-primary p-5 g-0 text-white">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h1>¡Torneo solidario 2025!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rem error excepturi, nam, vel quisquam labore tenetur necessitatibus nulla culpa quia dolor magnam odit suscipit, quam voluptate reiciendis minima! Sunt..</p>
                    <Button variant="dark">Ver</Button>
                </div>
            </section>

            <section className="row bg-white p-5 g-0">
                <div className="col-md-8 col-lg-9 p-1">
                    <h3>Sobre el torneo</h3>
                    <p>Bienvenidos al torneo solidario 2025, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi suscipit totam ea, voluptatibus labore doloribus blanditiis aut voluptatem accusamus, a saepe obcaecati quam. Deserunt quasi itaque distinctio hic consequuntur quas..</p>
                </div>
                <div className="col-md-4 col-lg-3 bg-light border border-primary rounded p-3">
                    <h4 className="text-primary">Fechas</h4>
                    <p>13 y 14 de marzo.</p>
                    <p>Pabellón la Habana Vieja de Torrelavega.</p>
                </div>
            </section>

            <section className="row g-0">
                <h3 className="text-center">Retos de FP</h3>
                <Carrusel imagenes={imagenes} />
            </section>

            <section className="row g-0 mt-4">
                <h3 className="text-center">Donaciones</h3>
                <div className="col p-4">
                    <Card className="text-center border-primary bg-light">
                        <Card.Body>
                            <Card.Title>Total recaudado</Card.Title>
                            <Card.Text>
                                1234 Kg de productos de primera necesidad
                            </Card.Text>
                            <Card.Text>
                                1234 €
                            </Card.Text>
                            <Card.Text>
                                Cruz Roja destinará Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum nulla natus labore ab, dolor repellat voluptatibus reprehenderit nisi, necessitatibus id aspernatur distinctio, molestiae quisquam obcaecati temporibus provident! Odio, mollitia!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col p-4">
                    <Card className="text-center border-primary bg-light">
                        <Card.Body>
                            <Card.Title>¿Quieres donar?</Card.Title>
                            <Card.Text>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint perspiciatis amet deserunt iste ducimus dolore, sapiente laboriosam quibusdam, quaerat aperiam hic eos enim recusandae optio harum eaque cumque officiis! Sit?
                            </Card.Text>
                            <Button variant="dark" title="Ver.">Ver</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>

            <section className="row g-0">
                <h3 className="text-center">Publicaciones</h3>
                <Carrusel imagenes={imagenes} />
            </section>

            <section className="row g-0 mt-4">
                <h3 className="text-center">Patrocinadores</h3>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
                <div className="col">
                    <Image 
                        src={"https://placehold.co/600x400/png"} 
                        roundedCircle  
                        style={{ width: "110px", height: "110px", objectFit: "cover" }} 
                    />
                </div>
            </section>
        </>
    );
}

export default InicioPage;