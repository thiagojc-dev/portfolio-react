import { useParams, Link, Navigate } from "react-router-dom";
import { proyectos } from "../data/proyectos";


function ProjectDetail() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="section project-detail">
      <Link to="/#projects" className="back-link">← Volver a proyectos</Link>

      <p className="section__label">// {proyecto.tag}</p>
      <h1>{proyecto.titulo}</h1>
      <p className="section__text">{proyecto.descripcionLarga}</p>

      <div className="stack-tags">
        {proyecto.stack.map((tecnologia) => (
          <span key={tecnologia} className="skill-tag">{tecnologia}</span>
        ))}
      </div>

      <div className="hero__cta">
        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Ver demo en vivo
        </a>
        <a href={proyecto.codigo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
          Ver código en GitHub
        </a>
      </div>
    </section>
  );
}

export default ProjectDetail;
