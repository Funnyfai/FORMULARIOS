import { useState } from "react";
import { EstudiantesProvider } from "../context/EstudiantesContext";
import Formulario from "../components/formulario";

function Home() {
  const [estudiantes, setEstudiantes] = useState([]);

  // Función que recibe los datos del formulario
  const agregarEstudiante = (nuevoEstudiante) => {
    setEstudiantes([...estudiantes, nuevoEstudiante]);
  };

  return (
    <div className="contenedor">
      <EstudiantesProvider>
        <Formulario />
      </EstudiantesProvider>
    </div>
  );
}

export default Home;
