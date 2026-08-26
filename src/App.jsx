import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToHash from "./components/ScrollToHash";

function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <ScrollToHash />

      <Navbar
        menuAbierto={menuAbierto}
        onToggleMenu={() => setMenuAbierto(!menuAbierto)}
      />

      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
