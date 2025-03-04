import { Container, Row, Col, Nav } from 'react-bootstrap';
import logos_institucionales from '../../assets/logos_institucionales.png';

function Footer() {
  return (
    <footer className="border-top border-primary py-3 bg-light border-2">
      <Container>
        <Row className="w-100">
          {/* Columna con el texto copyright */}
          <Col className="d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary fw-bold">
              <i className="bi bi-c-circle me-1"></i>
              2025 IES Miguel Herrero Pereda
            </span>
          </Col>

          {/* Columna con los enlaces de redes sociales */}
          <Col className="d-flex justify-content-end">
            <Nav className="list-unstyled d-flex">
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/" title='Ir a Instagram.' target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  <i className="bi bi-instagram link-hover" style={{ fontSize: '24px'}}></i>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className="w-100 mt-3">
          {/* Columna con las imágenes de colaboradores */}
          <Col className="d-flex justify-content-center">
            <img src={logos_institucionales} alt="Logos Institucionales" className="w-75" />
          </Col>
        </Row>

        <Row className="w-100 mt-3">
          {/* Columna para el enlace de privacidad */}
          <Col className="d-flex justify-content-center">
            <span className="mb-3 mb-md-0 fw-bold">
              <a href="/privacidad" className='text-body-secondary link-hover' title='Ir a Política de privacidad.'><small>Política de privacidad</small></a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;