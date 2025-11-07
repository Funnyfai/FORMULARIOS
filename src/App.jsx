import "./App.css";
import Tabla from "./components/Tabla";
import TablaMat from "./components/TablaMat";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { EstudiantesProvider } from "./context/EstudiantesContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <EstudiantesProvider>
      <BrowserRouter>
        <header className="app-header">
          <button className="modo-btn" onClick={toggleDarkMode}>
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>

          {/* 🔗 Menú de navegación simple */}
          <nav className="menu">
            <Link to="/">Formulario</Link>
            <Link to="/tabla">Estudiantes</Link>
            <Link to="/materias">Materias</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/materias" element={<TablaMat />} />
        </Routes>
      </BrowserRouter>
    </EstudiantesProvider>
  );
}

export default App;
