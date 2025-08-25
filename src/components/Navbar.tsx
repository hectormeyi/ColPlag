import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">COLPLAG        ¡manejo integrar de plagas!</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Quiénes Somos</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contáctenos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
