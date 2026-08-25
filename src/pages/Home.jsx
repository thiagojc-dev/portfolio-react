import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Esta página no tiene lógica propia: solo compone (junta)
// los componentes en orden. Es un patrón muy común en React,
// se lo suele llamar "componente contenedor".
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
