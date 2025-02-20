import { Button, Dropdown } from "react-bootstrap";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo_sede_torrelavega.png';
import { useState } from "react";

/**
 * Devuelve el componente Header
 * 
 * @returns {JSX.Element}
 */
function Header() {
  // Estado para manejar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  // Definimos la variable que llama a useNavigate
  const navegar = useNavigate();

  return (
    <header className="sticky-top border-bottom border-primary border-2">
      <Navbar expand="lg" bg="light" shadow="sm" className="border-bottom">
        <Container>
          {/* LOGO DEL HEADER */}
          <Navbar.Brand href="/" className="fw-bold link-hover m-0" title="Ir a Inicio.">
            <img src={logo} alt="Logo" style={{ height: '110px' }} className="logo" />
            <i className="bi bi-0-square"></i>
          </Navbar.Brand>

          {/* BOTÓN MENU RESPONSIVO */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* NAVEGACIÓN */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              {/* ENLACES */}
              <Nav.Item>
                {/* MENU DROPDOWN QUE SE DESPLIEGA CON HOVER */}
                <Dropdown
                  className="hover-dropdown"
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Dropdown.Toggle
                    variant="link"
                    id="nav-dropdown"
                    className="fw-semibold text-dark link-hover nav-link p-2"
                  >
                    Torneo
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="reglamento">Reglamento</Dropdown.Item>
                    <Dropdown.Item href="partidos">Partidos</Dropdown.Item>
                    <Dropdown.Item href="clasificacion">Clasificación</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
