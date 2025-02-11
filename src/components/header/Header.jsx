import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom">
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand fw-bold" href="#">
          Torneo
        </a>

        {/* BOTÓN MENU RESPONSIVO */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVEGACIÓN */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark link-hover" href="#">
                Torneo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark link-hover" href="#">
                Equipos
              </a>
            </li>
          </ul>

          {/* BOTÓN LOGIN */}
          <div className="d-flex">
            <button type="button" className="btn btn-outline-primary">
              Login
            </button>
          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Header;
