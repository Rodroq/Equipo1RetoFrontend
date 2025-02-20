import { Carousel, Image } from "react-bootstrap";

/**
 * 
 * @param {Array} imagenes //Imagenes que se muestran en el carrusel
 * @param {Number} tiempo //Tiempo que tarda el carrusel en cambiar de imagen 
 * @returns 
 */
function Carrusel({ imagenes, tiempo = 3000, alto = '30em', ancho = '100%' }) {
    // Estilo que se le aplica a las imagenes
    const imgStyle = {
        width: ancho,
        height: alto,
        objectFit: 'cover'
    };

    return (
        <div className="rounded overflow-hidden shadow-sm">
            <Carousel>
                {imagenes.map((imagen, index) => {
                    if (imagen[0]) {
                        return (
                            <Carousel.Item key={index} interval={tiempo}>
                                <img className="w-100" src={imagen[0]} style={imgStyle} />
                                <Carousel.Caption>
                                    <h1>{imagen[1]}</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    }
                })}
            </Carousel>
        </div>
    );
}

export default Carrusel;