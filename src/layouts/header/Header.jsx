import { Button } from "react-bootstrap";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo_sede_torrelavega.png'; // Importa la imagen del logo

function Header() {
  const navegar = useNavigate();

  return (
    <Navbar expand="lg" bg="white" shadow="sm" className="border-bottom">
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="/" className="fw-bold">
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          Liga Solidaria FP
        </Navbar.Brand>

        {/* BOTÓN MENU RESPONSIVO */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* NAVEGACIÓN */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="/torneo" className="fw-semibold text-dark link-hover">
                Torneo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/equipos" className="fw-semibold text-dark link-hover">
                Equipos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/retos" className="fw-semibold text-dark link-hover">
                Retos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/publicaciones" className="fw-semibold text-dark link-hover">
                Publicaciones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/inscripcion" className="fw-semibold text-dark link-hover">
                Inscripcion
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* BOTÓN LOGIN */}
          <Button onClick={() => { navegar('/login') }} variant="outline-primary">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
