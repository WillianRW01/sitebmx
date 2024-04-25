import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";

import Contato from "../pages/Contato";
import Inicial from "../pages/Inicial";
import Sobre from "../pages/Sobre";


export default function AppRoutes() {

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/carros" element={<Inicial />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}
