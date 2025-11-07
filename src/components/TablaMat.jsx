import materiasData from "../data/data.json";
import "../style/DisenoTabla.css";
import { useNavigate } from "react-router-dom";

function TablaMat() {
  const navigate = useNavigate();

  return (
    <div className="tabla-container">
      <h2>Listado de Materias</h2>

      <table className="tabla-estudiantes">
        <thead>
          <tr>
            <th>Código</th>
            <th>Materia</th>
            <th>Docente</th>
            <th>Carrera</th>
            <th>Créditos</th>
            <th>Horas/Semana</th>
            <th>Modalidad</th>
            <th>Aula</th>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {materiasData.map((m) => (
            <tr key={m.id}>
              <td>{m.codigo}</td>
              <td>{m.materia}</td>
              <td>{m.docente}</td>
              <td>{m.carrera}</td>
              <td>{m.creditos}</td>
              <td>{m.horasSemanales}</td>
              <td>{m.modalidad}</td>
              <td>{m.aula}</td>
              <td>{m.dia}</td>
              <td>
                {m.horaInicio} - {m.horaFin}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="acciones-tabla">
        <button className="btn-volver-form" onClick={() => navigate("/")}>
          ⬅️ Volver al formulario
        </button>
      </div>
    </div>
  );
}

export default TablaMat;
