import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h2 className="logo">COLPLAG ¡manejo integrar de plagas!</h2>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Quiénes Somos</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/contact">Contáctenos</Link>
            </li>
          </ul>
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;