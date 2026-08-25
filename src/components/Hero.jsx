import { useState, useEffect } from "react";

const TEXTO = "developer_junior — aprendiendo cada día ✦";

function Hero() {

  const [textoEscrito, setTextoEscrito] = useState("");


  useEffect(() => {
    let index = 0;

    function escribir() {
      if (index < TEXTO.length) {
        setTextoEscrito((actual) => actual + TEXTO.charAt(index));
        index++;
        setTimeout(escribir, 45);
      }
    }

    escribir();
  }, []);

  return (
    <section className="hero">
      <div className="hero__terminal">
        <div className="terminal__bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal__title">bash — zsh</span>
        </div>
        <div className="terminal__body">
          <p><span className="prompt">visitante@web</span>:<span className="path">~</span>$ que haces?</p>
          <p className="typed">{textoEscrito}</p>
          <p className="cursor-line">
            <span className="prompt">visitante@web</span>:<span className="path">~</span>$ <span className="blink">▊</span>
          </p>
        </div>
      </div>

      <div className="hero__text">
        <p className="eyebrow">// disponible para nuevos proyectos</p>
        <h1>
          Hola, soy <span className="accent">Thiago Coronel</span>.<br />
          Desarrollador FullStack.
        </h1>
        <p className="hero__sub">
          Desarrollador FullStack en formación. Me gusta convertir problemas reales en interfaces simples y código prolijo.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">Ver proyectos</a>
          <a href="#contact" className="btn btn--ghost">Hablemos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
