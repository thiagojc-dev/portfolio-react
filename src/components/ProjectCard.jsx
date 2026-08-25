import { Link } from "react-router-dom";


function ProjectCard({ proyecto }) {
  return (
    <article className="project-card">
      <span className="project-card__tag">// {proyecto.tag}</span>
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcionCorta}</p>
      <div className="project-card__links">
        <Link to={`/proyectos/${proyecto.id}`}>Ver detalle →</Link>
        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </article>
  );
}

export default ProjectCard;
