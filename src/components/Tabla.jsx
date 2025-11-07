import "../style/DisenoTabla.css";
import { useEstudiantes } from "../context/EstudiantesContext";
import { useNavigate } from "react-router-dom";

function Tabla() {
  const { estudiantes, removeEstudiante } = useEstudiantes();
  const navigate = useNavigate();

  return (
    <div className="tabla-container">
      <h2>Listado de Estudiantes</h2>

      {estudiantes.length === 0 ? (
        <p>No hay estudiantes registrados aún.</p>
      ) : (
        <table className="tabla-estudiantes">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Facultad</th>
              <th>Carrera</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((est) => (
              <tr key={est.id}>
                <td>{est.nombre}</td>
                <td>{est.email}</td>
                <td>{est.direccion}</td>
                <td>{est.facultad}</td>
                <td>{est.carrera}</td>
                <td>
                  <button
                    className="btn-eliminar"
                    onClick={() => removeEstudiante(est.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn-regresar" onClick={() => navigate("/")}>
        Regresar
      </button>
    </div>
  );
}

export default Tabla;
