import { Button } from "react-bootstrap";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" bg="white" shadow="sm" className="border-bottom">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#" className="fw-bold">
          Torneo
        </Navbar.Brand>

        {/* BOTÓN MENU RESPONSIVO */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* NAVEGACIÓN */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="#" className="fw-semibold text-dark link-hover">
                Torneo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-semibold text-dark link-hover">
                Equipos
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* BOTÓN LOGIN */}
          <Button variant="outline-primary">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
