import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <Row className="w-100">
          {/* Columna con el texto copyright */}
          <Col md={4} className="d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; IES Miguel Herrero, 2025</span>
          </Col>

          {/* Columna con los enlaces de redes sociales */}
          <Col md={8} className="d-flex justify-content-end">
            <Nav className="list-unstyled d-flex">
              <Nav.Item>
                <Nav.Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  Twitter
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  Instagram
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  Twitch
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-body-secondary ms-3">
                  Youtube
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;
