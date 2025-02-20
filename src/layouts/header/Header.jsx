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
    <header className="sticky-top border-bottom border-primary border-2">
      <Navbar expand="lg" bg="light" shadow="sm" className="border-bottom">
        <Container>
          {/* LOGO */}
          <Navbar.Brand href="/" className="fw-bold link-hover m-0" title="Ir a Inicio.">
            <img src={logo} alt="Logo" style={{ height: '110px' }} className="logo" />
            <i className="bi bi-0-square"></i>
          </Navbar.Brand>

          {/* BOTÓN MENU RESPONSIVO */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* NAVEGACIÓN */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>
                <Nav.Link href="/torneo" title="Ir a Torneo." className="fw-semibold text-dark link-hover">
                  Torneo
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/equipos" title="Ir a Equipos." className="fw-semibold text-dark link-hover">
                  Equipos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/retos" title="Ir a Retos." className="fw-semibold text-dark link-hover">
                  Retos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/publicaciones" title="Ir a Publicaciones." className="fw-semibold text-dark link-hover">
                  Publicaciones
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/inscripcion" title="Ir a Inscripción." className="fw-semibold text-dark link-hover">
                  Inscripción
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {/* BOTÓN LOGIN */}
            <Button onClick={() => { navegar('/login') }} variant="outline-primary">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
