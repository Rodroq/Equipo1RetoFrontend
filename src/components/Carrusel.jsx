import { Carousel, Image } from "react-bootstrap";

function Carrusel({tiempo = 3000, alto = '30em', ancho = '100%'}) {
    const imgStyle = {
        width: ancho,
        height: alto
    };

    return (
        <Carousel>
            <Carousel.Item interval={tiempo}>
                <img className="w-100" src="https://placehold.co/1920x500/png" style={imgStyle} />
            </Carousel.Item>
            <Carousel.Item interval={tiempo}>
                <img className="w-100" src="https://placehold.co/1920x500/png" style={imgStyle} />
            </Carousel.Item>
            <Carousel.Item interval={tiempo}>
                <img className="w-100" src="https://placehold.co/1920x500/png" style={imgStyle} />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;