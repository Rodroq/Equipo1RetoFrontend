import { Button, Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from '../../assets/logo_sede_torrelavega.png';
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppProvider";

/**
 * Devuelve el componente Header
 * 
 * @returns {JSX.Element}
 */
function Header() {
  // Estado para manejar la visibilidad del dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleModal, rol, logOut } = useContext(AppContext);

  return (
    <header className="sticky-top border-bottom border-primary border-2">
      <Navbar expand="lg" bg="light" shadow="sm" className="border-bottom">
        <Container>
          {/* LOGO DEL HEADER */}
          <Navbar.Brand href="/" className="fw-bold link-hover m-0" title="Ir a Inicio.">
            <img src={logo} alt="Logo" style={{ height: '130px' }} className="logo" />
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

                  <Dropdown.Menu className="border-primary border-1">
                    <Dropdown.Item href="reglamento" title="Ir a Reglamento.">Reglamento</Dropdown.Item>
                    <Dropdown.Item href="partidos" title="Ir a Partidos.">Partidos</Dropdown.Item>
                    <Dropdown.Item href="clasificacion" title="Ir a Clasificación.">Clasificación</Dropdown.Item>
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

              {rol == 'administrador' ? (<Nav.Link href="/gestion" title="Ir a Gestion." className="fw-semibold text-dark link-hover">
                Gestión
              </Nav.Link>) : (<></>)}
            </Nav>

            {/* BOTÓN LOGIN */}
            {!rol ?
              (<Button onClick={toggleModal} className="btn-lg">
                Iniciar sesión
              </Button>) : (<Button onClick={logOut} className="btn-lg">
                Cerrar sesión
              </Button>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
