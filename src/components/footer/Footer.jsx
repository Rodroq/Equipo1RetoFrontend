function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">&copy; IES Miguel Herrero, 2025</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
              Twitch
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
