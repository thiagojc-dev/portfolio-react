const skills = [
  { nombre: "HTML5", activo: true },
  { nombre: "CSS3", activo: true },
  { nombre: "JavaScript", activo: true },
  { nombre: "Git & GitHub", activo: true },
  { nombre: "React", activo: true },
  { nombre: "Node.js", activo: false },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section__label">Habilidades</p>
      <h2>Stack</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div
            key={skill.nombre}
            className={`skill-tag ${!skill.activo ? "skill-tag--soon" : ""}`}
          >
            {skill.nombre}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
