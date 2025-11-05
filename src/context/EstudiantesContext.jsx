import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const EstudiantesContext = createContext();

// Hook para usar el contexto fácilmente
export const useEstudiantes = () => useContext(EstudiantesContext);

// Proveedor del contexto
export const EstudiantesProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const guardados = localStorage.getItem("estudiantes");
    if (guardados) {
      setEstudiantes(JSON.parse(guardados));
    }
  }, []);

  // Guardar en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  const agregarEstudiante = (nuevo) => {
    setEstudiantes([...estudiantes, nuevo]);
  };

  const eliminarEstudiante = (index) => {
    const actualizados = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(actualizados);
  };

  return (
    <EstudiantesContext.Provider
      value={{ estudiantes, agregarEstudiante, eliminarEstudiante }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
};
