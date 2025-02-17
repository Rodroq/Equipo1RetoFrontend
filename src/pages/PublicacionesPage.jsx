import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import { Card, Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";
import Tarjeta from "../components/Tarjeta";

function PublicacionesPage() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

  const { negocio } = useContext(AppContext);

  useEffect(() => {
    async function fetchRetos() {
      const publicacionesData = await negocio.obtenerPublicaciones();
      setPublicaciones(publicacionesData);
    }
    fetchRetos();
  }, [negocio]);

  function cargarImagenesCarrusel() {
    const imagenes = publicaciones.map(publicacion => [publicacion.imagen, publicacion.nombre]);
    setImagenesCarrusel(imagenes);
  }

  return (
    <>
      <h1>PublicacionesPage</h1>
      <Carrusel imagenes={imagenesCarrusel} />
      <Container className="mt-5">
        <Card className="shadow-lg p-4 border-0 rounded-4 bg-light">
          <Card.Body>
            <h1>Publicaciones</h1>
            <p>En esta página encontrarás un resumen de las publicaciones más recientes e interesantes. Cada publicación informa de las últimas novedades del torneo solidario. ¡Explora las publicaciones y acepta el desafío!</p>
            <br />
            <br />
            <div className="row justify-content-center">
              {publicaciones.map((publicacion) => (
                <div className="col-lg-3 col-md-4 mb-4" key={publicacion.id}>
                  <Tarjeta
                    tituloTarjeta={publicacion.nombre}
                    textoTarjeta={publicacion.descripcion}
                    imagenTarjeta={publicacion.imagen}
                    textoBoton={'Ver publicación'}
                    nombreEntidad={'publicaciones'}
                    datosObjeto={publicacion}
                  />
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default PublicacionesPage;