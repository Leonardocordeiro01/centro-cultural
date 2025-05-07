import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/home";
import Projetos from "./containers/projetos";
import FaloeConosco from "./containers/faleconosco";
import Noticias from "./containers/noticias";
import MyGlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyGlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/faleconosco" element={<FaloeConosco />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
