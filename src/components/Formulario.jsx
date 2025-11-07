import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/DisenoFormulario.css";
import { useEstudiantes } from "../context/EstudiantesContext";

function Formulario() {
  const { addEstudiante } = useEstudiantes();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    facultad: "",
    carrera: "",
  });

  const facultadesPorCarrera = {
    "Desarrollo de Software": "Facultad de Ingeniería",
    "Ingeniería de Sistemas": "Facultad de Ingeniería",
    "Administración de Empresas": "Ciencias Administrativas",
    "Contaduría Pública": "Ciencias Administrativas",
    Psicología: "Ciencias Sociales",
    "Comunicación Social": "Ciencias Sociales",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "carrera") {
      setFormData({
        ...formData,
        carrera: value,
        facultad: facultadesPorCarrera[value] || "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.carrera) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const nuevo = {
      id: Date.now().toString(),
      ...formData,
    };

    addEstudiante(nuevo);
    setFormData({
      nombre: "",
      email: "",
      direccion: "",
      facultad: "",
      carrera: "",
    });
    navigate("/tabla");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="formulario">
        <h2>Formulario de Registro</h2>

        <label>Nombre completo</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          required
        />

        <label>Carrera</label>
        <select
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona tu carrera</option>
          <option value="Desarrollo de Software">Desarrollo de Software</option>
          <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
          <option value="Administración de Empresas">
            Administración de Empresas
          </option>
          <option value="Contaduría Pública">Contaduría Pública</option>
          <option value="Psicología">Psicología</option>
          <option value="Comunicación Social">Comunicación Social</option>
        </select>

        <label>Facultad</label>
        <input type="text" name="facultad" value={formData.facultad} readOnly />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
