import { Container, Row, Col, Nav } from 'react-bootstrap';

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

          {/* Columna para enlaces... */}
          <Col className="d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary fw-bold">
              {/* <i className="bi bi-c-circle me-1"></i> */}
              <a href="/privacidad">Política de privacidad</a>
            </span>
          </Col>

          {/* Columna con los enlaces de redes sociales */}
          <Col className="d-flex justify-content-end">
            <Nav className="list-unstyled d-flex">
              <Nav.Item>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/" title='Ir a Instagram.' target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  <i className="bi bi-instagram link-hover" style={{ fontSize: '24px'}}></i>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;