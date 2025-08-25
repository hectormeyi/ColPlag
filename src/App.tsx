// src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/WhoWeAre/WhoWeAre";
import Services from "./pages/services/Services";
import Contact from "./pages/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar"; // Solo un import
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        {/* Renderiza el Navbar una única vez, fuera del <Routes> */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;