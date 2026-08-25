import { Link } from "react-router-dom";


function Navbar({ menuAbierto, onToggleMenu }) {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand">
        thiago<span className="dot">.dev</span>
      </Link>

      <nav className={`nav__links ${menuAbierto ? "nav__links--open" : ""}`}>
        <Link to="/#about" onClick={onToggleMenu}>Sobre mi </Link>
        <Link to="/#projects" onClick={onToggleMenu}>Proyectos</Link>
        <Link to="/#skills" onClick={onToggleMenu}>Habilidades</Link>
        <Link to="/#contact" onClick={onToggleMenu}>Contacto</Link>
      </nav>

      <button className="nav__toggle" onClick={onToggleMenu} aria-label="Abrir menú">
        ☰
      </button>
    </header>
  );
}

export default Navbar;
