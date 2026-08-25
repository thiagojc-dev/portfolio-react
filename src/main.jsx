import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter tiene que envolver a App para que
        useParams, Link, Routes, etc. funcionen en cualquier parte */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
