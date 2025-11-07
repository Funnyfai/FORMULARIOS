import { createContext, useContext, useEffect, useState } from "react";

const EstudiantesContext = createContext();

export function EstudiantesProvider({ children }) {
  const [estudiantes, setEstudiantes] = useState(() => {
    try {
      const raw = localStorage.getItem("estudiantes");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  function addEstudiante(est) {
    setEstudiantes((prev) => [...prev, est]);
  }

  function removeEstudiante(id) {
    setEstudiantes((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EstudiantesContext.Provider
      value={{ estudiantes, addEstudiante, removeEstudiante }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
}

export function useEstudiantes() {
  return useContext(EstudiantesContext);
}
