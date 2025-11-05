import { useLocation } from "react-router-dom";
import "../style/DisenoTabla.css";
import { useEstudiantes } from "../context/EstudiantesContext";

function Tabla() {
  const location = useLocation();
  const { estudiantes, eliminarEstudiante } = useEstudiantes();

  if (!estudiante) {
    return <p>No se recibieron datos del formulario.</p>;
  }

  return (
    <div className="tabla-container">
      <h2>Datos del Estudiante</h2>
      <table className="tabla-estudiantes">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Facultad</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{estudiante.nombre}</td>
            <td>{estudiante.email}</td>
            <td>{estudiante.direccion}</td>
            <td>{estudiante.facultad}</td>
            <td>{estudiante.carrera}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
