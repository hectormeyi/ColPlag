/* function Services() {
  return (
    <div>
      <h1>Servicios</h1>
      <ul>
        <li>Fumigacion recidencial</li>
        <li>Fumigacion establecimientos comerciales</li>
        <li>Vehiculos</li>
        <li>centros empresariales</li>
      </ul>
    </div>
  );
}

export default Services; */
import ServiceCard from "../../components/Card/Card";
import styles from "../../components/Grid/Grid.module.css";

const services = [
  {
    title: "Fumigación residencial",
    description:
      "Tratamientos seguros para hogares: control de cucarachas, hormigas, mosquitos y roedores. Productos avalados y personal capacitado.",
    image:
      "https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    title: "Fumigación en establecimientos comerciales",
    description:
      "Planes permanentes para restaurantes, tiendas, bodegas y locales. Certificados, buenas prácticas y mínimos tiempos de inactividad.",
    image:
      "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    title: "Vehículos",
    description:
      "Desinfección y control de plagas en vehículos particulares y flotas (taxis, buses, camiones). Procedimientos rápidos y efectivos.",
    image:
      "https://images.pexels.com/photos/19789837/pexels-photo-19789837.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    title: "Centros empresariales",
    description:
      "Programas integrales para edificios corporativos y parques industriales: monitoreo, prevención y respuesta rápida.",
    image:
      "https://images.pexels.com/photos/19789841/pexels-photo-19789841.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
];

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <section
        className="services-wrap"
        style={{ padding: "32px 20px", maxWidth: 1280, margin: "0 auto" }}
      >
        <header style={{ marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Nuestros servicios</h1>
          <p style={{ marginTop: 8, color: "#475569" }}>
            Soluciones de control de plagas para hogares, comercios, flotas y
            complejos empresariales.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              image={s.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
