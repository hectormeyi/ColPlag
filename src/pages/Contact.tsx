/* function Contact() {
  return (
    <div>
      <h1>Contáctenos</h1>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
 */

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Imagen representativa de fumigación */}
      <div className="contact-image">
        <img
          src="https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Operario fumigando"
        />
      </div>

      {/* Formulario */}
      <div className="contact-form">
        <h1>Contáctenos</h1>
        <form>
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" placeholder="Ingrese su nombre" required />

          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            placeholder="Escriba su mensaje aquí..."
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            className="facebook"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="instagram"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            className="tiktok"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
