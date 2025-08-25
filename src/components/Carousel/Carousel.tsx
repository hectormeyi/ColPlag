/* import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=80", // fumigación agrícola
  "https://images.unsplash.com/photo-1627483264324-b3e6f74a09a0?auto=format&fit=crop&w=1200&q=80", // trabajador fumigando
  "https://images.unsplash.com/photo-1599076487327-482a78b67c6e?auto=format&fit=crop&w=1200&q=80"  // control de plagas
];


function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>⬅</button>
      <img src={images[current]} alt="Slide" />
      <button onClick={nextSlide}>➡</button>
    </div>
  );
}

export default Carousel; */

// ...existing code...

import { useEffect, useState } from "react";
import "./Carousel.css";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

const slides: Slide[] = [
  {
    src: "https://images.pexels.com/photos/19789837/pexels-photo-19789837.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    alt: "Técnico realizando fumigación con máquina de niebla en jardín",
    caption: "Fumigación residencial con equipo de niebla (fogging)",
  },
  {
    src: "https://images.pexels.com/photos/19789841/pexels-photo-19789841.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    alt: "Control de plagas con humo para eliminar mosquitos",
    caption: "Control de mosquitos y vectores",
  },
  {
    src: "https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    alt: "Operario en traje de protección fumigando interior",
    caption: "Fumigación en interiores con EPP",
  },
  {
    src: "https://images.pexels.com/photos/17903068/pexels-photo-17903068.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    alt: "Pulverización dirigida en cultivos",
    caption: "Tratamientos dirigidos y preventivos",
  },
  {
    src: "https://images.pexels.com/photos/10806264/pexels-photo-10806264.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    alt: "Aplicación de insecticida en campo",
    caption: "Aplicaciones seguras certificadas",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const go = (dir: "prev" | "next") => {
    setIndex((i) =>
      dir === "next"
        ? (i + 1) % slides.length
        : (i - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}

      {/* caption */}
      {slides[index]?.caption && (
        <div className="caption">
          <span>{slides[index].caption}</span>
        </div>
      )}

      {/* controles */}
      <button
        className="nav prev"
        aria-label="Anterior"
        onClick={() => go("prev")}
      >
        &#10094;
      </button>
      <button
        className="nav next"
        aria-label="Siguiente"
        onClick={() => go("next")}
      >
        &#10095;
      </button>

      {/* dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "dot-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
