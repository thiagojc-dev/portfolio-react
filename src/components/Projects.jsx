import { useState } from "react";
import { proyectos } from "../data/proyectos";
import ProjectCard from "./ProjectCard";

function Projects() {
  
  const [filtro, setFiltro] = useState("Todos");

  
  const categorias = ["Todos", ...new Set(proyectos.map((p) => p.tag))];

  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.tag === filtro);

  return (
    <section id="projects" className="section">
      <p className="section__label">Mis proyectos</p>
      <h2>Proyectos</h2>

      <div className="filters">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`filter-btn ${filtro === categoria ? "active" : ""}`}
            onClick={() => setFiltro(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {proyectosFiltrados.map((proyecto) => (
          
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
